import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './e2e',
    outputDir: './artifacts/reports/e2e',
    reporter: [['html', { outputFolder: 'artifacts/reports/playwright-report' }]],
    use: {
        baseURL: 'http://localhost:5173', // Vite default port
        trace: 'on-first-retry',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    ],
    webServer: {
        command: 'npm run dev --prefix apps/web',
        url: 'http://localhost:5173',
        reuseExistingServer: !process.env.CI,
    },
});
