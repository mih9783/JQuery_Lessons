//  проверяю работу jquery

// $(function () {

//     alert('jQuery работает');

// });

//$(document).ready(function() {
//     alert('jQuery работает');
//});

//////// проверка работы ///////////////////


$(function () {

    // ФИЛЬТРЫ

    // 1. Выбор четных элементов
    $("#example tr:even").css("background-color", "#ff65ff");

    // 2. Выбор нечетных элементов
    $("#example tr:odd").css("background-color", "blue");

    // 3. Фильтр отрицания
    // И мы хотим выбрать все div, кроме div с классом равным example
    $('span:not(.example)').css("background-color", "#ff65ff");

    // 4. Фильтр элементов, которые содержат другие элементы
    /*

    Например нам необходимо выбрать div, в которых содержаться p.

    */
    $('div:has(p)').css("color", "#fff");


    // 5. Фильтр по содержанию определенного текста
    $('p:contains(jquery)').css("color", "#000");

    // 6. Фильтр первого элемента (выбран первый div)
    $('div:first').css("border", "2px solid blue");

    // 7. Фильтр последнего элемента (выбран последний div)
    $('div:last').css("color", "red");

    // 8. Фильтр первого элемента в родительском элементе
    // $('div:first-child')
    $('.filter-elem:first').css("color", "green");

    // 9 Фильтр последнего элемента в родительском элементе
    $('.filter-elem:last').css("color", "red").css("font-size", "1.1rem");

    // 10. Выбор скрытых элементов
    //$('div:hidden');
    $("button").click(function () { // запускаем функцию при клике
        $("div:hidden").show(2500); // выбираем все скрытые div и методом show() отображаем их за 2500 миллисекунд
    });

    // 11. Выборка видимых элементов $('div:visible');
    $("button").click(function () { // запускаем функцию при клике
        $("div:visible").css({ // выбираем все div, которые занимают место в документе и стилизуем их 
            "visibility": "visible", // устанавливаем у всех элементов видимость по умолчанию
            "opacity": "1" // устанавливаем прозрачность у всех элементов равной 1
        });
    });

    // 12. Выбор элемента на котором находиться фокус $("input:focus");
    setInterval(function () {
        $('input').removeClass('focused');
        $('input:focus').addClass('focused');
    }, 1000);

    // 13. Выбор элемента по номеру в выборке
    $('li').eq(1).html("Secondo").css("color", "red");

    // 14. Выбор элементов с номера больше заданного
    $(".class:gt(4)").css("background-color", "green");

    // 15. Выбор элементов с номером меньше заданного
    $(".list:lt(3)").css("color", "red");

    // 16. Выбор элементов, которые являются заголовками (h1, h2 …)
    $(".title:header").css("color", "yellow");

    // 17. Выбор элементов, которые участвуют в анимации
    $(".class:animated");

    // 18. Выбор пустых элементов
    $("div:empty");
    console.log($("div:empty"));

    // 19. Выбор не пустого элемента
    console.log($(".item:parent"));

    // 20. Фильтр активных элементов формы
    //$(".class :enabled");
    //$("input:enabled");
    $("input:enabled").css("background-color", "yellow");
    console.log($("input:enabled"));

    // 21. Фильтр неактивных элементов
    $("input:disabled").css("background-color", "red");

    // 22. Фильтр button
    /*

    ля увеличения производительности запроса в современных браузерах, используйте следующую конструкцию: $("селектор").filter(":button");

    */

    $("form :button");
    //или с помощью метода filter
    $("form *").filter(":button");
    $("form *").filter(":button").css("background-color", "green");
    console.log($("form *").filter(":button"));

    // 23. Фильтр reset
    /*
 
     Если необходимо выбрать элемент, который сбрасывает введенные данные в форму используется фильтр reset
 
    */
    $("input:reset");
    $("input:reset").css("border", "2px red solid");

    // 24. Фильтр submit
    // Для выделения кнопок, отправляющих данные формы на сервер используется фильтр submit.
    $('.class :submit');
    // Данный код выделит все кнопки отправляющие данные формы с классом class на сервер.

    // 25. Фильтр radio
    $("input:radio");

    // 26. Фильтр checkbbox
    $("input:checkbox");
    //или с помощью селектора атрибута
    $('input[type="checkbox"]');

    // 27. Фильтр text
    $("input:text");
    $("[type=text]");

    // 28. Фильтр password
    $("*:password");
    // или для современных браузеров
    $('[type="password"]');

    // 29. Фильтр file
    $("input:file");
    // для современных браузеров
    $('input[type="file"]');

    // 30. Фильтр input
    // :input - выбирает все элементы input, textarea, select и button в документе. Т.е. он выбирает все элементы управления формы.
    // $("селектор").filter(":input");
    $("*:input");
    //
    $("form *").filter(":input");


    // 31. Фильтр selected
    $("селектор").filter(":selected");
    $(":selected");
    //
    $("*").filter(":selected");


    // 32. Фильтр checked
    // Фильтр checked служит для выделения всех выбранных элементов из элемета типа checkbox.


    // 33. Фильтр image
    $("input:image");
    // для современных браузеров
    $('input[type="image"]');

    // 34. Фильтр расположения элемента определенным образом в родительском элементе
    $('div:nth-child(3)');
    // Вернет все div, которые являются третьими по счету в родительских элементах

    $('div:nth-child(odd)');
    // Вернет все div, которые находятся на нечетных позициях в родительском элементе
});

