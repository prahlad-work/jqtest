

// $( "#log" ).html( "clicked: " + event.target.nodeName );

$( "body" ).click(function( event ) {

  // var gg =  event.target.text();
  //alert("text"+txt);
 var txt =  $(event.target).text();
 alert(txt);
 alert(event.target.id+" and "+$(event.target).attr('class'));
  var jj = $(event.target).siblings().css({"color": "red", "border": "2px solid red"});
 //alert(jj);
//  var gg =  $(e.target).text();

  $( "#log" ).html( "clicked: " + event.target.nodeName );

//  var bb = event.target.nodeName;
//  alert(bb);

});

//alert(event.target.nodeName);



  /*  $("p").bind("click", function(){
       alert("The paragraph was clicked.");
    });

   $("p").click(function( event ) {
       alert( event.currentTarget === this ); // true
    });

*/

/*()
 var count = 0;
 var arr = [9,10,6,8,9];
 var val = "";

*/

 /*

 for(i=0;i < arr.length; i++) {
    count = count+1;
    val += arr[i]+" => ";}

console.log(count);
alert("total item ="+count+ " and element are: " +val);

*/

/*
$("input").blur(function( event ) {
    alert("it has loos the focus ..."); // true
 });


 $.each( arr, function( index, value ){
     sum += value;
 });

 console.log( sum );
*/

/*
var sum = 0;
var obj = {foo: 1,bar: 2 };
*/

/* important note */

// $.each() is a generic iterator function for looping over object, arrays, and array-like objects.
// For jQuery collections, use .each().

/*
$( "li" ).each( function( index, element ){
    console.log( $( this ).text() );
});
*/
