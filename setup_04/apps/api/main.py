from fastapi import FastAPI

app = FastAPI(title="LogVibe API")

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "logvibe-api"}
