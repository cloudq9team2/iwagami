function printHash( h){
	var debug = '';
	for ( var key in h) debug += '[' + key + ']' + h[ key] + "\n";
	console.log( debug);
	}


//object
function make(){
	var obj={};
	obj.getname = function (a){ this.name = a };
	obj.returnname = function (){ return this.name; };
	return obj;
	}
	
	
	var person = make();
	person.getname("tanaka");
	console.log("person:" + person.returnname()); <!-- メソッドの後に()をつけることを忘れない-->
	
	var hash = { one: 'value1', two: 25 , three: "3"};
	var array = [ 'value1',  ];
	
	printHash( hash);
	printHash( array);
	
	