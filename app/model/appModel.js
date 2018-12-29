'user strict';
var sql = require('./db.js');
var dateTime = require('node-datetime');
//Task object constructor
var Task = function(task){

};



Task.get_taskid  = function get_taskid(id,result) {
        sql.query("Select * from ebam where deviceid=? order by datetime DESC LIMIT 1", [id],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);

                 result(null, res);
                }
                                                             
 });
};
Task.get_sensordetails = function get_sensordetails(result) {
        sql.query("Select * from sensordetails ", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);

                 result(null, res);
                }
            });
};


                                                                                                                       
module.exports= Task;

