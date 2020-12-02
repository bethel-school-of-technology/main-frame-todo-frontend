const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');


const { User } = require('./db/models/user.model');
const { Task } = require('./db/models/task.model');

app.use(bodyParser.json());

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((e) => {
        res.send(e);
    });
})

app.post('/users', (req, res) => {
    let title = req.body.title;

    let newUser = new User({
        title
    });
    newUser.save().then((userDoc) => {
        res.send(userDoc);
    })
});

app.patch('/users/:id', (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200)
    })

});

app.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete({
        _id: req.params.id
    }).then((removedUserDoc) => {
        res.send(removedUserDoc);
    })
})

app.get('/users/:userId/tasks', (req, res) => {
    Task.find({
        _userId: req.params.userId
    }).then((tasks) => {
        res.send(tasks);
    })
});


app.post('/users/:userId/tasks', (req, res)=>{
    let newTask = new Task({
        title: req.body.title
    });
    newTask.save().then((newTaskDoc)=>{
        res.send(newTaskDoc);
    })
})

app.patch('/users/:userId/tasks/:taskId', (req, res)=>{
    Task.findOneAndUpdate({
        _id: req.params.taskId,
        _userId:req.params.userId
    },{
        $set: req.body
    }).then(()=>{
        res.sendStatus(200);
    })
});

app.delete('/users/:userId/tasks/:taskId', (req, res)=>{
    Task.findOneAndDelete({
        _id: req.params.taskId,
        _userId: req.params.userId
    }).then((removedTaskDoc)=>{
        res.send(removedTaskDoc);
    })
});

app.listen(3000, () => {

})
