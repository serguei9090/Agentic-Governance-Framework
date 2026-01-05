# **AI Agent Operating Modes**

I have two standard operating procedures for testing. I will tell you which **MODE** to use at the start of our task.

## **MODE A: NEW FEATURE (Construction)**

**Reference:** Use the strategies in .agent/rules/TestsFramework/TestingStandard.md

1. **Ask for Requirements:** Do not write code until I approve the Gherkin (.feature) file.  
2. **Red/Green/Refactor:** Write the failing test first, then the code.  
3. **Strict TDD:** Do not write implementation logic without a corresponding step definition.

## **MODE B: LEGACY CODE (Retrofit)**

**Reference:** Use the strategies in .agent/rules/TestsFramework/ProtocolRetrofitting.md

1. **Analyze & Lock-in:** Read the existing code and write Gherkin that describes exactly what it *currently* does (even if buggy).  
2. **No Refactoring:** Do not change logic unless explicitly asked. Only add data-testid for selectors.  
3. **Verify:** Ensure tests pass immediately against the current code base.

*Please acknowledge you understand these two modes. I will now give you my first task.*