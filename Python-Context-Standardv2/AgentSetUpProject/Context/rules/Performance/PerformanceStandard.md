# Performance Budget & Hygiene (Python v2)

## 1. Core Principles (Invariants)
*   **Lazy Loading:** Do not load heavy data until requested.
*   **Database Hygiene:** Fix N+1 queries. Use `joinedload` eagerly where needed.
*   **Async I/O:** Use `async/await` for all I/O bound operations (DB, API calls).
*   **Caching:** Use `@rx.var(cache=True)` or Redis for expensive computations.

## 2. Workflow (Optimization Cycle)
1.  **Measure:** Use Python Profilers (cProfile) or simple logging timers.
2.  **Audit:** Identify Slow SQL Queries (Log Slow Queries > 500ms).
3.  **Optimize:** 
    *   **SQL:** Add Indexes to columns in `WHERE` clause.
    *   **Python:** Move blocking code to Background Tasks.
    *   **UI:** Use `rx.cond` to conditionally render heavy components.

## 3. Thresholds (Strict)
| Metric | Limit | Rationale |
| :--- | :--- | :--- |
| **API Response** | < 500ms | User perception of "Fast". |
| **SQL Query** | < 100ms | Database health. |
| **Startup** | < 5s | Container agility. |

## 4. Forbidden Patterns (Strict)
1.  **N+1 Queries:** Looping over parents and fetching children one by one. Use JOINs.
2.  **Blocking:** `time.sleep()` or heavy math in main thread.
3.  **Mega States:** Storing huge datasets (10k+ rows) in Reflex State memory. Use pagination.

## 5. Golden Example (Async & Background)
```python
class TaskState(rx.State):
    # heavy operation running in background process
    @rx.background
    async def process_data(self):
        async with self:
            self.status = "Processing..."
        
        # Heavy IO
        result = await fetch_large_dataset()
        
        async with self:
            self.data = result
            self.status = "Done"
```
