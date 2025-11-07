from flask import request, jsonify
from ..models.user_model import list_all_user,add_user,find_user_by_id

def get_users():
    users=list_all_user()
    return jsonify(users),200

def get_user_by_id(id):
    try:
        user = find_user_by_id(id)
    except (ValueError, TypeError):
        return {"error": "malformed input"}, 404

    if not user:
        return {"error": "not found"}, 404
    return user, 200

def create_user():
    data = request.get_json()
    user = add_user(data)
    return user, 200

def update_user(user_id):
    return jsonify({'message': 'User updated.'}), 200

def delete_user(user_id):
    return jsonify({'message': 'User Deleted.'}), 200
