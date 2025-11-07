from flask import Blueprint
from ..controllers.user_controller import get_user,get_user_by_id,update_user,delete_user,create_user

user_bp=Blueprint("users",__name__,url_prefix="api/v1/users")

@user_bp.route('/',methods=["GET"])
def get_all_user():
    return get_user()

@user_bp.route('/',methods=["POST"])
def add_user():
    return create_user()

@user_bp.route('/<int:user_id>', methods=['GET'])
def get_user(user_id):
    return get_user_by_id(user_id)

@user_bp.route('/<int:user_id>', methods=['PUT'])
def modify_user(user_id):
    return update_user(user_id)

@user_bp.route('/<int:user_id>', methods=['DELETE'])
def remove_cat(user_id):
    return delete_user(user_id)



