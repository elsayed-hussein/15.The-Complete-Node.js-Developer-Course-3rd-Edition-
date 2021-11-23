const mongoose = require("mongoose");

// ################ mongoose connect ################
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
});

// ################ mongoose Model ################
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});
const Tasks = mongoose.model("Tasks", {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

// ################ add new Task ################
const task = new Tasks({
  name: "learn",
  description: "learning javascript",
  completed: false,
});
// ################ add new User ################
const me = new User({
  name: "elsayed",
  age: 32,
});

// ################ save to db ################

// task
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// me.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
