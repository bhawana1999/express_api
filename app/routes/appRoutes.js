'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appController.js');

  // todoList Routes

  app.route('/deviceid/:id')
    .get(todoList.list_taskid)

  app.route('/deviceid_24hrs/:id')
    .get(todoList.list_taskid_24hrs)

  app.route('/sensordetails')
    .get(todoList.list_sensordetails)
};

