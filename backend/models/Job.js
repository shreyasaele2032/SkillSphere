

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Job description is required"],
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Web Development",
        "Mobile Development",
        "UI/UX Design",
        "Graphic Design",
        "App Development",
        "Content Writing",
        "Digital Marketing",
        "AI / Machine Learning",
        "Video Editing",
        "Generative AI",
        "Other",
      ],
    },

    budget: {
      type: Number,
      required: [true, "Budget is required"],
      min: 0,
    },

    experienceLevel: {
      type: String,
      enum: ["Beginner", "Intermediate", "Expert"],
      default: "Intermediate",
    },

    duration: {
      type: String,
      default: "",
    },

    skillsRequired: [
      {
        type: String,
      },
    ],

    location: {
      type: String,
      default: "Remote",
    },

    status: {
      type: String,
      enum: ["open", "in-progress", "completed", "closed"],
      default: "open",
    },

    applicants: [
  {
    freelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
    },

    email: {
      type: String,
    },

    phone: {
      type: String,
    },

    portfolio: {
      type: String,
    },

    coverLetter: {
      type: String,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "accepted",
        "rejected",
      ],
      default: "pending",
    },
  },
],

    selectedFreelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    deadline: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);