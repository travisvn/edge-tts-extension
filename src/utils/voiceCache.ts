import browser from 'webextension-polyfill';
import { Voice } from '../lib/EdgeTTSClient';

interface CachedVoices {
  voices: Voice[];
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

export class VoiceCache {
  private static readonly CACHE_KEY = 'tts_voices_cache';
  private static readonly DEFAULT_TTL = 24 * 60 * 60 * 1000; // 24 hours

  /**
   * Get cached voices if they're still valid
   */
  static async getCachedVoices(): Promise<Voice[] | null> {
    try {
      const result = await browser.storage.local.get(this.CACHE_KEY);
      const cached = result[this.CACHE_KEY] as CachedVoices | undefined;

      if (!cached) {
        return null;
      }

      const now = Date.now();
      const isExpired = (now - cached.timestamp) > cached.ttl;

      if (isExpired) {
        // Clean up expired cache
        await this.clearCache();
        return null;
      }

      return cached.voices;
    } catch (error) {
      console.warn('Failed to get cached voices:', error);
      return null;
    }
  }

  /**
   * Cache voices with optional TTL
   */
  static async setCachedVoices(voices: Voice[], ttl: number = this.DEFAULT_TTL): Promise<void> {
    try {
      const cachedData: CachedVoices = {
        voices,
        timestamp: Date.now(),
        ttl
      };

      await browser.storage.local.set({
        [this.CACHE_KEY]: cachedData
      });
    } catch (error) {
      console.warn('Failed to cache voices:', error);
    }
  }

  /**
   * Clear cached voices
   */
  static async clearCache(): Promise<void> {
    try {
      await browser.storage.local.remove(this.CACHE_KEY);
    } catch (error) {
      console.warn('Failed to clear voice cache:', error);
    }
  }

  /**
   * Get cache status (size, expiry, etc.)
   */
  static async getCacheStatus(): Promise<{
    exists: boolean;
    voiceCount: number;
    ageMs: number;
    expiresInMs: number;
  }> {
    try {
      const result = await browser.storage.local.get(this.CACHE_KEY);
      const cached = result[this.CACHE_KEY] as CachedVoices | undefined;

      if (!cached) {
        return {
          exists: false,
          voiceCount: 0,
          ageMs: 0,
          expiresInMs: 0
        };
      }

      const now = Date.now();
      const ageMs = now - cached.timestamp;
      const expiresInMs = Math.max(0, cached.ttl - ageMs);

      return {
        exists: true,
        voiceCount: cached.voices.length,
        ageMs,
        expiresInMs
      };
    } catch (error) {
      console.warn('Failed to get cache status:', error);
      return {
        exists: false,
        voiceCount: 0,
        ageMs: 0,
        expiresInMs: 0
      };
    }
  }
}