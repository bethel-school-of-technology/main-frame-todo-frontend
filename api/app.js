const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');


const { User } = require('./db/models/user.model');
const { Task } = require('./db/models/task.model');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get('/', function(req, res, next) {
    // Handle the get for this route
  });
  
  app.post('/', function(req, res, next) {
   // Handle the post for this route
  });

app.get('/user', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((e) => {
        res.send(e);
    });
})

app.post('/user', (req, res) => {
    let title = req.body.title;

    let newUser = new User({
        title
    });
    newUser.save().then((userDoc) => {
        res.send(userDoc);
    })
});

app.patch('/user/:id', (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200)
    })

});

app.delete('/user/:id', (req, res) => {
    User.findByIdAndDelete({
        _id: req.params.id
    }).then((removedUserDoc) => {
        res.send(removedUserDoc);
    })
})

app.get('/user/:userId/task', (req, res) => {
    Task.find({
        _userId: req.params.userId
    }).then((tasks) => {
        res.send(tasks);
    })
});


app.post('/user/:userId/task', (req, res)=>{
    let newTask = new Task({
        title: req.body.title
    });
    newTask.save().then((newTaskDoc)=>{
        res.send(newTaskDoc);
    })
})

app.patch('/user/:userId/task/:taskId', (req, res)=>{
    Task.findOneAndUpdate({
        _id: req.params.taskId,
        _userId:req.params.userId
    },{
        $set: req.body
    }).then(()=>{
        res.sendStatus(200);
    })
});

app.delete('/user/:userId/task/:taskId', (req, res)=>{
    Task.findOneAndDelete({
        _id: req.params.taskId,
        _userId: req.params.userId
    }).then((removedTaskDoc)=>{
        res.send(removedTaskDoc);
    })
});

app.listen(3000, () => {

})
