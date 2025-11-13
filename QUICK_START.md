# TDD Agent Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Run the Tests
```bash
npm test
```

You'll see:
```
Test Suites: 1 failed, 1 passed, 2 total
Tests:       3 failed, 12 passed, 15 total
```

The failing tests are **intentional** - they demonstrate the RED phase of TDD!

### Step 2: Try Fixing a Test

The `validateEmail` function in `lib/utils.ts` has intentionally broken tests.

**Current code:**
```typescript
export function validateEmail(email: string): boolean {
    const regex = /^([a-zA-Z0-9]+)*@([a-zA-Z0-9]+)*\.com$/;
    return regex.test(email);
}
```

**Fix it to make tests pass:**
```typescript
export function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
```

Run tests again:
```bash
npm test
```

Now all tests should pass! ✅

### Step 3: Learn More

- **How to use the TDD agent:** [TDD_AGENT_README.md](TDD_AGENT_README.md)
- **Complete TDD workflow:** [TDD_WORKFLOW.md](TDD_WORKFLOW.md)
- **Detailed example walkthrough:** [TDD_EXAMPLE.md](TDD_EXAMPLE.md)

## 🎯 Quick Commands

```bash
# Run all tests once
npm test

# Run tests in watch mode (auto-rerun on changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## 💡 Using the TDD Agent

The TDD agent helps you follow the red/green/refactor cycle:

**Write tests first (RED):**
```
@tdd-agent Help me write tests for a user login feature
```

**Implement code (GREEN):**
```
@tdd-agent Implement the login function to make the tests pass
```

**Improve code (REFACTOR):**
```
@tdd-agent Suggest refactoring improvements for the login function
```

## 📚 What's Included

- ✅ **TDD Agent** - AI assistant for test-driven development
- ✅ **Jest** - Testing framework configured for Next.js
- ✅ **React Testing Library** - Component testing
- ✅ **TypeScript Support** - Full type safety in tests
- ✅ **Example Tests** - Live RED/GREEN examples
- ✅ **Documentation** - Comprehensive guides

## 🎓 Learning Path

1. **Beginner:** Fix the `validateEmail` function (see Step 2)
2. **Intermediate:** Write tests for other functions in `lib/utils.ts`
3. **Advanced:** Test React components in `components/`
4. **Expert:** Use TDD for all new features

## 🔄 The TDD Cycle

```
RED → Write a failing test
 ↓
GREEN → Make it pass with minimal code
 ↓
REFACTOR → Improve the code
 ↓
Repeat!
```

## 📝 Example Test

```typescript
describe('addNumbers', () => {
  // RED: Write test first (will fail)
  it('should add two numbers', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });
});

// GREEN: Implement to pass
export function addNumbers(a: number, b: number): number {
  return a + b;
}

// REFACTOR: Improve if needed
export function addNumbers(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Invalid input');
  }
  return a + b;
}
```

## 🎯 Next Steps

1. Try fixing the `validateEmail` function
2. Run tests in watch mode: `npm run test:watch`
3. Read [TDD_AGENT_README.md](TDD_AGENT_README.md) for detailed guidance
4. Use the TDD agent for your next feature
5. Share your TDD success story!

## ❓ Need Help?

- Check [TDD_WORKFLOW.md](TDD_WORKFLOW.md) for methodology
- Read [TDD_EXAMPLE.md](TDD_EXAMPLE.md) for detailed walkthrough
- See [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) for technical details

Happy Testing! 🎉
