$(document).ready(function () {
    
    function showModal() {
        $(".overlay").fadeIn(1000);
        // $(".modal").slideDown(1200);
        $(".modal").animate({
            //width: [ "toggle", "swing" ], // ширина элемента
            //height: [ "toggle", "swing" ], // высота элемента
            opacity: "toggle" // прозрачность элемента
          }, 1500, "linear");

    };
    function closeModal(){
        $(".overlay").fadeOut(1000);
        $(".modal").slideUp(1000);
    }

    $(".main_nav li:eq(1), .main_btna, .main_btn").on("click", function () {
        showModal()
    });

    $(".modal .close").on("click", function () {
        closeModal()
    });
});