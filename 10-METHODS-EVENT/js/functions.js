//  проверяю работу jquery

// $(function () {

//     alert('jQuery работает');

// });

//$(document).ready(function() {
//     alert('jQuery работает');
//});

//////// проверка работы ///////////////////

$(document).ready(function () {

    // event.currentTarget

    // устанавливаем делегированный обработчик события "click" и передаем объект события в качестве параметра функции
	  $( ".btn_currentTarget" ).on( "click", "button", function( event ) {
	    console.log( "button currentTarget", event.currentTarget); // выводим в консоль значение свойства currentTarget
	    console.log( "button delegateTarget", event.delegateTarget); // выводим в консоль значение свойства delegateTarget
	  });
	  // устанавливаем прямой обработчик события "click" и передаем объект события в качестве параметра функции
	  $( ".sp_currentTarget" ).click(function( event ) {
	    console.log( "span currentTarget", event.currentTarget); // выводим в консоль значение свойства currentTarget
	    console.log( "span delegateTarget", event.delegateTarget); // выводим в консоль значение свойства delegateTarget
      });
      
      $('div').on('click', function(e) {  
        //console.log(e.target.className);    javascript
        console.log($(this).attr('class')); //jquery
    });


    

});


