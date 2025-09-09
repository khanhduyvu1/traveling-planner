from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # keep open for dev

@app.get("/healthz")
def healthz():
    return jsonify(ok=True, message="Backend running!")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
