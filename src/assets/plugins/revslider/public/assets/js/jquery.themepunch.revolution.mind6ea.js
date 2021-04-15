/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.0.9 (21.09.2015)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
 **************************************************************************/
! function (e, t) {
    "use strict";
    e.fn.extend({
        revolution: function (a) {
            var n = {
                delay: 9e3,
                responsiveLevels: 4064,
                gridwidth: 960,
                gridheight: 500,
                minHeight: 0,
                autoHeight: "off",
                sliderType: "standard",
                sliderLayout: "auto",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                disableProgressBar: "off",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                dottedOverlay: "none",
                startDelay: 0,
                lazyType: "smart",
                spinner: "spinner0",
                shuffle: "off",
                viewPort: {
                    enable: !1,
                    outof: "wait",
                    visible_area: "60%"
                },
                fallbacks: {
                    isJoomla: !1,
                    panZoomDisableOnMobile: "off",
                    simplifyAll: "on",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: !0
                },
                parallax: {
                    type: "off",
                    levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    speed: 400,
                    bgparallax: "on",
                    opacity: "on",
                    disable_onmobile: "off"
                },
                carousel: {
                    horizontal_align: "center",
                    vertical_align: "center",
                    infinity: "on",
                    space: 0,
                    maxVisibleItems: 3,
                    stretch: "off",
                    fadeout: "on",
                    maxRotation: 0,
                    minScale: 0,
                    vary_fade: "off",
                    vary_rotation: "on",
                    vary_scale: "off",
                    border_radius: "0px",
                    padding_top: 0,
                    padding_bottom: 0
                },
                navigation: {
                    keyboardNavigation: "on",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "off",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: !1,
                        swipe_direction: "horizontal"
                    },
                    arrows: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: "",
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        h_align: "left",
                        v_align: "center",
                        space: 0,
                        h_offset: 20,
                        v_offset: 0,
                        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                    },
                    thumbnails: {
                        style: "",
                        enable: !1,
                        width: 100,
                        height: 50,
                        min_width: 100,
                        wrapper_padding: 2,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        position: "inner",
                        space: 2,
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    tabs: {
                        style: "",
                        enable: !1,
                        width: 100,
                        min_width: 100,
                        height: 50,
                        wrapper_padding: 10,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        space: 0,
                        position: "inner",
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                extensions: "extensions/",
                extensions_suffix: ".min.js",
                debugMode: !1
            };
            return a = e.extend(!0, {}, n, a), this.each(function () {
                var n = e(this);
                "hero" == a.sliderType && n.find(">ul>li").each(function (t) {
                    t > 0 && e(this).remove()
                }), a.jsFileLocation = a.jsFileLocation || s("themepunch.revolution.min.html"), a.jsFileLocation = a.jsFileLocation + a.extensions, a.scriptsneeded = o(a, n), a.curWinRange = 0, e(this).on("scriptsloaded", function () {
                    return a.modulesfailing ? (n.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + a.errorm + "</div>").show(), !1) : (i.migration != t && (a = i.migration(n, a)), punchgs.force3D = !0, "on" !== a.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), d(n, a), void u(n, a))
                }), r(n, a.scriptsneeded)
            })
        },
        revaddcallback: function (i) {
            return this.each(function () {
                var a = e(this);
                if (a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0) {
                    var n = a.parent().find(".tp-bannertimer"),
                        o = n.data("opt");
                    o.callBackArray === t && (o.callBackArray = new Array), o.callBackArray.push(i)
                }
            })
        },
        revgetparallaxproc: function () {
            var i = e(this);
            if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                var a = i.parent().find(".tp-bannertimer"),
                    n = a.data("opt");
                return n.scrollproc
            }
        },
        revdebugmode: function () {
            return this.each(function () {
                var i = e(this);
                if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    n.debugMode = !0, v(i, n)
                }
            })
        },
        revscroll: function (i) {
            return this.each(function () {
                var a = e(this);
                a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0 && e("body,html").animate({
                    scrollTop: a.offset().top + opt.li.height() - i + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function () {
            return this.each(function () {
                var i = e(this);
                if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    v(i, n)
                }
            })
        },
        revkill: function () {
            var a = this,
                n = e(this);
            if (punchgs.TweenLite.killDelayedCallsTo(showHideNavElements), i.endMoveCaption && punchgs.TweenLite.killDelayedCallsTo(i.endMoveCaption), n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                n.data("conthover", 1), n.data("conthover-changed", 1), n.trigger("revolution.slide.onpause");
                var o = n.parent().find(".tp-bannertimer"),
                    r = o.data("opt");
                r.tonpause = !0, n.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(n.find("*"), !1), punchgs.TweenLite.killTweensOf(n, !1), n.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                var s = "resize.revslider-" + n.attr("id");
                e(window).off(s), n.find("*").each(function () {
                    var i = e(this);
                    i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != t && i.data("tween").kill(), i.data("kenburn") != t && i.data("kenburn").kill(), i.data("timeline_out") != t && i.data("timeline_out").kill(), i.data("timeline") != t && i.data("timeline").kill(), i.remove(), i.empty(), i = null
                }), punchgs.TweenLite.killTweensOf(n.find("*"), !1), punchgs.TweenLite.killTweensOf(n, !1), o.remove();
                try {
                    n.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (l) {}
                try {
                    n.closest(".rev_slider_wrapper").remove()
                } catch (l) {}
                try {
                    n.remove()
                } catch (l) {}
                return n.empty(), n.html(), n = null, r = null, delete a.c, delete a.opt, !0
            }
            return !1
        },
        revpause: function () {
            return this.each(function () {
                var i = e(this);
                if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                    i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause");
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    n.tonpause = !0, i.trigger("stoptimer")
                }
            })
        },
        revresume: function () {
            return this.each(function () {
                var i = e(this);
                if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                    i.data("conthover", 0), i.data("conthover-changed", 1), i.trigger("revolution.slide.onresume");
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    n.tonpause = !1, i.trigger("starttimer")
                }
            })
        },
        revnext: function () {
            return this.each(function () {
                var a = e(this);
                if (a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0) {
                    var n = a.parent().find(".tp-bannertimer"),
                        o = n.data("opt");
                    i.callingNewSlide(o, a, 1)
                }
            })
        },
        revprev: function () {
            return this.each(function () {
                var a = e(this);
                if (a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0) {
                    var n = a.parent().find(".tp-bannertimer"),
                        o = n.data("opt");
                    i.callingNewSlide(o, a, -1)
                }
            })
        },
        revmaxslide: function () {
            return e(this).find(".tp-revslider-mainul >li").length
        },
        revcurrentslide: function () {
            var i = e(this);
            if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                var a = i.parent().find(".tp-bannertimer"),
                    n = a.data("opt");
                return parseInt(n.act, 0) + 1
            }
        },
        revlastslide: function () {
            return e(this).find(".tp-revslider-mainul >li").length
        },
        revshowslide: function (a) {
            return this.each(function () {
                var n = e(this);
                if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                    var o = n.parent().find(".tp-bannertimer"),
                        r = o.data("opt");
                    i.callingNewSlide(r, n, "to" + (a - 1))
                }
            })
        },
        revcallslidewithid: function (a) {
            return this.each(function () {
                var n = e(this);
                if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                    var o = n.parent().find(".tp-bannertimer"),
                        r = o.data("opt");
                    i.callingNewSlide(r, n, a)
                }
            })
        }
    });
    var i = e.fn.revolution;
    e.extend(!0, i, {
        simp: function (e, t, i) {
            var a = Math.abs(e) - Math.floor(Math.abs(e / t)) * t;
            return i ? a : 0 > e ? -1 * a : a
        },
        iOSVersion: function () {
            var e = !1;
            return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (e = !0) : e = !1, e
        },
        isIE: function (t, i) {
            var a = e('<div style="display:none;"/>').appendTo(e("body"));
            a.html("<!--[if " + (i || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]-->");
            var n = a.find("a").length;
            return a.remove(), n
        },
        is_mobile: function () {
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                t = !1;
            for (var i in e) navigator.userAgent.split(e[i]).length > 1 && (t = !0);
            return t
        },
        callBackHandling: function (t, i, a) {
            try {
                t.callBackArray && e.each(t.callBackArray, function (e, t) {
                    t && t.inmodule && t.inmodule === i && t.atposition && t.atposition === a && t.callback && t.callback.call()
                })
            } catch (n) {
                console.log("Call Back Failed")
            }
        },
        get_browser: function () {
            var e, t = navigator.appName,
                i = navigator.userAgent,
                a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"], a[0]
        },
        get_browser_version: function () {
            var e, t = navigator.appName,
                i = navigator.userAgent,
                a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"], a[1]
        },
        getHorizontalOffset: function (e, t) {
            var i = c(e, ".outer-left"),
                a = c(e, ".outer-right");
            switch (t) {
                case "left":
                    return i;
                case "right":
                    return a;
                case "both":
                    return i + a
            }
        },
        callingNewSlide: function (t, i, a) {
            var n = i.find(".next-revslide").length > 0 ? i.find(".next-revslide").index() : i.find(".processing-revslide").length > 0 ? i.find(".processing-revslide").index() : i.find(".active-revslide").index(),
                o = 0;
            i.find(".next-revslide").removeClass("next-revslide"), a && e.isNumeric(a) || a.match(/to/g) ? (1 === a || -1 === a ? (o = n + a, o = 0 > o ? t.slideamount - 1 : o >= t.slideamount ? 0 : o) : (a = e.isNumeric(a) ? a : parseInt(a.split("to")[1], 0), o = 0 > a ? 0 : a > t.slideamount - 1 ? t.slideamount - 1 : a), i.find(".tp-revslider-slidesli:eq(" + o + ")").addClass("next-revslide")) : a && i.find(".tp-revslider-slidesli").each(function () {
                var t = e(this);
                t.data("index") === a && t.addClass("next-revslide")
            }), o = i.find(".next-revslide").index(), i.trigger("revolution.nextslide.waiting"), o !== n && -1 != o ? A(i, t) : i.find(".next-revslide").removeClass("next-revslide")
        },
        slotSize: function (i, a) {
            a.slotw = Math.ceil(a.width / a.slots), a.sloth = Math.ceil("fullscreen" == a.sliderLayout ? e(window).height() / a.slots : a.height / a.slots), "on" == a.autoHeight && i !== t && "" !== i && (a.sloth = Math.ceil(i.height() / a.slots))
        },
        setSize: function (i) {
            var a = (i.top_outer || 0) + (i.bottom_outer || 0),
                n = parseInt(i.carousel.padding_top || 0, 0),
                o = parseInt(i.carousel.padding_bottom || 0, 0),
                r = i.gridheight[i.curWinRange];
            if (r = r < i.minHeight ? i.minHeight : r, "fullwidth" == i.sliderLayout && "off" == i.autoHeight && punchgs.TweenLite.set(i.c, {
                    maxHeight: r + "px"
                }), i.c.css({
                    marginTop: n,
                    marginBottom: o
                }), i.width = i.ul.width(), i.height = i.ul.height(), m(i), i.height = Math.round(i.gridheight[i.curWinRange] * (i.width / i.gridwidth[i.curWinRange])), i.height > i.gridheight[i.curWinRange] && "on" != i.autoHeight && (i.height = i.gridheight[i.curWinRange]), "fullscreen" == i.sliderLayout) {
                i.height = i.bw * i.gridheight[i.curWinRange];
                var s = (i.c.parent().width(), e(window).height());
                if (i.fullScreenOffsetContainer != t) {
                    try {
                        var l = i.fullScreenOffsetContainer.split(",");
                        l && e.each(l, function (t, i) {
                            s = e(i).length > 0 ? s - e(i).outerHeight(!0) : s
                        })
                    } catch (d) {}
                    try {
                        i.fullScreenOffset.split("%").length > 1 && i.fullScreenOffset != t && i.fullScreenOffset.length > 0 ? s -= e(window).height() * parseInt(i.fullScreenOffset, 0) / 100 : i.fullScreenOffset != t && i.fullScreenOffset.length > 0 && (s -= parseInt(i.fullScreenOffset, 0))
                    } catch (d) {}
                }
                s = s < i.minHeight ? i.minHeight : s, s -= a, i.c.parent().height(s), i.c.closest(".rev_slider_wrapper").height(s), i.c.css({
                    height: "100%"
                }), i.height = s, i.minHeight != t && i.height < i.minHeight && (i.height = i.minHeight)
            } else i.minHeight != t && i.height < i.minHeight && (i.height = i.minHeight), i.c.height(i.height);
            var c = {
                height: n + o + a + i.height
            };
            i.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(c), i.c.closest(".rev_slider_wrapper").css(c), m(i)
        },
        enterInViewPort: function (a) {
            a.waitForCountDown && (P(a.c, a), a.waitForCountDown = !1), a.waitForFirstSlide && (A(a.c, a), a.waitForFirstSlide = !1), ("playing" == a.sliderlaststatus || a.sliderlaststatus == t) && a.c.trigger("starttimer"), a.lastplayedvideos != t && a.lastplayedvideos.length > 0 && e.each(a.lastplayedvideos, function (e, t) {
                i.playVideo(t, a)
            })
        },
        leaveViewPort: function (a) {
            a.sliderlaststatus = a.sliderstatus, a.c.trigger("stoptimer"), a.playingvideos != t && a.playingvideos.length > 0 && (a.lastplayedvideos = e.extend(!0, [], a.playingvideos), a.playingvideos && e.each(a.playingvideos, function (e, t) {
                i.stopVideo && i.stopVideo(t, a)
            }))
        }
    });
    var a = i.is_mobile(),
        n = function (i, a) {
            return e("body").data(i) ? !1 : a.filesystem ? (a.errorm === t && (a.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), a.errorm = a.errorm + '<br>&lt;script type="text/javascript" src="' + a.jsFileLocation + i + a.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(a.jsFileLocation + i + a.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), a.modulesfailing = !0, !1) : (e.ajax({
                url: a.jsFileLocation + i + a.extensions_suffix,
                dataType: "script",
                cache: !0,
                error: function (e) {
                    console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + i + a.extensions_suffix + " on Path:" + a.jsFileLocation), console.info(e)
                }
            }), void e("body").data(i, !0))
        },
        o = function (a, o) {
            var r = new Object,
                s = a.navigation;
            return r.kenburns = !1, r.parallax = !1, r.carousel = !1, r.navigation = !1, r.videos = !1, r.actions = !1, r.layeranim = !1, r.migration = !1, o.data("version") && o.data("version").match(/5./gi) ? (o.find("img").each(function () {
                "on" == e(this).data("kenburns") && (r.kenburns = !0)
            }), ("carousel" == a.sliderType || "on" == s.keyboardNavigation || "on" == s.mouseScrollNavigation || "on" == s.touch.touchenabled || s.arrows.enable || s.bullets.enable || s.thumbnails.enable || s.tabs.enable) && (r.navigation = !0), o.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function () {
                var i = e(this);
                (i.data("ytid") != t || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (r.videos = !0), (i.data("vimeoid") != t || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (r.videos = !0), i.data("actions") !== t && (r.actions = !0), r.layeranim = !0
            }), o.find("li").each(function () {
                e(this).data("link") && e(this).data("link") != t && (r.layeranim = !0, r.actions = !0)
            }), !r.videos && (o.find(".rs-background-video-layer").length > 0 || o.find(".tp-videolayer").length > 0 || o.find("iframe").length > 0 || o.find("video").length > 0) && (r.videos = !0), "carousel" == a.sliderType && (r.carousel = !0), ("off" !== a.parallax.type || a.viewPort.enable || "true" == a.viewPort.enable) && (r.parallax = !0)) : (r.kenburns = !0, r.parallax = !0, r.carousel = !1, r.navigation = !0, r.videos = !0, r.actions = !0, r.layeranim = !0, r.migration = !0), "hero" == a.sliderType && (r.carousel = !1, r.navigation = !1), window.location.href.match(/file:/gi) && (r.filesystem = !0, a.filesystem = !0), r.videos && "undefined" == typeof i.isVideoPlaying && n("revolution.extension.video", a), r.carousel && "undefined" == typeof i.prepareCarousel && n("revolution.extension.carousel", a), r.carousel || "undefined" != typeof i.animateSlide || n("revolution.extension.slideanims", a), r.actions && "undefined" == typeof i.checkActions && n("revolution.extension.actions", a), r.layeranim && "undefined" == typeof i.handleStaticLayers && n("revolution.extension.layeranimation", a), r.kenburns && "undefined" == typeof i.stopKenBurn && n("revolution.extension.kenburn", a), r.navigation && "undefined" == typeof i.createNavigation && n("revolution.extension.navigation", a), r.migration && "undefined" == typeof i.migration && n("revolution.extension.migration", a), r.parallax && "undefined" == typeof i.checkForParallax && n("revolution.extension.parallax", a), r
        },
        r = function (e, t) {
            t.filesystem || "undefined" != typeof punchgs && (!t.kenburns || t.kenburns && "undefined" != typeof i.stopKenBurn) && (!t.navigation || t.navigation && "undefined" != typeof i.createNavigation) && (!t.carousel || t.carousel && "undefined" != typeof i.prepareCarousel) && (!t.videos || t.videos && "undefined" != typeof i.resetVideo) && (!t.actions || t.actions && "undefined" != typeof i.checkActions) && (!t.layeranim || t.layeranim && "undefined" != typeof i.handleStaticLayers) && (!t.migration || t.migration && "undefined" != typeof i.migration) && (!t.parallax || t.parallax && "undefined" != typeof i.checkForParallax) && (t.carousel || !t.carousel && "undefined" != typeof i.animateSlide) ? e.trigger("scriptsloaded") : setTimeout(function () {
                r(e, t)
            }, 50)
        },
        s = function () {
            var t = new RegExp("themepunch.revolution.min.html", "gi"),
                i = "";
            return e("script").each(function () {
                var a = e(this).attr("src");
                a && a.match(t) && (i = a)
            }), i = i.replace("jquery.themepunch.revolution.min.html", ""), i = i.replace("jquery.themepunch.revolution.html", ""), i = i.split("?")[0]
        },
        l = function (t) {
            var i = 9999,
                a = 0,
                n = 0,
                o = 0,
                r = e(window).width();
            t.responsiveLevels && t.responsiveLevels.length && e.each(t.responsiveLevels, function (e, t) {
                t > r && (0 == a || a > t) && (i = t, o = e, a = t), r > t && t > a && (a = t, n = e)
            }), i > a && (o = n), t.curWinRange = o
        },
        d = function (e, t) {
            t.carousel.maxVisibleItems = t.carousel.maxVisibleItems < 1 ? 999 : t.carousel.maxVisibleItems, t.carousel.vertical_align = "top" === t.carousel.vertical_align ? "0%" : "bottom" === t.carousel.vertical_align ? "100%" : "50%"
        },
        c = function (t, i) {
            var a = 0;
            return t.find(i).each(function () {
                var t = e(this);
                !t.hasClass("tp-forcenotvisible") && a < t.outerWidth() && (a = t.outerWidth())
            }), a
        },
        u = function (n, o) {
            if (n == t) return !1;
            if (n.data("aimg") != t && ("enabled" == n.data("aie8") && i.isIE(8) || "enabled" == n.data("amobile") && a) && n.html('<img class="tp-slider-alternative-image" src="' + n.data("aimg") + '">'), n.find(">ul").addClass("tp-revslider-mainul"), o.c = n, o.ul = n.find(".tp-revslider-mainul"), o.cid = n.attr("id"), o.ul.css({
                    visibility: "visible"
                }), o.slideamount = o.ul.find(">li").length, o.slayers = n.find(".tp-static-layers"), o.ul.find(">li").each(function (t) {
                    e(this).data("originalindex", t)
                }), "on" == o.shuffle) {
                var r = new Object,
                    s = o.ul.find(">li:first-child");
                r.fstransition = s.data("fstransition"), r.fsmasterspeed = s.data("fsmasterspeed"), r.fsslotamount = s.data("fsslotamount");
                for (var d = 0; d < o.slideamount; d++) {
                    var c = Math.round(Math.random() * o.slideamount);
                    o.ul.find(">li:eq(" + c + ")").prependTo(o.ul)
                }
                var u = o.ul.find(">li:first-child");
                u.data("fstransition", r.fstransition), u.data("fsmasterspeed", r.fsmasterspeed), u.data("fsslotamount", r.fsslotamount), o.li = o.ul.find(">li")
            }
            if (o.li = o.ul.find(">li"), o.thumbs = new Array, o.slots = 4, o.act = -1, o.firststart = 1, o.loadqueue = new Array, o.syncload = 0, o.conw = n.width(), o.conh = n.height(), o.responsiveLevels.length > 1 ? o.responsiveLevels[0] = 9999 : o.responsiveLevels = 9999, e.each(o.li, function (i, a) {
                    var a = e(a),
                        n = a.find(".rev-slidebg") || a.find("img").first(),
                        r = 0;
                    a.addClass("tp-revslider-slidesli"), a.data("index") === t && a.data("index", "rs-" + Math.round(999999 * Math.random()));
                    var s = new Object;
                    s.params = new Array, s.id = a.data("index"), s.src = a.data("thumb") !== t ? a.data("thumb") : n.data("lazyload") !== t ? n.data("lazyload") : n.attr("src"), a.data("title") !== t && s.params.push({
                        from: RegExp("\\{\\{title\\}\\}", "g"),
                        to: a.data("title")
                    }), a.data("description") !== t && s.params.push({
                        from: RegExp("\\{\\{description\\}\\}", "g"),
                        to: a.data("description")
                    });
                    for (var r = 1; 10 >= r; r++) a.data("param" + r) !== t && s.params.push({
                        from: RegExp("\\{\\{param" + r + "\\}\\}", "g"),
                        to: a.data("param" + r)
                    });
                    if (o.thumbs.push(s), a.data("origindex", a.index()), a.data("link") != t) {
                        var l = a.data("link"),
                            d = a.data("target") || "_self",
                            c = "back" === a.data("slideindex") ? 0 : 60,
                            u = a.data("linktoslide"),
                            p = u;
                        u != t && "next" != u && "prev" != u && o.li.each(function () {
                            var t = e(this);
                            t.data("origindex") + 1 == p && (u = t.data("index"))
                        }), "slide" != l && (u = "no");
                        var h = '<div class="tp-caption sft slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + c + ';" data-x="center" data-y="center" ',
                            f = "scroll_under" === u ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === u ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === u ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + u + '","delay":"0.2"}]';
                        h = "no" == u ? h + ' data-start="0">' : h + "data-actions='" + f + '\' data-start="0">', h += '<a style="width:100%;height:100%;display:block"', h = "slide" != l ? h + ' target="' + d + '" href="' + l + '"' : h, h += '><span style="width:100%;height:100%;display:block"></span></a></div>', a.append(h)
                    }
                }), o.rle = o.responsiveLevels.length || 1, o.gridwidth = p(o.gridwidth, o.rle), o.gridheight = p(o.gridheight, o.rle), "on" == o.simplifyAll && (i.isIE(8) || i.iOSVersion()) && (n.find(".tp-caption").each(function () {
                    var t = e(this);
                    t.removeClass("customin customout").addClass("fadein fadeout"), t.data("splitin", ""), t.data("speed", 400)
                }), o.li.each(function () {
                    var t = e(this);
                    t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1);
                    var i = t.find(".rev-slidebg") || t.find(">img").first();
                    i.data("kenburns", "off")
                })), o.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), o.autoHeight = "fullscreen" == o.sliderLayout ? "on" : o.autoHeight, "fullwidth" == o.sliderLayout && "off" == o.autoHeight && n.css({
                    maxHeight: o.gridheight[o.curWinRange] + "px"
                }), "auto" != o.sliderLayout && 0 == n.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== o.sliderLayout || "on" != o.fullScreenAutoWidth)) {
                var m = n.parent(),
                    w = m.css("marginBottom"),
                    b = m.css("marginTop");
                w = w === t ? 0 : w, b = b === t ? 0 : b, m.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:' + b + ";margin-bottom:" + w + '"></div>'), n.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + n.height() + 'px"></div>'), n.parent().css({
                    marginTop: "0px",
                    marginBottom: "0px"
                }), n.parent().css({
                    position: "absolute"
                })
            }
            if (o.shadow !== t && o.shadow > 0 && (n.parent().addClass("tp-shadow" + o.shadow), n.parent().append('<div class="tp-shadowcover"></div>'), n.parent().find(".tp-shadowcover").css({
                    backgroundColor: n.parent().css("backgroundColor"),
                    backgroundImage: n.parent().css("backgroundImage")
                })), l(o), !n.hasClass("revslider-initialised")) {
                n.addClass("revslider-initialised"), n.addClass("tp-simpleresponsive"), n.attr("id") == t && n.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), o.firefox13 = !1, o.ie = !e.support.opacity, o.ie9 = 9 == document.documentMode, o.origcd = o.delay; {
                    var x = e.fn.jquery.split("."),
                        _ = parseFloat(x[0]),
                        k = parseFloat(x[1]);
                    parseFloat(x[2] || "0")
                }
                1 == _ && 7 > k && n.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + x + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), _ > 1 && (o.ie = !1);
                var T = new Object;
                T.addedyt = 0, T.addedvim = 0, T.addedvid = 0, n.find(".tp-caption, .rs-background-video-layer").each(function () {
                    var n = e(this),
                        r = n.data("autoplayonlyfirsttime"),
                        s = n.data("autoplay");
                    n.hasClass("tp-static-layer") && i.handleStaticLayers && i.handleStaticLayers(n, o);
                    var l = 0;
                    if (n.find("iframe").each(function () {
                            punchgs.TweenLite.set(e(this), {
                                autoAlpha: 0
                            }), l++
                        }), l > 0 && n.data("iframes", !0), n.hasClass("tp-caption")) {
                        var d = n.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
                        n.wrap('<div class="tp-parallax-wrap" style="' + d + 'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="' + d + 'position:absolute;"><div class="tp-mask-wrap" style="' + d + 'position:absolute" ></div></div></div>');
                        var c = ["pendulum", "rotate", "slideloop", "pulse", "wave"],
                            u = n.closest(".tp-loop-wrap");
                        e.each(c, function (e, t) {
                            var i = n.find(".rs-" + t),
                                a = i.data() || "";
                            "" != a && (u.data(a), u.addClass("rs-" + t), i.children(0).unwrap(), n.data("loopanimation", "on"))
                        }), punchgs.TweenLite.set(n, {
                            visibility: "hidden"
                        })
                    }
                    var p = n.data("actions");
                    p !== t && i.checkActions(n, o, p), h(n, o), i.checkVideoApis && (T = i.checkVideoApis(n, o, T)), a && ((1 == r || "true" == r) && (n.data("autoplayonlyfirsttime", "false"), r = !1), (1 == s || "true" == s || "on" == s || "1sttime" == s) && (n.data("autoplay", "off"), s = "off")), (1 == r || "true" == r || "1sttime" == s) && n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), (1 == s || "true" == s || "on" == s || "no1sttime" == s) && n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
                }), n.hover(function () {
                    n.trigger("tp-mouseenter"), o.overcontainer = !0
                }, function () {
                    n.trigger("tp-mouseleft"), o.overcontainer = !1
                }), n.on("mouseover", function () {
                    n.trigger("tp-mouseover"), o.overcontainer = !0
                }), n.find(".tp-caption video").each(function () {
                    var t = e(this);
                    t.removeClass("video-js vjs-default-skin"), t.attr("preload", ""), t.css({
                        display: "none"
                    })
                }), "standard" !== o.sliderType && (o.lazyType = "all"), L(n.find(".tp-static-layers"), o, 0), S(n.find(".tp-static-layers img"), o, function () {
                    n.find(".tp-static-layers img").each(function () {
                        var i = e(this),
                            a = i.data("lazyload") != t ? i.data("lazyload") : i.attr("src"),
                            n = C(o, a);
                        i.attr("src", n.src)
                    })
                }), o.li.each(function (t) {
                    var i = e(this);
                    ("all" == o.lazyType || "smart" == o.lazyType && (0 == t || 1 == t || t == o.slideamount || t == o.slideamount - 1)) && (L(i, o, t), S(i, o, function () {
                        "carousel" == o.sliderType && punchgs.TweenLite.to(i, 1, {
                            autoAlpha: 1,
                            ease: punchgs.Power3.easeInOut
                        })
                    }))
                });
                var z = M("#")[0];
                if (z.length < 9 && z.split("slide").length > 1) {
                    var H = parseInt(z.split("slide")[1], 0);
                    1 > H && (H = 1), H > o.slideamount && (H = o.slideamount), o.startWithSlide = H - 1
                }
                n.append('<div class="tp-loader ' + o.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 === n.find(".tp-bannertimer").length && n.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), n.find(".tp-bannertimer").css({
                    width: "0%"
                }), n.find(".tp-bannertimer").data("opt", o), o.ul.css({
                    display: "block"
                }), y(n, o), "off" !== o.parallax.type && i.checkForParallax(n, o), i.setSize(o), "hero" !== o.sliderType && i.createNavigation(n, o), i.resizeThumbsTabs && i.resizeThumbsTabs(o), f(o);
                var O = o.viewPort;
                o.inviewport = !1, O != t && O.enable && (O.visible_area = parseFloat(O.visible_area) / 100, O.visible_area = O.visible_area < .001 ? 100 * O.visible_area : O.visible_area, i.scrollTicker && i.scrollTicker(o, n)), setTimeout(function () {
                    "carousel" == o.sliderType && i.prepareCarousel(o), !O.enable || O.enable && o.inviewport || O.enable && !o.inviewport && "wait" == !O.outof ? A(n, o) : o.waitForFirstSlide = !0, i.manageNavigation && i.manageNavigation(o), o.slideamount > 1 && (!O.enable || O.enable && o.inviewport ? P(n, o) : o.waitForCountDown = !0), setTimeout(function () {
                        n.trigger("revolution.slide.onloaded")
                    }, 100)
                }, o.startDelay), o.startDelay = 0, e("body").data("rs-fullScreenMode", !1), e(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function () {
                    e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function () {
                        e(window).trigger("resize")
                    }, 200)
                });
                var I = "resize.revslider-" + n.attr("id");
                e(window).on(I, function () {
                    return n == t ? !1 : (0 != e("body").find(n) && f(o), void((n.outerWidth(!0) != o.width || n.is(":hidden") || "fullscreen" == o.sliderLayout && e(window).height() != o.lastwindowheight) && (o.lastwindowheight = e(window).height(), v(n, o))))
                }), g(n, o), f(o), o.disableFocusListener || "true" == o.disableFocusListener || o.disableFocusListener === !0 || j(n, o)
            }
        },
        p = function (t, i) {
            if (!e.isArray(t)) {
                var a = t;
                t = new Array, t.push(a)
            }
            if (t.length < i)
                for (var a = t[t.length - 1], n = 0; n < i - t.length + 2; n++) t.push(a);
            return t
        },
        h = function (a, n) {
            "sliderenter" === a.data("start") && (n.layersonhover === t && (n.c.on("tp-mouseenter", function () {
                n.layersonhover && e.each(n.layersonhover, function (e, a) {
                    a.data("animdirection", "in");
                    var o = a.data("timeline_out"),
                        r = "carousel" === n.sliderType ? 0 : n.width / 2 - n.gridwidth[n.curWinRange] * n.bw / 2,
                        s = 0,
                        l = a.closest(".tp-revslider-slidesli");
                    if (l.hasClass("active-revslide") || l.hasClass("processing-revslide")) {
                        o != t && (o.pause(0), o.kill()), i.animateSingleCaption(a, n, r, s, 0, !1, !0);
                        var d = a.data("timeline");
                        a.data("triggerstate", "on"), d.play(0)
                    }
                })
            }), n.c.on("tp-mouseleft", function () {
                n.layersonhover && e.each(n.layersonhover, function (e, t) {
                    t.data("animdirection", "out"), t.data("triggered", !0), t.data("triggerstate", "off"), i.stopVideo && i.stopVideo(t, n), i.endMoveCaption && i.endMoveCaption(t, null, null, n)
                })
            }), n.layersonhover = new Array), n.layersonhover.push(a))
        },
        f = function (t) {
            var a = i.getHorizontalOffset(t.c, "left");
            if ("auto" == t.sliderLayout || "fullscreen" === t.sliderLayout && "on" == t.fullScreenAutoWidth) "fullscreen" == t.sliderLayout && "on" == t.fullScreenAutoWidth ? punchgs.TweenLite.set(t.ul, {
                left: 0,
                width: t.c.width()
            }) : punchgs.TweenLite.set(t.ul, {
                left: a,
                width: t.c.width() - i.getHorizontalOffset(t.c, "both")
            });
            else {
                var n = Math.ceil(t.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - a);
                punchgs.TweenLite.set(t.c.parent(), {
                    left: 0 - n + "px",
                    width: e(window).width() - i.getHorizontalOffset(t.c, "both")
                })
            }
            t.slayers && "fullwidth" != t.sliderLayout && "fullscreen" != t.sliderLayout && punchgs.TweenLite.set(t.slayers, {
                left: a
            })
        },
        g = function (a, n, o) {
            var r = a.parent();
            e(window).width() < n.hideSliderAtLimit ? (a.trigger("stoptimer"), "none" != r.css("display") && r.data("olddisplay", r.css("display")), r.css({
                display: "none"
            })) : a.is(":hidden") && o && (r.css(r.data("olddisplay") != t && "undefined" != r.data("olddisplay") && "none" != r.data("olddisplay") ? {
                display: r.data("olddisplay")
            } : {
                display: "block"
            }), a.trigger("restarttimer"), setTimeout(function () {
                v(a, n)
            }, 150)), i.hideUnHideNav && i.hideUnHideNav(n)
        },
        v = function (e, a) {
            if (l(a), !i.resizeThumbsTabs || i.resizeThumbsTabs(a) === !0) {
                if (g(e, a, !0), f(a), "carousel" == a.sliderType && i.prepareCarousel(a, !0), e === t) return !1;
                i.setSize(a), a.conw = a.c.width(), a.conh = a.c.height();
                var n = e.find(".active-revslide .slotholder"),
                    o = e.find(".processing-revslide .slotholder");
                w(e, a, e, 2), "standard" === a.sliderType && (punchgs.TweenLite.set(o.find(".defaultimg"), {
                    opacity: 0
                }), n.find(".defaultimg").css({
                    opacity: 1
                })), "carousel" == a.sliderType && a.lastconw != a.conw && (clearTimeout(a.pcartimer), a.pcartimer = setTimeout(function () {
                    i.prepareCarousel(a, !0)
                }, 100), a.lastconw = a.conw), i.manageNavigation && i.manageNavigation(a), i.animateTheCaptions && i.animateTheCaptions(e.find(".active-revslide"), a, !0), "on" == o.data("kenburns") && i.startKenBurn(o, a, o.data("kbtl").progress()), "on" == n.data("kenburns") && i.startKenBurn(n, a, n.data("kbtl").progress())
            }
        },
        m = function (e) {
            e.bw = e.width / e.gridwidth[e.curWinRange], e.bh = e.height / e.gridheight[e.curWinRange], e.bh > e.bw ? e.bh = e.bw : e.bw = e.bh, (e.bh > 1 || e.bw > 1) && (e.bw = 1, e.bh = 1)
        },
        y = function (n, o) {
            if (n.find(".tp-caption").each(function () {
                    var i = e(this);
                    i.data("transition") !== t && i.addClass(i.data("transition"))
                }), o.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: n.parent().css("maxHeight")
                }), "on" == o.autoHeight && (o.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: "none"
                }), n.css({
                    maxHeight: "none"
                }), n.parent().css({
                    maxHeight: "none"
                })), o.li.each(function (i) {
                    var a = e(this),
                        n = a.data("originalindex");
                    (o.startWithSlide != t && n == o.startWithSlide || o.startWithSlide === t && 0 == i) && a.addClass("next-revslide"), a.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    })
                }), "carousel" === o.sliderType) {
                o.ul.css({
                    overflow: "visible"
                }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
                var r = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                o.c.parent().prepend(r), o.c.parent().append(r), i.prepareCarousel(o)
            }
            n.parent().css({
                overflow: "visible"
            }), o.li.find(">img").each(function () {
                var i = e(this),
                    n = i.closest("li").find(".rs-background-video-layer");
                i.addClass("defaultimg"), "on" == o.panZoomDisableOnMobile && a && (i.data("kenburns", "off"), i.data("bgfit", "cover")), i.wrap('<div class="slotholder" style="width:100%;height:100%;"></div>');
                var r = i.data();
                i.closest(".slotholder").data(r), n.length > 0 && r.bgparallax != t && n.data("bgparallax", r.bgparallax), "none" != o.dottedOverlay && o.dottedOverlay != t && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + o.dottedOverlay + '"></div>');
                var s = i.attr("src");
                r.src = s, r.bgfit = r.bgfit || "cover", r.bgrepeat = r.bgrepeat || "no-repeat", r.bgposition = r.bgposition || "center center";
                var l = i.closest(".slotholder");
                i.parent().append('<div class="tp-bgimg defaultimg" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + r.bgrepeat + ";background-image:url(" + s + ");background-size:" + r.bgfit + ";background-position:" + r.bgposition + ';width:100%;height:100%;"></div>');
                var d = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML);
                i.replaceWith(d), i = l.find(".tp-bgimg"), i.data(r), i.attr("src", s), ("standard" === o.sliderType || "undefined" === o.sliderType) && i.css({
                    opacity: 0
                })
            })
        },
        w = function (t, i, a, n) {
            i.removePrepare = i.removePrepare + n, a.find(".slot").each(function () {
                e(this).remove()
            }), i.transition = 0, i.removePrepare = 0
        },
        b = function (e) {
            var i = e;
            return e != t && e.length > 0 && (i = e.split("?")[0]), i
        },
        x = function (e, t) {
            var i = e.split("../index.html"),
                a = t.split("../index.html");
            i.pop();
            for (var n = 0; n < a.length; n++) "." != a[n] && (".." == a[n] ? i.pop() : i.push(a[n]));
            return i.join("../index.html")
        },
        _ = function (t, i, a) {
            i.syncload--, i.loadqueue && e.each(i.loadqueue, function (e, i) {
                var n = i.src.replace(/\.\.\/\.\.\//gi, ""),
                    o = self.location.href,
                    r = document.location.origin,
                    s = o.substring(0, o.length - 1) + "/" + n,
                    l = r + "/" + n,
                    d = x(self.location.href, i.src);
                o = o.substring(0, o.length - 1) + n, r += n, (b(r) === b(decodeURIComponent(t.src)) || b(o) === b(decodeURIComponent(t.src)) || b(d) === b(decodeURIComponent(t.src)) || b(l) === b(decodeURIComponent(t.src)) || b(s) === b(decodeURIComponent(t.src)) || b(i.src) === b(decodeURIComponent(t.src)) || b(i.src).replace(/^.*\/\/[^\/]+/, "") === b(decodeURIComponent(t.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && b(t.src).match(new RegExp(n))) && (i.progress = a, i.width = t.width, i.height = t.height)
            }), k(i)
        },
        k = function (t) {
            3 != t.syncload && t.loadqueue && e.each(t.loadqueue, function (e, i) {
                if (i.progress.match(/prepared/g) && t.syncload <= 3) {
                    t.syncload++;
                    var a = new Image;
                    a.onload = function () {
                        _(this, t, "loaded")
                    }, a.onerror = function () {
                        _(this, t, "failed")
                    }, a.src = i.src, i.progress = "inload"
                }
            })
        },
        T = function (t, i, a) {
            var n = !1;
            if (i.loadqueue && e.each(i.loadqueue, function (e, i) {
                    i.src === t && (n = !0)
                }), !n) {
                var o = new Object;
                o.src = t, o.prio = a, o.progress = "prepared", i.loadqueue.push(o)
            }
        },
        L = function (i, a, n) {
            i.find("img,.defaultimg").each(function () {
                var i = e(this),
                    o = i.data("lazyload") !== t && "undefined" !== i.data("lazyload") ? i.data("lazyload") : i.attr("src");
                i.data("start-to-load", e.now()), T(o, a, n)
            }), k(a)
        },
        C = function (t, i) {
            var a = new Object;
            return t.loadqueue && e.each(t.loadqueue, function (e, t) {
                t.src == i && (a = t)
            }), a
        },
        S = function (a, n, o) {
            var r = !1;
            a.find("img,.defaultimg").each(function () {
                var o = e(this),
                    s = o.data("lazyload") != t ? o.data("lazyload") : o.attr("src"),
                    l = C(n, s);
                if (o.data("loaded") === t && l !== t && l.progress && l.progress.match(/loaded/g)) {
                    if (o.attr("src", l.src), o.hasClass("defaultimg")) i.isIE(8) ? defimg.attr("src", l.src) : o.css({
                        backgroundImage: 'url("' + l.src + '")'
                    }), a.data("owidth", l.width), a.data("oheight", l.height), a.find(".slotholder").data("owidth", l.width), a.find(".slotholder").data("oheight", l.height);
                    else {
                        var d = o.data("ww"),
                            c = o.data("hh");
                        o.data("owidth", l.width), o.data("oheight", l.height), d = d == t || "auto" == d || "" == d ? l.width : d, c = c == t || "auto" == c || "" == c ? l.height : c, o.data("ww", d), o.data("hh", c)
                    }
                    o.data("loaded", !0)
                }
                if (l && l.progress && l.progress.match(/inprogress|inload|prepared/g) && (e.now() - o.data("start-to-load") < 5e3 ? r = !0 : console.error(s + "  Could not be loaded !")), 1 == n.youtubeapineeded && (!window.YT || YT.Player == t) && (r = !0, e.now() - n.youtubestarttime > 5e3 && 1 != n.youtubewarning)) {
                    n.youtubewarning = !0;
                    var u = "YouTube Api Could not be loaded !";
                    "https:" === location.protocol && (u += " Please Check and Renew SSL Certificate !"), console.error(u), n.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + u + "</strong></div>")
                }
                if (1 == n.vimeoapineeded && !window.Froogaloop && (r = !0, e.now() - n.vimeostarttime > 5e3 && 1 != n.vimeowarning)) {
                    n.vimeowarning = !0;
                    var u = "Vimeo Froogaloop Api Could not be loaded !";
                    "https:" === location.protocol && (u += " Please Check and Renew SSL Certificate !"), console.error(u), n.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + u + "</strong></div>")
                }
            }), r ? setTimeout(function () {
                S(a, n, o)
            }, 19) : o()
        },
        A = function (t, a) {
            if (clearTimeout(a.waitWithSwapSlide), t.find(".processing-revslide").length > 0) return a.waitWithSwapSlide = setTimeout(function () {
                A(t, a)
            }, 150), !1;
            var n = t.find(".active-revslide"),
                o = t.find(".next-revslide"),
                r = o.find(".defaultimg");
            return o.index() === n.index() ? (o.removeClass("next-revslide"), !1) : (o.removeClass("next-revslide").addClass("processing-revslide"), "on" == a.stopLoop && o.index() == a.lastslidetoshow - 1 && (t.find(".tp-bannertimer").css({
                visibility: "hidden"
            }), t.trigger("revolution.slide.onstop"), a.noloopanymore = 1), o.index() === a.slideamount - 1 && (a.looptogo = a.looptogo - 1, a.looptogo <= 0 && (a.stopLoop = "on")), a.tonpause = !0, t.trigger("stoptimer"), a.cd = 0, t.find(".tp-loader").css({
                display: "block"
            }), L(o, a, 1), void S(o, a, function () {
                o.find(".rs-background-video-layer").each(function () {
                    var t = e(this);
                    t.hasClass("HasListener") || (t.data("bgvideo", 1), i.manageVideoLayer(t, a)), t.append('<div class="rs-fullvideo-cover"></div>')
                }), z(a, r, t)
            }))
        },
        z = function (e, a, n) {
            var o = n.find(".active-revslide"),
                r = n.find(".processing-revslide"),
                s = o.find(".slotholder"),
                l = r.find(".slotholder");
            e.tonpause = !1, e.cd = 0, n.trigger("nulltimer"), n.find(".tp-loader").css({
                display: "none"
            }), i.setSize(e), i.slotSize(a, e), i.manageNavigation && i.manageNavigation(e);
            var d = {};
            d.nextslide = r, d.currentslide = o, n.trigger("revolution.slide.onbeforeswap", d), e.transition = 1, e.videoplaying = !1, r.data("delay") != t ? (e.cd = 0, e.delay = r.data("delay")) : e.delay = e.origcd;
            var c = o.index(),
                u = r.index();
            e.sdir = c > u ? 1 : 0, "arrow" == e.sc_indicator && (0 == c && u == e.slideamount - 1 && (e.sdir = 1), c == e.slideamount - 1 && 0 == u && (e.sdir = 0)), e.lsdir = e.lsdir === t ? e.sdir : e.lsdir, e.dirc = e.lsdir != e.sdir, e.lsdir = e.sdir, o.index() != r.index() && 1 != e.firststart && i.removeTheCaptions && i.removeTheCaptions(o, e), r.hasClass("rs-pause-timer-once") || r.hasClass("rs-pause-timer-always") ? e.videoplaying = !0 : n.trigger("restarttimer"), r.removeClass("rs-pause-timer-once");
            var p, h;
            if ("carousel" == e.sliderType) h = new punchgs.TimelineLite, i.prepareCarousel(e, h), H(n, e, l, s, r, o, h), e.transition = 0, e.firststart = 0;
            else {
                h = new punchgs.TimelineLite({
                    onComplete: function () {
                        H(n, e, l, s, r, o, h)
                    }
                }), h.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                    opacity: 0
                })), h.pause(), 1 == e.firststart && (punchgs.TweenLite.set(o, {
                    autoAlpha: 0
                }), e.firststart = 0), punchgs.TweenLite.set(o, {
                    zIndex: 18
                }), punchgs.TweenLite.set(r, {
                    autoAlpha: 0,
                    zIndex: 20
                }), "prepared" == r.data("differentissplayed") && (r.data("differentissplayed", "done"), r.data("transition", r.data("savedtransition")), r.data("slotamount", r.data("savedslotamount")), r.data("masterspeed", r.data("savedmasterspeed"))), r.data("fstransition") != t && "done" != r.data("differentissplayed") && (r.data("savedtransition", r.data("transition")), r.data("savedslotamount", r.data("slotamount")), r.data("savedmasterspeed", r.data("masterspeed")), r.data("transition", r.data("fstransition")), r.data("slotamount", r.data("fsslotamount")), r.data("masterspeed", r.data("fsmasterspeed")), r.data("differentissplayed", "prepared")), r.data("transition") == t && r.data("transition", "random"), p = 0;
                var f = r.data("transition") !== t ? r.data("transition").split(",") : "fade",
                    g = r.data("nexttransid") == t ? -1 : r.data("nexttransid");
                "on" == r.data("randomtransition") ? g = Math.round(Math.random() * f.length) : g += 1, g == f.length && (g = 0), r.data("nexttransid", g);
                var v = f[g];
                e.ie && ("boxfade" == v && (v = "boxslide"), "slotfade-vertical" == v && (v = "slotzoom-vertical"), "slotfade-horizontal" == v && (v = "slotzoom-horizontal")), i.isIE(8) && (v = 11), h = i.animateSlide(p, v, n, e, r, o, l, s, h), "on" == l.data("kenburns") && (i.startKenBurn(l, e), h.add(punchgs.TweenLite.set(l, {
                    autoAlpha: 0
                }))), h.pause()
            }
            "off" != e.parallax.type && e.parallax.firstgo == t && i.scrollHandling && (e.parallax.firstgo = !0, e.lastscrolltop = -999, i.scrollHandling(e), setTimeout(function () {
                e.lastscrolltop = -999, i.scrollHandling(e)
            }, 210), setTimeout(function () {
                e.lastscrolltop = -999, i.scrollHandling(e)
            }, 420)), i.animateTheCaptions ? i.animateTheCaptions(r, e, null, h) : h != t && setTimeout(function () {
                h.resume()
            }, 30), punchgs.TweenLite.to(r, .001, {
                autoAlpha: 1
            })
        },
        H = function (n, o, r, s, l, d, c) {
            "carousel" === o.sliderType || (o.removePrepare = 0, punchgs.TweenLite.to(r.find(".defaultimg"), .001, {
                zIndex: 20,
                autoAlpha: 1,
                onComplete: function () {
                    w(n, o, l, 1)
                }
            }), l.index() != d.index() && punchgs.TweenLite.to(d, .2, {
                zIndex: 18,
                autoAlpha: 0,
                onComplete: function () {
                    w(n, o, d, 1)
                }
            })), n.find(".active-revslide").removeClass("active-revslide"), n.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), o.act = l.index(), ("scroll" == o.parallax.type || "scroll+mouse" == o.parallax.type || "mouse+scroll" == o.parallax.type) && (o.lastscrolltop = -999, i.scrollHandling(o)), c.clear(), s.data("kbtl") != t && (s.data("kbtl").reverse(), s.data("kbtl").timeScale(25)), "on" == r.data("kenburns") && (r.data("kbtl") != t ? (r.data("kbtl").timeScale(1), r.data("kbtl").play()) : i.startKenBurn(r, o)), l.find(".rs-background-video-layer").each(function () {
                if (a) return !1;
                var t = e(this);
                i.resetVideo(t, o), punchgs.TweenLite.fromTo(t, 1, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2,
                    onComplete: function () {
                        i.animcompleted && i.animcompleted(t, o)
                    }
                })
            }), d.find(".rs-background-video-layer").each(function () {
                if (a) return !1;
                var t = e(this);
                i.stopVideo && (i.resetVideo(t, o), i.stopVideo(t, o)), punchgs.TweenLite.to(t, 1, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2
                })
            });
            var u = {};
            u.slideIndex = l.index() + 1, u.slideLIIndex = l.index(), u.slide = l, u.currentslide = l, u.prevslide = d, n.trigger("revolution.slide.onchange", u), n.trigger("revolution.slide.onafterswap", u)
        },
        O = function (t, i) {
            t.children().each(function () {
                try {
                    e(this).die("click")
                } catch (t) {}
                try {
                    e(this).die("mouseenter")
                } catch (t) {}
                try {
                    e(this).die("mouseleave")
                } catch (t) {}
                try {
                    e(this).unbind("hover")
                } catch (t) {}
            });
            try {
                t.die("click", "mouseenter", "mouseleave")
            } catch (a) {}
            clearInterval(i.cdint), t = null
        },
        P = function (n, o) {
            if (o.cd = 0, o.loop = 0, o.looptogo = o.stopAfterLoops != t && o.stopAfterLoops > -1 ? o.stopAfterLoops : 9999999, o.lastslidetoshow = o.stopAtSlide != t && o.stopAtSlide > -1 ? o.stopAtSlide : 999, o.stopLoop = "off", 0 == o.looptogo && (o.stopLoop = "on"), o.slideamount > 1 && (0 != o.stopAfterLoops || 1 != o.stopAtSlide)) {
                var r = n.find(".tp-bannertimer");
                n.on("stoptimer", function () {
                    var t = e(this).find(".tp-bannertimer");
                    t.data("tween").pause(), "on" == o.disableProgressBar && t.css({
                        visibility: "hidden"
                    }), o.sliderstatus = "paused"
                }), n.on("starttimer", function () {
                    1 != o.conthover && 1 != o.videoplaying && o.width > o.hideSliderAtLimit && 1 != o.tonpause && 1 != o.overnav && (1 === o.noloopanymore || o.viewPort.enable && !o.inviewport || (r.css({
                        visibility: "visible"
                    }), r.data("tween").resume(), o.sliderstatus = "playing")), "on" == o.disableProgressBar && r.css({
                        visibility: "hidden"
                    })
                }), n.on("restarttimer", function () {
                    var t = e(this).find(".tp-bannertimer");
                    return o.mouseoncontainer && "on" == o.navigation.onHoverStop && !a ? !1 : (1 === o.noloopanymore || o.viewPort.enable && !o.inviewport || (t.css({
                        visibility: "visible"
                    }), t.data("tween").kill(), t.data("tween", punchgs.TweenLite.fromTo(t, o.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: s,
                        delay: 1
                    })), o.sliderstatus = "playing"), void("on" == o.disableProgressBar && t.css({
                        visibility: "hidden"
                    })))
                }), n.on("nulltimer", function () {
                    r.data("tween").pause(0), "on" == o.disableProgressBar && r.css({
                        visibility: "hidden"
                    }), o.sliderstatus = "paused"
                });
                var s = function () {
                    0 == e("body").find(n).length && (O(n, o), clearInterval(o.cdint)), n.trigger("revolution.slide.slideatend"), 1 == n.data("conthover-changed") && (o.conthover = n.data("conthover"), n.data("conthover-changed", 0)), i.callingNewSlide(o, n, 1)
                };
                r.data("tween", punchgs.TweenLite.fromTo(r, o.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: s,
                    delay: 1
                })), r.data("opt", o), n.trigger("starttimer"), n.on("tp-mouseenter", function () {
                    o.mouseoncontainer = !0, "on" != o.navigation.onHoverStop || a || (n.trigger("stoptimer"), n.trigger("revolution.slide.onpause"))
                }), n.on("tp-mouseleft", function () {
                    o.mouseoncontainer = !1, 1 != n.data("conthover") && "on" == o.navigation.onHoverStop && (1 == o.viewPort.enable && o.inviewport || 0 == o.viewPort.enable) && (n.trigger("revolution.slide.onresume"), n.trigger("starttimer"))
                })
            }
        },
        I = (function () {
            var e, t, i = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (e in i)
                if (e in document) {
                    t = i[e];
                    break
                } return function (i) {
                return i && document.addEventListener(t, i), !document[e]
            }
        }(), function (e) {
            return e == t || e.c == t ? !1 : void(1 != e.windowfocused && (e.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function () {
                "on" == e.fallbacks.nextSlideOnWindowFocus && e.c.revnext(), e.c.revredraw(), "playing" == e.lastsliderstatus && e.c.revresume()
            })))
        }),
        F = function (e) {
            e.windowfocused = !1, e.lastsliderstatus = e.sliderstatus, e.c.revpause();
            var t = e.c.find(".active-revslide .slotholder"),
                a = e.c.find(".processing-revslide .slotholder");
            "on" == a.data("kenburns") && i.stopKenBurn(a, e), "on" == t.data("kenburns") && i.stopKenBurn(t, e)
        },
        j = function (i, a) {
            var n = document.documentMode === t,
                o = window.chrome;
            n && !o ? e(window).on("focusin", function () {
                I(a)
            }).on("focusout", function () {
                F(a)
            }) : window.addEventListener ? (window.addEventListener("focus", function () {
                I(a)
            }, !1), window.addEventListener("blur", function () {
                F(a)
            }, !1)) : (window.attachEvent("focus", function () {
                I(a)
            }), window.attachEvent("blur", function () {
                F(a)
            }))
        },
        M = function (e) {
            for (var t, i = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), n = 0; n < a.length; n++) a[n] = a[n].replace("%3D", "="), t = a[n].split("="), i.push(t[0]), i[t[0]] = t[1];
            return i
        }
}(jQuery);