'use strict';

var Task = require('../model/appModel.js');

exports.list_taskid = function(req, res) {
  var id= req.params.id;
  Task.get_taskid(id,function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};


exports.list_taskid_24hrs = function(req, res) {
  var id=req.params.id;
  Task.get_taskid_24hrs(id,function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};


exports.list_sensordetails= function(req, res) {
  Task.get_sensordetails(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

