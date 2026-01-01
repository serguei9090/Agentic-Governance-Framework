import { defineConfig, devices } from '@playwright/test';

/**
 * Directive 4: Generate playwright.config.ts (E2E Testing)
 * User Testing Runner Configuration
 */
export default defineConfig({
    testDir: './e2e', // Directory where e2e tests are located

    // Save screenshots/video on failure to /reports/e2e
    outputDir: './artifacts/reports/e2e',

    // Fail the build on CI if you accidentally left test.only in the source code.
    forbidOnly: !!process.env.CI,

    // Retry on CI only
    retries: process.env.CI ? 2 : 0,

    // Opt out of parallel tests on CI.
    workers: process.env.CI ? 1 : undefined,

    // Reporter to use
    reporter: [
        ['html', { outputFolder: 'artifacts/reports/playwright-report' }]
    ],

    use: {
        // Base URL to use in actions like `await page.goto('/')`.
        baseURL: 'http://localhost:3000',

        // Collect trace when retrying the failed test.
        trace: 'on-first-retry',

        // Screenshot on failure
        screenshot: 'only-on-failure',

        // Video on failure
        video: 'retain-on-failure',
    },

    // Configure projects for major browsers
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] }, // Mobile Safari behavior largely covered here or use Mobile Safari specific device
        },
        {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 12'] },
        },
    ],

    // Run your local dev server before starting the tests.
    webServer: {
        command: 'npm run start:web', // Command to run the app
        url: 'http://localhost:3000',
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000,
    },
});
