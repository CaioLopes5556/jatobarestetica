! function ($, a, e) {
    $(a).ready(function () {
        $(".hero-slider").flexslider({
            controlNav: !0,
            directionNav: !1,
            animation: "fade"
        }), $(".menu-toggle").click(function () {
            $(".mobile-navigation").slideToggle()
        }), $(".mobile-navigation").append($(".main-navigation .menu").clone()), $("[data-bg-image]").each(function () {
            var a = $(this).data("bg-image");
            $(this).css("background-image", "url(" + a + ")")
        }), $("[data-bg-color]").each(function () {
            var a = $(this).data("bg-color");
            $(this).css("background-color", a)
        });
        var a = $(".filterable-items");
        a.imagesLoaded(function () {
            a.isotope({
                filter: "*",
                layoutMode: "fitRows",
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            })
        }), $(".filterable-nav a").click(function (e) {
            e.preventDefault(), $(".filterable-nav .current").removeClass("current"), $(this).addClass("current");
            var i = $(this).attr("data-filter");
            return a.isotope({
                filter: i,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            }), !1
        }), $(".mobile-filter").change(function () {
            var e = $(this).val();
            return a.isotope({
                filter: e,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            }), !1
        }), initLightbox({
            selector: ".filterable-item a",
            overlay: !0,
            closeButton: !0,
            arrow: !0
        }), $(".map").gmap3({
            map: {
                options: {
                    maxZoom: 14
                }
            },
            marker: {
                address: "40 Sibley St, Detroit",
                options: {
                    icon: new google.maps.MarkerImage("images/map-marker.png", new google.maps.Size(43, 53, "px", "px"))
                }
            }
        }, "autofit")
    }), $(e).load(function () {})
}(jQuery, document, window);