const path = require('path')
const { v4 } = require('uuid')
const PersonModel = require('../models/person')
const PersonService = require('../services/person')

class PersonController {

  static async getAllPersonsPage(req, res) {
    if (req.query.search && req.query.search.length > 1) {
      let persons = await PersonService.findByName(req.query.search) 
      return res.render('persons', {persons}) 
    }
    let persons = await PersonService.findAll()
    res.render('persons', {persons})
  }

  static async getPersonPage(req, res) {
    let person_id = req.params.person_id
    let person = await PersonService.findById(person_id)
    res.render('persons-view', {person})
  }

  static async getGotoUpdatePage(req, res) {
    res.render('goto-update')
  }

  static async updatePersonPage(req, res) {
    let person_id = req.query.person_id
    let person = await PersonService.findById(person_id)
    res.render('persons-update', {dao: person})
  }

  static async updatePerson(req, res) {
    let dao = req.body
    dao._id = req.params.person_id
    try {
      await PersonService.updateOne(dao)
      res.flash('success_msg', 'Update Successful')
      res.redirect('/persons')
    } catch (error) {
      console.log(error)
      res.flash('error_msg', 'Error Updating Data')
      res.redirect('/persons/update/' + dao._id)
    }
  }
 
  static async createPersonPage(req, res) {
    let dao = new PersonModel()
    res.render('persons-new', { dao, error_msg: req.flash('error_msg'), errors: [] })
  }

  static async createPerson(req, res) {
    let dao = req.body
    dao.search_name = dao.surname + ' ' + dao.first_name
    dao.reference_id = v4()
    dao.nin = new Date().getTime()
    console.log(dao)
    try {
      if (req.files) {
        let file = req.files.photo
        let extname = path.extname(file.name)
        let filename = 'person_' + new Date().getMilliseconds() + extname
        await file.mv(process.cwd() + '/uploads/images/' + filename)
        dao.photo = filename
        await PersonService.create(dao)
      } else {
        await PersonService.create(dao)
      }
      res.flash('success_msg', 'Person Data Successfully Created')
      res.redirect('/persons')
    } catch (err) {
      console.log(err)
      res.redirect('/persons')
    }
  }

  static async removePerson(req, res) {
    try {
      await PersonService.removeOne(req.params.person_id)
      res.redirect('/persons')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/persons')
    }
  }

}

module.exports = PersonController