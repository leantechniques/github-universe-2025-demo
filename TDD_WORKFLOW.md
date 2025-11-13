# TDD Workflow Guide

## Overview

This repository now includes a TDD (Test-Driven Development) agent and testing infrastructure to support the red/green/refactor development cycle.

## Test Infrastructure

### Installed Tools
- **Jest**: Testing framework
- **React Testing Library**: For testing React components
- **@testing-library/jest-dom**: Custom matchers for DOM elements
- **@testing-library/user-event**: User interaction simulation
- **TypeScript**: Full type support in tests

### Configuration Files
- `jest.config.ts`: Jest configuration with Next.js integration
- `jest.setup.ts`: Test environment setup
- `__tests__/`: Test directory structure

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## TDD Red/Green/Refactor Cycle

### Phase 1: RED - Write a Failing Test

1. **Understand the requirement**: What feature or behavior needs to be implemented?
2. **Write a test first**: Create a test that describes the expected behavior
3. **Run the test**: Verify it fails (RED)
4. **Check failure reason**: Ensure it fails for the right reason

**Example:**
```typescript
// RED: Test fails because function doesn't exist or doesn't work correctly
describe('calculateTotal', () => {
  it('should add two numbers correctly', () => {
    expect(calculateTotal(10, 20)).toBe(30);
  });
});
```

### Phase 2: GREEN - Make the Test Pass

1. **Write minimal code**: Implement just enough to make the test pass
2. **Run the test**: Verify it passes (GREEN)
3. **Avoid over-engineering**: Don't add features not covered by tests

**Example:**
```typescript
// GREEN: Minimal implementation to pass the test
export function calculateTotal(a: number, b: number): number {
  return a + b;
}
```

### Phase 3: REFACTOR - Improve the Code

1. **Keep tests passing**: All tests must remain green
2. **Improve structure**: Refactor for readability, performance, or maintainability
3. **Remove duplication**: Apply DRY principles
4. **Run tests frequently**: Ensure refactoring doesn't break functionality

**Example:**
```typescript
// REFACTOR: Add type safety and validation
export function calculateTotal(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Invalid input: numbers must be finite');
  }
  return a + b;
}

// Add test for the new behavior
it('should throw error for invalid input', () => {
  expect(() => calculateTotal(NaN, 10)).toThrow('Invalid input');
});
```

## Test Structure Best Practices

### Organize Tests with describe/it

```typescript
describe('ComponentName or FunctionName', () => {
  describe('specific behavior or scenario', () => {
    it('should do something specific', () => {
      // Test implementation
    });
  });
});
```

### Follow AAA Pattern

```typescript
it('should update user profile', async () => {
  // Arrange: Set up test data and dependencies
  const user = { name: 'John', email: 'john@example.com' };
  const mockApi = jest.fn().mockResolvedValue({ success: true });
  
  // Act: Perform the action being tested
  const result = await updateProfile(user, mockApi);
  
  // Assert: Verify the expected outcome
  expect(result.success).toBe(true);
  expect(mockApi).toHaveBeenCalledWith(user);
});
```

### Test Component Behavior, Not Implementation

```typescript
// ✅ Good: Tests user-visible behavior
it('should display error message when form is invalid', async () => {
  render(<LoginForm />);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  
  await userEvent.click(submitButton);
  
  expect(screen.getByText(/please enter your email/i)).toBeInTheDocument();
});

// ❌ Bad: Tests implementation details
it('should set error state to true when validation fails', () => {
  const { result } = renderHook(() => useFormValidation());
  expect(result.current.hasError).toBe(true);
});
```

## Using the TDD Agent

The TDD agent is available as a custom agent in this repository. It can help you:

1. **Write tests first**: Guide you through creating comprehensive test suites
2. **Implement features**: Help write minimal code to pass tests
3. **Refactor safely**: Suggest improvements while keeping tests green
4. **Follow best practices**: Ensure tests are well-structured and maintainable

### Example Usage

When working on a feature:

1. Ask the TDD agent to help write tests for the requirement
2. Run tests to see them fail (RED phase)
3. Ask the TDD agent to implement the feature
4. Run tests to see them pass (GREEN phase)
5. Ask the TDD agent for refactoring suggestions
6. Apply refactoring while keeping tests green (REFACTOR phase)

## Example Test Files

Check these files for TDD examples:
- `__tests__/lib/utils.test.ts`: Unit tests for utility functions
- `__tests__/components/user-form.test.tsx`: Component tests

## Tips for Effective TDD

1. **Start small**: Write the simplest test first
2. **One test at a time**: Focus on making one test pass before moving to the next
3. **Test behavior, not implementation**: Focus on what the code does, not how
4. **Keep tests independent**: Each test should run in isolation
5. **Write readable tests**: Tests serve as documentation
6. **Refactor fearlessly**: Tests provide a safety net
7. **Commit after green**: Commit when tests pass, before refactoring
8. **Don't skip red**: Always see the test fail first

## Common Testing Patterns

### Testing Async Functions

```typescript
it('should fetch user data', async () => {
  const user = await fetchUser(1);
  expect(user.name).toBe('John');
});
```

### Testing with Mocks

```typescript
it('should call API with correct parameters', async () => {
  const mockFetch = jest.fn().mockResolvedValue({ data: 'result' });
  await submitForm(mockFetch, { name: 'John' });
  expect(mockFetch).toHaveBeenCalledWith('/api/submit', {
    method: 'POST',
    body: JSON.stringify({ name: 'John' })
  });
});
```

### Testing React Components

```typescript
it('should render user information', () => {
  render(<UserProfile name="John" email="john@example.com" />);
  expect(screen.getByText('John')).toBeInTheDocument();
  expect(screen.getByText('john@example.com')).toBeInTheDocument();
});
```

### Testing User Interactions

```typescript
it('should toggle visibility when button is clicked', async () => {
  render(<ToggleComponent />);
  const button = screen.getByRole('button', { name: /show/i });
  
  await userEvent.click(button);
  
  expect(screen.getByText(/content is visible/i)).toBeInTheDocument();
});
```

## Continuous Integration

Tests should be run:
- Before every commit
- In CI/CD pipeline
- Before deploying to production

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [TDD by Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)

## Next Steps

1. Start with simple utility functions
2. Practice the red/green/refactor cycle
3. Gradually add tests for existing code
4. Write tests for all new features
5. Aim for meaningful test coverage
6. Use the TDD agent to guide your workflow

Happy Testing! 🎉
