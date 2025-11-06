from flask import request, jsonify
from ..models.cat_model import add_cat, find_cat_by_id, list_all_cats

def get_cats():
    cats = list_all_cats()
    return jsonify(cats), 200

def get_cat_by_id(cat_id):
    cat = find_cat_by_id(cat_id)
    if cat:
        return jsonify(cat), 200
    else:
        return jsonify({'error': 'Cat not found'}), 404

def create_cat():
    data = request.get_json()
    result = add_cat(data)
    if result.get('cat_id'):
        return jsonify({'message': 'New cat added.', 'result': result}), 201
    else:
        return jsonify({'error': 'Bad request'}), 400

def update_cat(cat_id):
    return jsonify({'message': 'Cat item updated.'}), 200

def delete_cat(cat_id):
    return jsonify({'message': 'Cat item deleted.'}), 200