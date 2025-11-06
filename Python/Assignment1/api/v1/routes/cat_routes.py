from flask import Blueprint
from ..controllers.cat_controller import (get_cats,get_cat_by_id,create_cat,update_cat,delete_cat)

cats_bp = Blueprint('cats', __name__, url_prefix='/api/v1/cat')

@cats_bp.route('/', methods=['GET'])
def get_all_cats():
    return get_cats()

@cats_bp.route('/', methods=['POST'])
def add_cat():
    return create_cat()

@cats_bp.route('/<int:cat_id>', methods=['GET'])
def get_cat(cat_id):
    return get_cat_by_id(cat_id)

@cats_bp.route('/<int:cat_id>', methods=['PUT'])
def modify_cat(cat_id):
    return update_cat(cat_id)

@cats_bp.route('/<int:cat_id>', methods=['DELETE'])
def remove_cat(cat_id):
    return delete_cat(cat_id)