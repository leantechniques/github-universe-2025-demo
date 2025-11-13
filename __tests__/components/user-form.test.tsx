/**
 * Example TDD Test Suite for components/user-form.tsx
 * 
 * This demonstrates testing React components using the red/green/refactor cycle
 * with React Testing Library
 */

import { describe, it, expect } from '@jest/globals';
import { complexFunction } from '@/components/user-form';

describe('complexFunction', () => {
  describe('when all parameters are positive', () => {
    it('should return sum of all parameters', () => {
      expect(complexFunction(1, 2, 3, 4)).toBe(10);
      expect(complexFunction(5, 5, 5, 5)).toBe(20);
    });
  });

  describe('when d is not positive', () => {
    it('should return sum of a, b, and c', () => {
      expect(complexFunction(1, 2, 3, 0)).toBe(6);
      expect(complexFunction(1, 2, 3, -1)).toBe(6);
    });
  });

  describe('when c and d are not positive', () => {
    it('should return sum of a and b', () => {
      expect(complexFunction(1, 2, 0, 0)).toBe(3);
      expect(complexFunction(5, 3, -1, -1)).toBe(8);
    });
  });

  describe('when only a is positive', () => {
    it('should return a', () => {
      expect(complexFunction(5, 0, 0, 0)).toBe(5);
      expect(complexFunction(10, -1, -1, -1)).toBe(10);
    });
  });

  describe('when a is not positive', () => {
    it('should return 0', () => {
      expect(complexFunction(0, 1, 2, 3)).toBe(0);
      expect(complexFunction(-1, 1, 2, 3)).toBe(0);
    });
  });

  describe('edge cases', () => {
    it('should handle b and d positive but c not positive', () => {
      expect(complexFunction(1, 2, 0, 3)).toBe(6);
    });

    it('should handle c and d positive but b not positive', () => {
      expect(complexFunction(1, 0, 2, 3)).toBe(6);
    });
  });
});

/**
 * Note: UserForm component has security issues that should be addressed:
 * - Uses dangerouslySetInnerHTML (XSS vulnerability)
 * - Uses eval() (code injection vulnerability)
 * - Stores credentials in localStorage (insecure storage)
 * 
 * These are intentional for demo purposes and should be fixed in a real application.
 * 
 * For TDD, we would:
 * 1. RED: Write tests for secure behavior
 * 2. GREEN: Implement secure alternatives
 * 3. REFACTOR: Clean up and improve implementation
 */
