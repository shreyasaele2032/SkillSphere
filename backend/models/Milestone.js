

const mongoose = require("mongoose");

const milestoneSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    freelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: [true, "Milestone title is required"],
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    amount: {
      type: Number,
      required: [true, "Milestone amount is required"],
      min: 0,
    },

    dueDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "In Progress",
        "Submitted",
        "Approved",
        "Rejected",
        "Completed",
      ],
      default: "Pending",
    },

    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Milestone", milestoneSchema);