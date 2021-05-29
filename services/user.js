const UserModel = require('../models/user')

class UserService {

  static async findByEmail(email) {
    return UserModel.findOne({email})
  }
  
  static async findAll() {
    return UserModel.find()
  }

  static async create(dao) {
    return UserModel.create(dao)
  }

  static async removeOne(id) {
    return UserModel.findByIdAndRemove(id)
  }

}

module.exports = UserService