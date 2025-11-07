user_data = [
  {
     'user_id': 1,
     'name': 'Alisa',
     'username': 'alisha sharma',
     'email': 'alisha@metropolia.fi',
     'role': 'user',
     'password': 'alisha123',
  },
  {
     'user_id': 2,
     'name': 'ishwor',
     'username': 'ishworsubedi',
     'email': 'ishworsubedi@metropolia.fi',
     'role': 'user',
     'password': 'asdfghjkl',
  }
]

def list_all_user():
    return user_data

def find_user_by_id(user_id):
    for user in user_data:
        if user['user_id']== int(user_id):
            return user
    return None


def add_user(user):
    name = user.get('name')
    username = user.get('username')
    email = user.get('email')
    role = user.get('role')
    password = user.get('password')

    new_user_id = user_data[0]['user_id'] + 1
    new_user = {
        'user_id': new_user_id,
        'name': name,
        'username': username,
        'email': email,
        'role': role,
        'password': password
    }
    user_data.insert(0, new_user)
    return {'user_id': new_user_id}
