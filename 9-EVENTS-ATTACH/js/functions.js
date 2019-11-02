//  проверяю работу jquery

// $(function () {

//     alert('jQuery работает');

// });

//$(document).ready(function() {
//     alert('jQuery работает');
//});

//////// проверка работы ///////////////////

$(document).ready(function() {

    // $.proxy()

    // инициализируем переменную
	  var myObject = {
	    name: "proxy",
	    age: 30,
	    insertName: function( args ){
	      $( "p" ).append( args + " Мое имя: " + this.name + "<br>");
	    },
	    insertAge: function( args ){
	      $( "p" ).append( args + " Мой возраст: " + this.age + "<br>");
	    },
	  }
	  
	  // задаем функцию при нажатии на первый элемент <button> в документе
	  $( "button:first" ).on( "click", $.proxy( myObject, "insertName", "Привет!" )); 
	  
	  // задаем функцию при нажатии на последний элемент <button> в документе
      $( "button:last" ).on( "click", $.proxy( myObject.insertAge, myObject, "Alloha!" )); 
      
    
});


