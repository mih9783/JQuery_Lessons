
    // Touch события

    /*
    касание (или клик на компе)
    */

    // $(document).on("pageinit", "#pageone", function () {
    //     $(".para_touch").on("tap", function () {
    //         $(this).hide();
    //     });
    // });




$(document).on("pageinit", "#pageone", function () {

    // Касание jQuery Mobile
    $(".para_touch").on("tap", function () {
        $(this).hide();
    });

    // Касание и Удерживание jQuery Mobile
    $(".para_touch_1").on("taphold",function() {
        $(this).hide();
      });

      //  Перетаскивание jQuery Mobile
      $(".mypara").on("swipe",function() {
        //$("sp_1").text("Обнаружено перетаскивание!");
        alert("Вы перетаскиваете вниз!");
      });

      // Перетаскивание Влево jQuery Mobile
      $(".mypara_1").on("swipeleft",function(){
        //alert("Вы перетаскиваете влево!");
        $(".sp_2").text("Обнаружено перетаскивание влево!");
      });

      // Перетаскивание Вправо jQuery Mobile
      $(".mypara_2").on("swiperight",function(){
        //alert("Вы потащили вправо!");
        $(".sp_3").text("Обнаружено перетаскивание в право !");
      });
});