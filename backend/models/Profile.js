const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
{
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },


  // Freelancer fields
  title: {
    type: String,
    default: "",
  },

  skills: {
    type: [String],
    default: [],
  },

  experience: {
    type: String,
    default: "",
  },

  hourlyRate: {
    type: Number,
    default: 0,
  },


  // Common
  location: {
    type: String,
    default: "",
  },


  bio: {
    type: String,
    default: "",
  },


  // Client fields
  companyName: {
    type: String,
    default: "",
  },

  contactPerson: {
    type: String,
    default: "",
  },

  aboutCompany: {
    type: String,
    default: "",
  },


  // Links
  github: {
    type: String,
    default: "",
  },

  linkedin: {
    type: String,
    default: "",
  },

  portfolio: {
    type: String,
    default: "",
  },


  profileImage: {
    type: String,
    default: "",
  },


  // Resume
  resume: {
    type: String,
    default: "",
  },

},
{
 timestamps:true
});


module.exports = mongoose.model("Profile", profileSchema);