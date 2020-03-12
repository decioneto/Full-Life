$(".nav-link").click(function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
});

$(window).scroll(function() {
    let height = $(window).scrollTop();
    if(height < 100) {
        $(".nav-link").removeClass("active");
        $(".nav-link").first().addClass("active");
    }
});