

function User(){
	this.id = 1;
	this.name = "jack";
}


var thing1 = [
	{
	id: 1,
	name:"stuff",
	price:"6.99"
	}	
	
]

var fs = require('fs');
var numbers = [];
fs.readFile('Testing.txt', 'utf8', function(err, data) {  
    if (err) throw err;

    console.log(data);
    numbers.push(data);

});



console.log(numbers.length);

console.log (thing1[0].id);
/*var person = new User();

var s = thing1.id;
console.log (s);
console.log (person.id + " " + person.name);*/