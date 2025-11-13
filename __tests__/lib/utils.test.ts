/**
 * Example TDD Test Suite for lib/utils.ts
 * 
 * This demonstrates the red/green/refactor cycle:
 * 1. RED: Write tests that fail
 * 2. GREEN: Implement minimal code to pass
 * 3. REFACTOR: Improve code while keeping tests green
 */

import { describe, it, expect } from '@jest/globals';
import { validateEmail, generateToken } from '@/lib/utils';

describe('validateEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user@domain.com')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(validateEmail('invalid')).toBe(false);
    expect(validateEmail('test@')).toBe(false);
    expect(validateEmail('@example.com')).toBe(false);
    expect(validateEmail('')).toBe(false);
  });

  it('should handle email addresses with subdomains', () => {
    expect(validateEmail('user@mail.example.com')).toBe(true);
  });

  it('should handle email addresses with numbers', () => {
    expect(validateEmail('user123@example123.com')).toBe(true);
  });

  it('should handle email addresses with special characters', () => {
    expect(validateEmail('user.name@example.com')).toBe(true);
    expect(validateEmail('user+tag@example.com')).toBe(true);
  });
});

describe('generateToken', () => {
  it('should generate a non-empty string token', () => {
    const token = generateToken();
    expect(typeof token).toBe('string');
    expect(token.length).toBeGreaterThan(0);
  });

  it('should generate unique tokens', () => {
    const token1 = generateToken();
    const token2 = generateToken();
    expect(token1).not.toBe(token2);
  });

  it('should generate tokens with sufficient length for security', () => {
    const token = generateToken();
    expect(token.length).toBeGreaterThanOrEqual(10);
  });
});
