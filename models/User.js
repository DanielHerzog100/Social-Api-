const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
        "Enter a Valid Email Address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },

    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

userSchema.virtual("thoughts", {
  localfield:"username"
  foreignfield:"username"
})

const User = model("User", userSchema);

module.exports = User;
