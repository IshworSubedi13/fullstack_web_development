from flask import Flask

from Python.Assignment1.api.v1.routes.cat_routes import cats_bp


def create_app():
    app = Flask(__name__)
    app.register_blueprint(cats_bp)

    @app.route("/")
    def index():
        return {"message": "Welcome to my REST API!"}

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host="127.0.0.1", port=5000, debug=True)
