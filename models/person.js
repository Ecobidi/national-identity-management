const mongoose = require('mongoose')

let PersonSchema = new mongoose.Schema({
  nin: {
    type: Number,
    required: true,
  },
  reference_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  middle_name: {
    type: String,
    required: true,
  },
  other_names: {
    type: String,
  },
  search_name: String,
  maiden_name: {
    type: String,
  },
  residency_address: String,
  residency_town: String,
  residency_lga: String,
  residency_state: String,
  birth_date: String,
  birth_town: String,
  birth_lga: String,
  birth_state: String,
  origin_town: String,
  origin_lga: String,
  origin_state: String,
  father_origin_town: String,
  father_origin_lga: String,
  father_origin_state: String,
  mother_origin_town: String,
  mother_origin_lga: String,
  mother_origin_state: String,
  physical_challenges: {
    type: String,
    default: 'none',
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  hair_colour: String,
  photo:{
    type: String,
  },
  height: {
    type: Number,
  },
  physically_challenged: {
    type: String,
  },
  tribal_mark: {
    type: String,
  },
  occupation: String,
  native_language: String,
  other_language: String,
  education_level: String,
  employment_status: String,
  religion: String,
  next_of_kin_surname: String,
  next_of_kin_first_name: String,
  next_of_kin_middle_name: String,
  next_of_kin_relationship: String,
  next_of_kin_address: String,
  next_of_kin_town: String,
  next_of_kin_lga: String,
  next_of_kin_state: String,
  father_surname: String,
  father_first_name: String,
  father_middle_name: String, 
  mother_surname: String,
  mother_first_name: String,
  mother_middle_name: String,
  mother_maiden: String,
  email: String,
  issue_date: {
    type: String,
    default: Date.now
  }
})

module.exports = mongoose.model('person', PersonSchema)