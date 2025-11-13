# TDD Example: Email Validation

This file demonstrates the TDD red/green/refactor cycle using the `validateEmail` function.

## Current Status: RED Phase ❌

The tests have been written and they are **failing**, which is exactly what we want in TDD!

### Test Results

```
FAIL  __tests__/lib/utils.test.ts
  ● validateEmail › should return false for invalid email addresses
  ● validateEmail › should handle email addresses with subdomains
  ● validateEmail › should handle email addresses with special characters
```

### Why Tests Are Failing

The current implementation in `lib/utils.ts`:

```typescript
export function validateEmail(email: string): boolean {
    const regex = /^([a-zA-Z0-9]+)*@([a-zA-Z0-9]+)*\.com$/;
    return regex.test(email);
}
```

**Problems:**
1. ❌ Only accepts `.com` TLDs (fails for `.org`, `.net`, etc.)
2. ❌ Doesn't handle subdomains (fails for `user@mail.example.com`)
3. ❌ Doesn't handle special characters in usernames (fails for `user.name@example.com`)
4. ❌ The `*` quantifier allows empty strings between `@` and domain

## RED Phase: Understanding Test Failures

### Test Case 1: Invalid Emails
```typescript
it('should return false for invalid email addresses', () => {
  expect(validateEmail('@example.com')).toBe(false);
});
```
**Expected:** `false` (invalid email)  
**Got:** `true` (regex allows empty username due to `*` quantifier)

### Test Case 2: Subdomains
```typescript
it('should handle email addresses with subdomains', () => {
  expect(validateEmail('user@mail.example.com')).toBe(true);
});
```
**Expected:** `true` (valid email with subdomain)  
**Got:** `false` (regex doesn't support dots in domain)

### Test Case 3: Special Characters
```typescript
it('should handle email addresses with special characters', () => {
  expect(validateEmail('user.name@example.com')).toBe(true);
});
```
**Expected:** `true` (valid email with dot in username)  
**Got:** `false` (regex doesn't allow dots in username)

## Next Steps: GREEN Phase 🟢

To make tests pass, we need to update the `validateEmail` function:

1. Fix the regex to properly validate email format
2. Support multiple TLDs (not just `.com`)
3. Support subdomains
4. Support special characters in usernames (dots, plus signs)
5. Properly reject invalid emails (empty username, etc.)

### Proposed Implementation

```typescript
export function validateEmail(email: string): boolean {
    // More comprehensive email validation regex
    const regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
```

**Improvements:**
- ✅ `[a-zA-Z0-9._+-]+` - Allows dots, plus signs in username (at least one char)
- ✅ `[a-zA-Z0-9.-]+` - Allows subdomains and hyphens in domain
- ✅ `\.[a-zA-Z]{2,}` - Accepts any TLD with at least 2 characters

## After GREEN: REFACTOR Phase 🔄

Once tests pass, consider refactoring:

1. **Add more edge case tests**
   - Maximum email length
   - Consecutive dots
   - International characters
   - Edge cases for TLDs

2. **Improve validation logic**
   - Consider using a well-tested library
   - Add more comprehensive checks
   - Document limitations

3. **Add integration tests**
   - Test with real form submissions
   - Test error message display
   - Test user feedback

## Benefits of TDD

This example demonstrates key TDD benefits:

1. **Tests written first** - We defined expected behavior before implementation
2. **Clear requirements** - Tests document what "valid email" means
3. **Immediate feedback** - We know exactly what's broken
4. **Confidence to refactor** - Tests ensure we don't break working code
5. **Better design** - Writing tests first leads to more testable code

## Running This Example

```bash
# Run tests to see failures (RED)
npm test

# After fixing validateEmail function
npm test  # Should show GREEN (all tests pass)

# Then refactor and run tests again
npm test  # Should stay GREEN
```

## Try It Yourself!

1. Look at the failing tests in `__tests__/lib/utils.test.ts`
2. Update the `validateEmail` function in `lib/utils.ts`
3. Run `npm test` to see if tests pass
4. Once green, try refactoring to improve the code
5. Run tests again to ensure they still pass

This is the TDD red/green/refactor cycle in action! 🎉
