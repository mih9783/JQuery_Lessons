//  проверяю работу jquery

// $(function () {

//     alert('jQuery работает');

// });

//$(document).ready(function() {
//     alert('jQuery работает');
//});

//////// проверка работы ///////////////////

$(document).ready(function () {

    // $.proxy()

    // инициализируем переменную
    var myObject = {
        name: "proxy",
        age: 30,
        insertName: function (args) {
            $(".pr_proxy").append(args + " Мое имя: " + this.name + "<br>");
        },
        insertAge: function (args) {
            $(".pr_proxy").append(args + " Мой возраст: " + this.age + "<br>");
        },
    }

    // задаем функцию при нажатии на первый элемент <button> в документе
    $(".btn_name").on("click", $.proxy(myObject, "insertName", "Привет!"));

    // задаем функцию при нажатии на последний элемент <button> в документе
    $(".btn_age").on("click", $.proxy(myObject.insertAge, myObject, "Alloha!"));


    // $.off()

    $(".addEvent").click(function () { // задаем функцию при нажатиии на элемент с классом addEvent
        $(".increaseWidth").on("click dblclick", function () { // присоединяем элементу обработчик события "click" и "dblclick"
            $(".div_off").width(function (index, currentValue) {
                return currentValue + 50; // увеличиваем значение ширины элемента на 50 пикселей
            })
        });
    });
    $(".removeEvent").click(function () { // задаем функцию при нажатиии на элемент с классом removeEvent
        $(".increaseWidth").off("click"); // удаляем обработчик события "click", присоединенный методом .on()
    });

    // $.on()

    $(".btn_on").on("click", function () {
        $(".ul_on").append("<li>Добавочный элемент списка</li>");
    });

    $(".ul_on li").on("click", function () {
        $(this).text("Один клик").css("color", "red");
    });

    $(".ul_on").on("dblclick", "li", function () {
        $(this).text("Двойной клик").css("color", "green");
    });

    // $.one()

    $(".div_one").one({
        "click": function () {
            $(this).css("width", "+=50")
        },
        "dblclick": function () {
            $(this).css("height", "+=50")
        }
    })

    // $.trigger()

    $(".btn_triggerHandler").click(function () {
        $(".inp_trigger").triggerHandler("focus");
    });
    $(".btn_trigger").click(function () {
        $(".inp_trigger").trigger("focus");
    });
    $(".inp_trigger").focus(function () {
        $("span").html("Focus").fadeIn(500).fadeOut(500);
    });

    // $.triggerHandler()

    $(".btn_triggerHandler_1").click(function () {
        $(".inp_trigger_1").triggerHandler("focus");
    });
    $(".btn_trigger_1").click(function () {
        $(".inp_trigger_1").trigger("focus");
    });
    $(".inp_trigger_1").focus(function () {
        $("span").html("Focus").fadeIn(500).fadeOut(500);
    });




});


