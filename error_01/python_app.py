import logging
import uuid
import json
import sys
import os

# Config for demonstration
LOG_FILE = "error_01/logs/python_app.log"
os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)

# ---------------------------------------------------------
# A. The Custom Exception Hierarchy (Direct Copy from Directive)
# ---------------------------------------------------------
class AppError(Exception):
    """Base class for all application errors."""
    def __init__(self, message, status_code=500, payload=None):
        super().__init__(message)
        self.message = message
        self.status_code = status_code
        self.payload = payload

class ValidationError(AppError):
    """User sent bad data (422)."""
    def __init__(self, field_errors):
        super().__init__("Validation Failed", status_code=422, payload=field_errors)

class ConflictError(AppError):
    """Resource already exists (409)."""
    def __init__(self, message="Resource already exists"):
        super().__init__(message, status_code=409)

class NotFoundError(AppError):
    """Resource missing (404)."""
    def __init__(self, message="Resource not found"):
        super().__init__(message, status_code=404)

# ---------------------------------------------------------
# B. The Global Interceptor (Middleware Simulation)
# ---------------------------------------------------------
# Setup Logging
logger = logging.getLogger("api")
logger.setLevel(logging.INFO)
file_handler = logging.FileHandler(LOG_FILE)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
file_handler.setFormatter(formatter)
logger.addHandler(file_handler)
# Console handler for visibility
console = logging.StreamHandler()
console.setFormatter(formatter)
logger.addHandler(console)

def mock_jsonify(response_data):
    """Mock Flask jsonify"""
    return json.dumps(response_data, indent=2)

def global_error_handler(err):
    """
    The Single Source of Truth for all errors.
    """
    # 1. Generate Trace ID for tracking
    trace_id = str(uuid.uuid4())

    # 2. Determine if it's a Known Error (Operational) or Unknown (Bug)
    if isinstance(err, AppError):
        # Operational: The user did something wrong (4xx)
        # Log at INFO level (don't wake up devs)
        logger.info(f"Operational Error: {err.message} (Trace: {trace_id})")
        response = {
            "title": err.message,
            "status": err.status_code,
            "detail": err.payload or err.message,
            "traceId": trace_id
        }
        return mock_jsonify(response), err.status_code

    # 3. Handle Unknown Bugs (5xx)
    # CRITICAL: Log full stack trace for devs
    logger.error(f"SYSTEM CRASH: {str(err)} (Trace: {trace_id})", exc_info=True)

    # 4. Security Sanitization: NEVER show raw error to user
    response = {
        "title": "Internal Server Error",
        "status": 500,
        "detail": "An unexpected error occurred. Please contact support.",
        "traceId": trace_id # User gives this ID to support
    }
    return mock_jsonify(response), 500

# ---------------------------------------------------------
# Simulation Scenarios
# ---------------------------------------------------------
def run_scenario(name, logic_func):
    print(f"\n--- Running Scenario: {name} ---")
    try:
        logic_func()
        print("Success (No Error)")
    except Exception as e:
        response, status = global_error_handler(e)
        print(f"Response (Status {status}):\n{response}")

def scenario_validation_error():
    # Simulate invalid email
    raise ValidationError({"email": ["Invalid format"]})

def scenario_conflict_error():
    # Simulate duplicate user
    raise ConflictError("Email already registered")

def scenario_system_crash():
    # Simulate unexpected bug (ZeroDivisionError)
    x = 1 / 0

if __name__ == "__main__":
    print(f"Starting Python Error Handling Demo. Logging to {LOG_FILE}")
    
    run_scenario("Validation Error (422)", scenario_validation_error)
    run_scenario("Conflict Error (409)", scenario_conflict_error)
    run_scenario("System Crash (500)", scenario_system_crash)
    
    print("\nDemonstration Complete.")
