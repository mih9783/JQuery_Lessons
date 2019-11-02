$(document).ready(function () {

    //// События Формы //////

    // blur()
    ////////////////////

    $("#imp_1").blur(function () {
        alert("Это поле ввода потеряло фокус.");

    });

    // change()
    ///////////////////////

    /*
    Пример использования события change для слежения за состоянием элемента checkbox. Доступность кнопки будет определять в зависимости от того в каком состоянии (checked или нет) находиться флажок:
    */

    $('#agree').on('change', function () {

        if (this.checked) {
            $('#send').prop('disabled', false);
        }

        else {
            $('#send').prop('disabled', true);
        }

        $('#result_1').text("Вы поставили галочку в чекбоксе. Теперь можете отправить информацию");
    });

    /*
    Пример, в котором рассмотрим, как получить значение элемента select при его изменении:
    */

    $('#list').on('change', function () {
        var value = $(this).val();
        $('#result_2').text(value);
    });

    /*
    Пример, в котором рассмотрим, как получить все  выбранные элементы select при его изменении:
    */

    $('select[name="colors"]')
        .change(function () {
            var colors = [];
            $('select[name="colors"] option:selected').each(function () {
                colors.push($(this).text());
            });
            console.log('Выбранные цвета: ' + colors.join());
            $('#result_3').text("Выбранные цвета: " + colors.join());
        })
        .change();

    // Пример программного вызова события change для элемента select:

    // list - id элемента change
    $('#list').trigger('change');
    // краткая запись
    $('#list').change();
    // вызов только обработчика события change
    $('#list').triggerHandler('change');

    /*
        Пример использования события изменения change для получения значения элемента input:
    */

    // событие изменения значения input (возникает только после потери фокуса)

    $('input[name="name"]').on('change',
        function () {
            var value = $(this).val();
            console.log(value);
            $('#result_4').text("Вы потеряли фокус");
        });

    // input:
    /*
        Пример, использования события ввода для получения значения элемента input:
    */

    $('input[name="name_1"]').on('input', function () {
        var value = $(this).val();
        $('#result_5').text(value);
        console.log(value);
    });

    // focus()

    $("#btn_focus").click(function () { // задаем функцию при нажатиии на элемент <button>
        $("#exmpl_2").focus(); // вызываем событие focus на элементе <div>
    });
    $(".input_focus").focus(function () { // задаем функцию при получении фокуса элементом <input>
        $("#exmpl_2").attr("placeholder", "focus"); // добавляем элементу <input> атрибут placeholder со значением focus
    });
    $("#input_focus").blur(function () { // задаем функцию при потери фокуса элементом <input>
        $("#exmpl_2").attr("placeholder", "blur"); // добавляем элементу <input> атрибут placeholder со значением blur
    });

    $("input").focus(function () {
        $(this).next("span").css("display", "inline").fadeOut(1000);
    });

    // установка обработчика события
    $('#inpFocus').focus(function () {
        console.log('Элемент получил фокус.');
    });


    // вызов события
    $('#inpFocus').focus();



    // focusin
    /*
    при получении элементом div события фокуса установим ему фон оранжевого цвета:
    */

    $('#demo').
        focusin(function () {
            $(this).css('background-color', 'orange');
        })
        .focusout(function () {
            $(this).css('background-color', 'inherit');
        });

    // focusout()

    $("#btnFocusoutl").click(function () { // задаем функцию при нажатиии на элемент <button>
        $("#divFocusoutl").focusout(); // вызываем событие focusout на элементе <div>
    });
    $("#divFocusoutl").focusin(function () { // задаем функцию при получении фокуса элементом  <div>, или любым вложенным элементом
        $(this).css("background", "red"); // устанавливаем элементу <div> цвет заднего фона красный
    });
    $("#divFocusoutl").focusout(function () { // задаем функцию при потере фокуса элементом  <div>, или любым вложенным элементо
        $(this).css("background", "green"); // устанавливаем элементу <div> цвет заднего фона зеленый
    });

    // select()

    $(".btn_select").click(function () { // задаем функцию при нажатиии на элемент <button>
        $(".inp_select").select(); // вызываем событие select на элементе <input>
    });
    var num = 0; // создаем переменную (счетчик) 
    $(".inp_select, .ta_select").select(function () { // задаем функцию при срабатывании события select на элементе  <input>, или <textarea> 
        num++; // инкремент 	   
        $(".result_select").text("Текст выделен: " + num + " раз"); // добавляем в элемент <p> информацию о количестве срабатываний события select
    });

    // .submit()

    $(".btn_submit").click(function () { // задаем функцию при нажатиии на элемент <button>
        $("form").submit(); // вызываем событие submit на элементе <form>
    });
    $("form").submit(function (event) { // задаем функцию при срабатывании события "submit" на элементе <form>
        event.preventDefault(); // действие события по умолчанию не будет срабатывать
        $("span").text("Form submitted") // добавляем текстовое содержимое в элемент <span>
            .css({
                "display": "inline", // элемент <span> отображается как строчный
                "color": "forestgreen" // цвет текста светло-зеленый
            })
            .fadeOut(1000); //  плавно изменяем прозрачность элемента <span> за 1 секунду 
    });

    // Программный вызов отправки формы:

    $('#feedback').submit();
    $('#feedback').trigger('submit');


});
