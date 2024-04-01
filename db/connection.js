const mongoose = require('mongoose')

// mongoose.connect("mongodb://127.0.0.1:27017/ShobheCarpenter").then(() => {
mongoose.connect("mongodb+srv://sachin03nic:sachin03nic@shobhecarpenter.rzlkvdk.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=ShobheCarpenter").then(() => {
    console.log('Connected To The Database Successfulyy!!');
}).catch((err) => {
    console.log(err);
})

