from flask import Flask, jsonify

app = Flask(__name__, static_url_path='/public', static_folder='public')

@app.get("/")
def index():
    return "Welcome to REST API!"

@app.get("/api/v1/cat")
def get_cat():
    cat = [{
        "cat_id": "ali",
        "name": "Mittens",
        "birthdate": "2003-03-03",
        "weight": 8,
        "owner": "ishwor",
        "image": "https://ishworsubedi.com.np/wp-content/uploads/2025/09/about_page.png"
    }]
    return jsonify(cat)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)