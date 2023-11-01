const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema(
    {
        title:{
          type:String,
          required: true, 
        },
        firstName: {
          type:String,
          required: [true, "Please add the contact firstName"], 
        },
        middleName:{
          type:String,
        },
        lastName: {
          type:String,
          required: [true, "Please add the contact lastname"], 
        },
        dayOfBirth: Number,
        monthOfBirth: Number,
        yearOfBirth: Number,
        gender: String,
        phoneNumber: {
          type:String,
          required: [true, "Please add the phone Number"], 
          unique:true,
        }, 
        address: String,
        address2: String,
        city: String,
        state: String,
        zip: String,
        email:Array,
        selectedValue:String,
        product:String,
        department:String,
        selectedDate:Object,

    }
  );
  
  module.exports  = mongoose.model('FormData', formDataSchema);