$(".pattern").click(function (e) {
    $(this).removeClass("close");
    $(this).addClass("fill");
    if($(this).find('.icon').length == 0){
        $(this).append('<i class="icon fas fa-times"></i>');
        $(document).on('click', '.icon', () => {iconClick(e)});
        $(this).append('<button class="copy"><i class="copy-icon fas fa-copy"></i></button>');
        $(document).on('click', '.copy', () => { 
            var copyText = 'background:' + $(this).css('background') + ';'
            copyToClipboard(copyText);
         });
    }
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

function iconClick (e) {
    e.stopPropagation();
    self = $('.icon');
    $parent = self.parent();
    $parent.removeClass("fill");
    $parent.addClass("close");
    self.remove();    
    $('.copy').remove();
    if ($(window).width() <= 768 || $(window).height() < 850)
        $(".body").css({ position: "relative", top: "" });
    
}


function copyToClipboard(text) {
    var copyElement = document.createElement("textarea");
    $('body').append(copyElement);
    copyElement.value = text;
    copyElement.select();
    document.execCommand("copy");
    $('body').remove(copyElement);
    $('body').append("<div class='copied-info'>Styles Copied</div>");
    setTimeout(() => {
       $('.copied-info').remove(); 
    }, 2000);
}