# TDD Agent - Test-Driven Development Assistant

## What is the TDD Agent?

The TDD Agent is a specialized custom agent that helps you follow Test-Driven Development (TDD) practices using the red/green/refactor cycle. It's configured in `.github/agents/tdd-agent.md` and integrates with your development workflow.

## What Can the TDD Agent Do?

### 1. Guide Through the Red Phase (Write Failing Tests)
- Create comprehensive test suites based on requirements
- Write clear, descriptive test cases
- Ensure tests fail for the right reasons
- Follow testing best practices

### 2. Implement the Green Phase (Make Tests Pass)
- Write minimal code to pass tests
- Avoid over-engineering
- Maintain type safety with TypeScript
- Follow repository coding standards

### 3. Facilitate the Refactor Phase (Improve Code)
- Suggest refactoring opportunities
- Improve code readability and structure
- Eliminate duplication
- Ensure tests remain passing

## How to Use the TDD Agent

### Starting a New Feature

**Step 1: RED - Write Tests First**
```
@tdd-agent Help me write tests for a user authentication feature that:
- Validates email format
- Requires password of at least 8 characters
- Returns error messages for invalid input
```

**Step 2: GREEN - Implement Feature**
```
@tdd-agent Implement the authentication function to make these tests pass
```

**Step 3: REFACTOR - Improve Code**
```
@tdd-agent Review the authentication code and suggest refactoring improvements
```

### Working with Existing Code

**Add Tests to Legacy Code**
```
@tdd-agent Write tests for the complexFunction in components/user-form.tsx
```

**Refactor with Safety**
```
@tdd-agent I want to refactor the complexFunction to reduce nesting. 
Help me maintain test coverage while improving the code structure.
```

## Test Infrastructure

The repository is configured with:
- **Jest**: Testing framework
- **React Testing Library**: Component testing
- **TypeScript**: Full type support
- **Coverage reporting**: Track test coverage

### Available Commands

```bash
# Run all tests
npm test

# Watch mode (auto-rerun on changes)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## TDD Workflow Example

### Scenario: Adding a Feature to Calculate Discount

**1. RED Phase - Write Failing Test**
```typescript
describe('calculateDiscount', () => {
  it('should apply 10% discount for orders over $100', () => {
    expect(calculateDiscount(150)).toBe(135);
  });
});
```

Run tests: ❌ FAIL (function doesn't exist)

**2. GREEN Phase - Minimal Implementation**
```typescript
export function calculateDiscount(amount: number): number {
  if (amount > 100) {
    return amount * 0.9;
  }
  return amount;
}
```

Run tests: ✅ PASS

**3. REFACTOR Phase - Improve Code**
```typescript
export function calculateDiscount(
  amount: number, 
  threshold = 100, 
  discountRate = 0.1
): number {
  if (!Number.isFinite(amount) || amount < 0) {
    throw new Error('Invalid amount');
  }
  return amount > threshold ? amount * (1 - discountRate) : amount;
}
```

Add tests for new behavior and edge cases:
```typescript
it('should throw error for negative amounts', () => {
  expect(() => calculateDiscount(-10)).toThrow('Invalid amount');
});

it('should allow custom discount rates', () => {
  expect(calculateDiscount(100, 50, 0.2)).toBe(80);
});
```

Run tests: ✅ PASS

## Current Demo: Email Validation

The repository includes a live TDD example with the `validateEmail` function:

- **Status**: RED phase (tests failing)
- **Location**: `__tests__/lib/utils.test.ts`
- **Implementation**: `lib/utils.ts`
- **Guide**: See `TDD_EXAMPLE.md` for detailed walkthrough

Try fixing the `validateEmail` function to make tests pass!

## Best Practices

### When to Use the TDD Agent

✅ **Do use for:**
- New feature development
- Adding tests to existing code
- Refactoring with safety
- Learning TDD practices
- Complex business logic

❌ **Don't use for:**
- Simple configuration changes
- Documentation updates
- Dependency updates
- Build configuration (unless testing is involved)

### Writing Good Tests

The TDD Agent follows these principles:

1. **Descriptive names**: Tests should read like specifications
2. **Single responsibility**: One test, one assertion (when possible)
3. **Arrange-Act-Assert**: Clear test structure
4. **Test behavior, not implementation**: Focus on outcomes
5. **Independent tests**: No dependencies between tests

### Example: Good vs Bad Tests

**❌ Bad Test**
```typescript
it('works', () => {
  expect(func()).toBeTruthy();
});
```

**✅ Good Test**
```typescript
it('should return user profile with full name when given valid ID', () => {
  const profile = getUserProfile(123);
  expect(profile.fullName).toBe('John Doe');
});
```

## Integration with Other Agents

The TDD Agent works well with other custom agents:

- **code-reviewer**: Review test quality and coverage
- **frontend-dev**: Implement UI components with tests
- **docs-expert**: Document testing practices

## Tips for Success

1. **Start small**: Begin with simple utility functions
2. **Red first**: Always see the test fail before implementing
3. **Minimal green**: Write just enough code to pass
4. **Refactor fearlessly**: Tests provide safety net
5. **Commit often**: After each green phase
6. **Real bugs**: Write tests when bugs are found

## Resources

- **TDD_WORKFLOW.md**: Comprehensive TDD guide
- **TDD_EXAMPLE.md**: Live example walkthrough
- **__tests__/**: Example test files
- **.github/agents/tdd-agent.md**: Agent configuration

## Getting Started

1. Read `TDD_WORKFLOW.md` to understand the process
2. Check `TDD_EXAMPLE.md` for a concrete example
3. Try fixing the `validateEmail` function
4. Use the TDD agent for your next feature
5. Practice the red/green/refactor cycle

## Questions?

The TDD agent can help you:
- Understand test failures
- Write better test cases
- Refactor safely
- Learn TDD practices
- Improve code quality

Just ask! For example:
```
@tdd-agent I have a failing test, can you help me understand why?
@tdd-agent How should I test async functions?
@tdd-agent What's the best way to test React hooks?
```

Happy testing! 🎯
