var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

var users = [
	{
		id: 1,
		first_name : 'Ken',
		last_name : 'yang',
		email : 'yes@gmail.com',
	},
	{
		id: 2,
		first_name : 'asklfjas',
		last_name : 'mznxcz',
		email : 'lkasjlsa@gmail.com',
	
	},{
		id: 3,
		first_name : 'testing',
		last_name : 'testing',
		email : 'testing',
	}
]

app.get('/', function(req, res){
	for (var i = 0 ; i < users.length; i++){
		console.log('Testing for added names: ' + users[i].first_name);
	}
	res.render('index', {
		title: 'Homepage',
		users: users	
	});
});	

app.post('/',function(req,res){ 
   
   //console.log('app.post DONE');
  var i = parseInt(users.length)+1;
  console.log(i);
  //console.log("Users Length = " + i);
   var userName = {
   		id : i,
   		first_name : req.body.first_name,
   		last_name : req.body.last_name,
   		email : req.body.email
   }
   

	// Checking if user exist, Login session
	users.push(onlineValidate(userName));
	

    
	
   //console.log(userName);
   // users.push(userName);
   // console.log(users);
    res.redirect('/');

   
});



app.listen(3000, function(){
	console.log('Server Started on port 3000....');
})
// Checking if user exist, Login session
function onlineValidate(userName) {
	console.log("onlineValidate being Called");
	console.log("Users index  first_name:" +users[2].first_name);
	console.log("UserName first_name :" +userName.first_name);

     for (var i = 0; i < users.length; i++){
     	if (userName.first_name == users[i].first_name && userName.last_name == users[i].last_name && userName.email
     	 == users[i].email){
     		return users[i];
     	}
     }
}