const PersonModel = require('../models/person')

class PersonService {

  static async findByName(name) {
    let pattern = new RegExp(name, 'ig')
    return PersonModel.find({$or: [{surname: pattern}, {first_name: pattern}, {search_name: pattern}]})
  }

  static async findById(id) {
    return PersonModel.findById(id)
  }
  
  static async findAll() {
    return PersonModel.find()
  }

  static async create(dao) {
    return PersonModel.create(dao)
  }

  static async updateOne(update) {
    return PersonModel.findByIdAndUpdate(update._id, {$set: update})
  }

  static async removeOne(id) {
    return PersonModel.findByIdAndRemove(id)
  }

}

module.exports = PersonService