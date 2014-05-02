(function($) {
	var $nav = $('.sticky');
    $nav.slideUp();
    $("what").hide();
	var $topic = $('.topic');
    var navTopics = ["Home", 
        "Topics", 
        "Entrepreneurial Spirit",
	"A Hacker's Identity",
	"#noemail",
        "Cognitive Surplus",
	"The Shallows",
        "The Future Internet",
        "Suarez",
        "Future of Work",
        "Privacy and Anonymity",
        "Dunbar's Number", 
        "PEW Reports",
        "Online Dating", 
        "Big Data", 
        "Digital Humanities", 
        "Memes and Remixes", 
        "Otaku",
	"Generation Like",
        "About"
        ];

    //stop ugly arrow key behavior
    $(document).keydown(function(e) {
        if (e.keyCode === 37 || //left
            e.keyCode === 38 || //right
            e.keyCode === 39 || //up
            e.keyCode === 40) { //down
            e.preventDefault();
            if (e.keyCode === 39) {
                $(document).fullpage.moveSectionUp();
            } else if (e.keyCode === 40) {
                $(document).fullpage.moveSectionDown();
            }

        }
    });

    //inject slide headers
    $topic.each(function(i) {
        $(this).prepend("<h2><span>" + navTopics[i + 2] + "</span></h2>");
    });

    //give a cue that topics are clickable
    $topic.mouseover(function() {
        $(this).find("span").css("color", "black");
    }).mouseout(function() {
        $(this).find("span").css("color", "white")
    });

    if (document.location.hash === "#home" || document.location.hash === "") {
        $("#fullpage").css('background', 'url(../img/pg.jpg) no-repeat center center fixed');
    }
    $(window).scroll(function() {
	$("#fullpage").css('background-image', 'none');
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            $("#fullpage").css('background-image', 'url(../img/bg.png)');
        }, 125));
    });

    //make topics clickable
	$topic.click(function() {
		document.location.hash = this.classList[1];
	});

    //nav available on home page
    $(".line").mouseover(function() {
        $nav.removeClass("invisible");
        if (document.location.hash === "#home" || document.location.hash === "") {
            $nav.slideDown("slow");
        }
    });
    //get that shit out of the way
    $nav.mouseleave(function() {
        if (document.location.hash === "#home" || document.location.hash === "") {
            $nav.slideUp("slow");
        }
    });

    //initialize fullpage
	$('#fullpage').fullpage({
		verticalCentered: true,
		resize: true,
        anchors : ["home", 
            "topics", 
            "entrepreneur", 
	    "identity",
	    "noemail",
            "surplus",
	    "shallows",
            "future",
            "suarez",
            "work",
            "privacy",
            "dunbar",
            "pew",
            "dating",
            "bigdata",
            "humanities",
            "memes",
            "otaku",
	        "genlike",
            "about"],
		navigation: true,
		autoScrolling: false,
        paddingTop: "5em",
        navigationTooltips: navTopics,
        //nice, brah
        afterLoad: function(al, index) {
            if (index === 1) {
                $nav.slideUp("slow");
		$("html").css('background', 'url(../img/pg.jpg) no-repeat center center fixed');
            }
            if (index === 2) {
		$("html").css('background', 'none');
                $nav.removeClass("invisible");
                $nav.slideDown("slow");
            }
        }
    });
    $("#fullpage").css("background-color", "#e5e5e5");
    $("#fullpage").css('background-repeat', 'repeat');
}(jQuery));
