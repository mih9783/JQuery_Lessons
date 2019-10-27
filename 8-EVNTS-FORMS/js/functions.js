$(document).ready(function () {

    // События Формы

    // blur()

    $( "button" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
	    $( "div" ).blur(); // вызываем событие blur на элементе <div>
	  });
	  $( "input" ).focus(function(){ // задаем функцию при получении фокуса элементом <input>
	    $( "div" ).attr( "placeholder", "focus" ); // добавляем элементу <input> атрибут placeholder со значением focus
	  });
	  $( "input" ).blur(function(){ // задаем функцию при потери фокуса элементом <input>
	    $( "div" ).attr( "placeholder", "blur" ); // добавляем элементу <input> атрибут placeholder со значением blur
	  });

    
});
