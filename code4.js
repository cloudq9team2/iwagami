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


//domを使わない
function handle( e) {
	console.log( e);
	}
	
	var div1 = document.getElementsByTagName( 'div')[0];
	var div2 = document.getElementsByTagName( 'div')[1];
	div1.addEventListener( 'click', handle, false);
	div2.addEventListener( 'click', handle, false);
	
$('div').each( function() {
		console.log( "he");
	})
	
	var person = make();
	person.getname("tanaka");
	console.log("person:" + person.returnname()); <!-- メソッドの後に()をつけることを忘れない-->
	
	var hash = { one: 'value1', two: 25 , three: "3"};
	var array = [ 'value1',  ];
	
	printHash( hash);
	printHash( array);
	
$('div1').children().css({ margin: '50px'});
$('div1').children().first().css({float:'left'});

$(document).ready( function () {
	$('div').mouseover( function () {
		console.log("OVER!!");
		$('div').click( function () {
			console.log("click!!");
		});
		$('div').mouseout( function () {
			console.log("OUT!!");
		});
	});
});

$('div1').click( function () {
	$('div1').fadeOut( 'slow', function () { $('div').append( '<div>waiting...</div>' ); })
	});
