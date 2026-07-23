

const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema(
  {
    freelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: [true, "Gig title is required"],
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Web Development",
        "Mobile Development",
        "UI/UX Design",
        "Graphic Design",
        "Content Writing",
        "Digital Marketing",
        "AI / Machine Learning",
        "Video Editing",
        "Other",
      ],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },

    deliveryTime: {
      type: Number,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    location: {
      type: String,
      default: "",
    },

    images: [
      {
        type: String,
      },
    ],

    status: {
      type: String,
      enum: ["active", "paused", "completed"],
      default: "active",
    },

    ordersCompleted: {
      type: Number,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },

    reviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Gig", gigSchema);