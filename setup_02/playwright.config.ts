import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration
 * User Testing Runner Configuration
 */
export default defineConfig({
    testDir: './e2e',
    outputDir: './artifacts/reports/e2e',
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ['html', { outputFolder: 'artifacts/reports/playwright-report' }]
    ],
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        { name: 'webkit', use: { ...devices['Desktop Safari'] } },
        { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
    ],
    webServer: {
        command: 'npm run start:web',
        url: 'http://localhost:3000',
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000,
    },
});
