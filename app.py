from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

data = {
    # your data here
}

@app.route('/financials')
def financial_data():
    return jsonify(data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

