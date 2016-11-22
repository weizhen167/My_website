/*
 v2 2016-11-16 
*/
$(function() {
    function a() {
        c.each(function() {
            $this = $(this);
            var a = $('#dot-nav a[href="#' + $this.attr("id") + '"]').data("number") - 1;
            $this.offset().top - $(window).height() / 2 < $(window).scrollTop() && $this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop() ? d.eq(a).addClass("is-selected") : d.eq(a).removeClass("is-selected")
        })
    }
    function b(a) {
        $("body,html").animate({
            scrollTop: a.offset().top + 50
        },
        600)
    }
    var c = $(".section"),
    d = $("#dot-nav a"),
    e = $("#overlay a");
    a(),
    $(window).on("scroll",
    function() {
        a()
    }),
    d.on("click",
    function(a) {
        a.preventDefault(),
        b($(this.hash))
    }),
    e.on("click",
    function(a) {
        a.preventDefault(),
        b($(this.hash)),
        $("#toggle").click()
    }),
    $(".scroll-down").on("click",
    function(a) {
        a.preventDefault(),
        b($(this.hash))
    }),
    $(".touch #dot-nav a").on("click",
    function() {
        $(".touch #dot-nav").removeClass("open")
    }),
    $(document).scroll(function() {
        var a = $(window).width(),
        b = $(this).scrollTop(),
        c = $("#dot-nav");
        a > 768 && b > 500 ? c.fadeIn() : c.fadeOut()
    }),
    $("#toggle").click(function(a) {
        $(this).toggleClass("active"),
        $("#overlay").toggleClass("open"),
        $("body").toggleClass("noScroll")
    }),
    $(window).on("resize",
    function(a) {
        var b = $(window).width(),
        c = $("#overlay").hasClass("open");
        b > 768 ? ($("#dot-nav").show(), c && ($("#toggle").removeClass("active"), $("#overlay").removeClass("open"))) : 768 > b && $("#dot-nav").hide()
    }),
    $contactInput = $(".contact-input"),
    $contactInput.focus(function() {
        $(this).parent().addClass("is-active is-completed")
    }),
    $contactInput.focusout(function() {
        "" === $(this).val() && $(this).parent().removeClass("is-completed"),
        $(this).parent().removeClass("is-active")
    }),
    $(document).one("focus.textarea", ".autoExpand",
    function() {
        var a = this.value;
        this.value = "",
        this.baseScrollHeight = this.scrollHeight,
        this.value = a
    }).on("input.textarea", ".autoExpand",
    function() {
        var a, b = 0 | this.getAttribute("data-min-rows");
        this.rows = b,
        a = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17),
        this.rows = b + a
    });
    var f = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return f.Android() || f.BlackBerry() || f.iOS() || f.Opera() || f.Windows()
        }
    };
    f.any() || skrollr.init({
        render: function(a) {},
        smoothScrolling: !1,
        forceHeight: !1
    })
});