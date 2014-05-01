(function($) {
	var $nav = $('.sticky');
    $nav.slideUp();
    $("what").hide();
	var $topic = $('.topic');
    var navTopics = ["Home", 
        "Topics", 
        "Entrepreneurship",
        "Cognitive Surplus",
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
        "About", 
        "Credits"];

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
            "surplus",
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
            "about",
            "credits"],
		navigation: true,
		autoScrolling: false,
        paddingTop: "5em",
        navigationTooltips: navTopics,
        //nice, brah
        afterLoad: function(al, index) {
            if (index === 1) {
                $nav.slideUp("slow");
            }
            if (index === 2) {
                $nav.removeClass("invisible");
                $nav.slideDown("slow");
            }
        }
	});
}(jQuery));
