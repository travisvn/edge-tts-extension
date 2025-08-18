/****
 * DRM class for generating Sec-MS-GEC tokens required by Microsoft Edge TTS API
 */
export class DRM {
  // Windows file time epoch (January 1, 1601 00:00:00 UTC) in Unix seconds
  private static readonly WIN_EPOCH = 11644473600;

  // Seconds to nanoseconds conversion factor
  private static readonly S_TO_NS = 1e9;

  // Trusted client token used in hash generation
  private static readonly TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";

  // Clock skew adjustment in seconds
  private static clockSkewSeconds = 0.0;

  /**
   * Get the current Unix timestamp adjusted for clock skew
   */
  private static getUnixTimestamp(): number {
    return Math.floor(Date.now() / 1000 + this.clockSkewSeconds);
  }

  /**
   * SHA256 hash function that works in both browser and Node.js
   */
  private static async sha256(message: string): Promise<string> {
    // Use Web Crypto API (available in browsers and recent Node via globalThis.crypto)
    const cryptoImpl: Crypto | undefined = (globalThis as any).crypto;
    if (!cryptoImpl || !cryptoImpl.subtle) {
      throw new Error('Web Crypto API not available: crypto.subtle is required in this environment.');
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await cryptoImpl.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex.toUpperCase();
  }

  /**
   * Generates the Sec-MS-GEC token value.
   * 
   * This function generates a token value based on the current time in Windows file time format
   * adjusted for clock skew, and rounded down to the nearest 5 minutes. The token is then hashed
   * using SHA256 and returned as an uppercased hex digest.
   * 
   * @returns The generated Sec-MS-GEC token value.
   */
  public static async generateSecMsGec(): Promise<string> {
    // Get the current timestamp in Unix format with clock skew correction
    let ticks = this.getUnixTimestamp();

    // Switch to Windows file time epoch (1601-01-01 00:00:00 UTC)
    ticks += this.WIN_EPOCH;

    // Round down to the nearest 5 minutes (300 seconds)
    ticks -= ticks % 300;

    // Convert ticks to 100-nanosecond intervals (Windows file time format)
    ticks *= this.S_TO_NS / 100;

    // Create string to hash by concatenating ticks and trusted client token
    const strToHash = `${Math.floor(ticks)}${this.TRUSTED_CLIENT_TOKEN}`;

    // Compute SHA256 hash and return uppercase hex digest
    return await this.sha256(strToHash);
  }

  /**
   * Set clock skew adjustment
   * @param seconds The clock skew in seconds
   */
  public static setClockSkew(seconds: number): void {
    this.clockSkewSeconds = seconds;
  }
}