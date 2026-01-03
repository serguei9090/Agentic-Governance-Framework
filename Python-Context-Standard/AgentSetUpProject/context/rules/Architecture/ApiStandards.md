# **Enterprise API Standards**

**Objective:** Consistency, Predictability, and Documentation First.

---

## **1. Protocol**
*   **Style:** RESTful (Resource-Oriented).
*   **Format:** JSON (`application/json`) for both Request and Response.
*   **Status Codes:** Strict adherence to HTTP Semantics.
    *   `200`: OK (Sync)
    *   `201`: Created
    *   `202`: Accepted (Async processing)
    *   `400`: Bad Request (Validation Fail)
    *   `401`: Unauthorized (No Token)
    *   `403`: Forbidden (Bad Token / Scopes)
    *   **500:** Internal Error (Generic)

## **2. Contract First (OpenAPI)**
*   **Mandate:** Every Endpoint MUST be documented.
*   **Validation:** Use `zod` or `joi` to validate inputs. The Schema is the Law.

## **3. Standard Response Envelope**
All APIs should follow a predictable structure (Reference `ErrorHandlingDirective.md` for errors).

**Success:**
```json
{
  "data": { ...payload },
  "meta": {
    "page": 1,
    "total": 100
  }
}
```

## **4. Versioning**
*   **URI Versioning:** `/api/v1/users`
*   **Deprecation:** Use `X-API-Deprecation-Date` header to warn clients.

## **5. Security**
*   **CORS:** Whitelist specific origins.
*   **Rate Limiting:** Protect every endpoint.
