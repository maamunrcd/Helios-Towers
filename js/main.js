$(document).ready(function () {
    var accordionWidth = $("ul.accordion").innerWidth();
    var windowHeight = $(window).height();


    //Left side Accordion list item Counts
    var listCountAnalysis = $("#analysis li a.toggle").length;
    var listCountTools = $("#tools li a.toggle").length;

    //Right side Accordion list item Counts
    var listCountLeftSide = $(".accordion.left-side-accordion li a.toggleItem").length;

    //Right List item Height
    var listHeight = $("#analysis li a.toggle").outerHeight() * listCountAnalysis;
    var listHeightTools = $("#tools li a.toggle").outerHeight() * listCountAnalysis;

    //Left side list item Height
    var leftlistHeights = $(".accordion.left-side-accordion li a.toggleItem").outerHeight() * listCountLeftSide;

    $(".rightside").css({"right": -accordionWidth-4});
    $(".leftside").css({"left": -accordionWidth-4});

    //Right side accordion active item display
    $(".accordion li.active").children(".inner").css("display", "block");

    //Left side accordion active item display
    $(".accordion li.show").children(".inner").css("display", "block");

    //Right side accordion Height
    $(".rightside .accordion").css({"height": windowHeight});

    //Left side accordion Height
    $(".leftside .accordion").css({"height": windowHeight});

    //Right side accordion Height
    $(".rightside .accordion li .inner").css("height", windowHeight - listHeight-20);

    //Right side accordion Height
    $(".leftside .accordion li .inner").css("height", windowHeight - leftlistHeights-20);

    //Accordion Tab inner items height
    $("#analysis .inner .inner-block").css("height", windowHeight - listHeight);
    $("#tools .inner .inner-block").css("height", windowHeight - listHeightTools);

    //Left Accordion Tab inner items height
    $(".accordion.left-side-accordion .inner .inner-block").css("height", windowHeight - leftlistHeights);

    //Right side tab btn onClick function
    $("a.toggle_btn").on('click', function () {
        var action = true;
        var currentAttrValue = $(this).attr('href');
        if ($(this).hasClass("show")) {
            $('.accordion' + currentAttrValue).hide().siblings().show();
            $(this).removeClass("show");
            $(".rightside").css({"right": -accordionWidth - 4, "opacity": 1});

        } else {
            $("a.toggle_btn").removeClass("show");
            $(this).addClass("show");
            $('.accordion' + currentAttrValue).hide().siblings().show();
            $(".rightside").css("right", 0);

        }
    });

    $(".site_details_btn").on('click',function () {
        if ($(this).hasClass("show")) {
            $(".leftside").css({"left": -accordionWidth-4});
            $(this).toggleClass('show');

        } else {
            $(".leftside").css({"left": 0});
            $(this).toggleClass('show');
        }
    })

    //Right side Accordion item show hide function
    $('a.toggle').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.parent().hasClass("active")) {
            $this.parent().removeClass("active");
            var blockHeight = $this.next(".inner").children().innerHeight();
            if ($this.next(".inner").innerHeight() < blockHeight) {
                $this.next(".inner").css({"overflow-x": hidden, "overflow-y": scroll});
            }
            $this.next(".inner").slideUp();
        } else {
            $(this).parent().parent().children("li.active").children(".inner").slideUp();
            $(this).parent().parent().children().removeClass("active");
            $this.parent().addClass("active");
            $this.next(".inner").slideDown();
        }
    });


    //Left side Accordion item show hide function
    $('a.toggleItem').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.parent().hasClass("show")) {
            $this.parent().toggleClass("show");
            var blockHeight = $this.next(".inner").children().innerHeight();
            if ($this.next(".inner").innerHeight() < blockHeight) {
                $this.next(".inner").css({"overflow-x": "hidden", "overflow-y": "scroll"});
            }
            $this.next(".inner").slideUp();
        } else {
            $this.parent().toggleClass("show");
            $this.next(".inner").slideDown();
        }
    });


    //List view icons change
    $(".icons").on('click', function () {
        var action = true;
        if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
            $(this).children().children("img").attr("src", "images/down-arrow.png");
        } else {
            $(".icons").parent().removeClass("active");
            $(".icons").children().children("img").attr("src", "images/down-arrow.png");
            $(this).parent().addClass("active");
            $(this).children().children("img").attr("src", "images/down-arrow-active.png");
        }
    });


    //Menu select items = Choose project =
    $(".menu-section select").on('click', function () {
        if ($(this).val() == "") {
        } else {
            $(".rightside").css({"opacity": "0"});
            $(".table-section table").css("display", "table");

            // $(".table-section table").addClass("display-table");
        }
    });

    /*Site tab js*/
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    $("#edit-add-comments").on('click',function () {
        $(this).parents(".content-section").hide();
        $(this).parents(".content-section").next().show();
    });
    $("#return-to-rating").on('click',function () {
        $(this).parents(".content-section").hide();
        $(this).parents(".content-section").siblings().show();
    });

    $("#project_details_btn").on('click',function () {
        $(this).parents("#existing_projects").hide();
        $("#project_details").show();
    });
    $("#back-existing_projects").on('click',function () {
        $(this).parents("#project_details").hide();
        $("#existing_projects").show();
    });
    $("#backto-existing_projects").on('click',function () {
        $(this).parents("#view_analysis_point").hide();
        $("#existing_projects").show();
    });
    $("#view_analysis_point_btn").on('click',function () {
        $(this).parents("#existing_projects").hide();
        $("#view_analysis_point").show();
    });

});