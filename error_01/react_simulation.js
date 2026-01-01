const fs = require('fs');
const path = require('path');

// Config
const LOG_FILE = path.join(__dirname, 'logs', 'react_simulation.log');

// Ensure log dir exists
if (!fs.existsSync(path.dirname(LOG_FILE))) {
    fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
}

// ---------------------------------------------------------
// Logging Helper (Simulating Browser Console + writing to file)
// ---------------------------------------------------------
function log(level, message) {
    const timestamp = new Date().toISOString();
    const logLine = `${timestamp} - ${level} - ${message}\n`;

    // Write to file
    fs.appendFileSync(LOG_FILE, logLine);

    // Console output
    console.log(`[${level}] ${message}`);
}

// Mock Toast
const toast = {
    error: (msg) => log("UI_TOAST", `Showing user error: "${msg}"`)
};

// ---------------------------------------------------------
// 5. React/Mobile Implementation (Strict)
// A. API Interceptor (Axios Simulation)
// ---------------------------------------------------------
const api = {
    interceptors: {
        response: {
            use: (onSuccess, onError) => {
                // Register the interceptor
                api._interceptor_error = onError;
            }
        }
    },
    _interceptor_error: null, // Placeholder for the registered handler

    // Simulator to trigger the interceptor
    simulateError: (status, data = {}) => {
        const error = {
            response: {
                status: status,
                data: data
            },
            message: "Request failed"
        };

        log("NETWORK", `Simulating API Error ${status}`);

        if (api._interceptor_error) {
            // Execute the interceptor logic
            try {
                api._interceptor_error(error).catch(e => {
                    log("APP_LOGIC", `Promise Rejected as expected: ${e.message || status}`);
                });
            } catch (e) {
                log("APP_LOGIC", `Interceptor threw error: ${e.message}`);
            }
        }
    }
};

// --- IMPLEMENTING THE DIRECTIVE CODE ---

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response ? error.response.status : 0;

        log("INTERCEPTOR", `Handling error status: ${status}`);

        // CASE 1: Validation Error (422) - Pass back to form
        if (status === 422) {
            log("INTERCEPTOR", "Case 1: 422 Validation Error -> Rejecting for Form Handling");
            return Promise.reject(error); // Form library (Formik/React Hook Form) handles this
        }

        // CASE 2: Auth Error (401) - Redirect to Login
        if (status === 401) {
            log("INTERCEPTOR", "Case 2: 401 Unauthorized -> Redirecting to /login");
            // Mock window.location
            log("NAVIGATION", "window.location.href = '/login'");
            return Promise.reject(error);
        }

        // CASE 3: Server Crash (500) or Network Error - Show Toast
        const message = status === 500
            ? "Server Error. Please try again later."
            : "Network Error. Check your connection.";

        toast.error(message);

        // Log traceId if available
        if (error.response?.data?.traceId) {
            console.error(`Support Trace ID: ${error.response.data.traceId}`);
            log("INTERCEPTOR", `Logged Support Trace ID: ${error.response.data.traceId}`);
        }

        return Promise.reject(error);
    }
);


// ---------------------------------------------------------
// Scenarios
// ---------------------------------------------------------

async function runScenarios() {
    log("SYSTEM", "Starting React Error Handling Simulation");

    log("SCENARIO", "--- Scenario 1: Validation Error (422) ---");
    await api.simulateError(422, { errors: { email: ["Invalid"] } });

    log("SCENARIO", "--- Scenario 2: Auth Error (401) ---");
    await api.simulateError(401);

    log("SCENARIO", "--- Scenario 3: Server Crash (500) ---");
    await api.simulateError(500, { traceId: "abc-123-crash", title: "Internal Error" });

    log("SCENARIO", "--- Scenario 4: Unknown Error (503) ---");
    await api.simulateError(503);

    log("SYSTEM", "Demonstration Complete");
}

runScenarios();
