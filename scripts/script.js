$(".pattern").click(function () {
    $(this).removeClass("close");
    $(this).addClass("fill");
    console.log($(window).width());
    if ($(window).width() < 650 || $(window).height() < 850) {
        $(window).scrollTop(0);

        $(".body").css({
            position: "fixed",
            top: `-${window.scrollY}px`
            // height: "100vh",
            // width: "100vw"
        });
    }
});

$(".icon").click(function (e) {
    e.stopPropagation();
    $parent = $(this).parent();
    $parent.removeClass("fill");
    $parent.addClass("close");
    if ($(window).width() <= 768 || $(window).height() < 850)
        $(".body").css({ position: "relative", top: "" });
});
