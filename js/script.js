$(document).ready(function () {

    // ACTIVE-LINK-ON-CLICK
    $('header nav ul li a').click(function () {
        $('header nav ul li a').removeClass("active-link");
        $(this).addClass("active-link");
    });

    // FAQ
    $(".faq-items .d-flex").click(function () {
        // CONTENT
        $(this).parent(".faq-items").find(".faq-content").slideToggle();
        $(this).parent(".faq-items").prevAll(".faq-items").find(".faq-content").slideUp();
        $(this).parent(".faq-items").nextAll(".faq-items").find(".faq-content").slideUp();
        // ICON
        $(this).parent(".faq-items").find("a i").removeClass("fa-chevron-down");
        $(this).parent(".faq-items").find("a i").addClass("fa-chevron-up");
        $(this).parent(".faq-items").prevAll(".faq-items").find("a i").removeClass("fa-chevron-up");
        $(this).parent(".faq-items").nextAll(".faq-items").find("a i").addClass("fa-chevron-down");
        $(this).parent(".faq-items").nextAll(".faq-items").find("a i").removeClass("fa-chevron-up");
        $(this).parent(".faq-items").prevAll(".faq-items").find("a i").addClass("fa-chevron-down");
    });

    // COUNTER
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 2500,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
    });
});