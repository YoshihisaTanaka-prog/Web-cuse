const contentWidth = 740;
var width = 0;
var baseMarginWidth = 0;
var baseMarginHeight = 0;

function setThin(mainFuncWidth){
    $(".header-ul").css({
        "padding-top": "20px"
    });
    $(".header-li").css({
        "font-size": "16px",
        "margin-right": "100px"
    });

    $("#logo").css({
        "height": "300px"
    });
    $(".logo").css({
        "padding-top": "40px",
        "width": "800px",
        "height": "226px"
    });
    $(".logo-title").css({
        "width": "800px",
        "font-size": "30pt"
    });
    $(".logo-main").css({
        "margin-top": "20px",
        "width": "800px",
        "font-size": "72px"
    });
    $(".logo-strong").css({
        "font-size": "144px"
    });
    $(".logo-jp").css({
        "width": "800px",
        "margin-top": "220px",
        "font-size": "24px"
    });
    
    $("section").css({
        "border-radius": "75px"
    });
    $("h1").css({
        "font-size": "80px"
    });
    $("h2").css({
        "font-size": "48px"
    });
    $("h3").css({
        "font-size": "32px"
    });
    
    $("#about-our-app").css({
        "height": "1100px"
    });
    $("#functions").css({
        "height": "1900px"
    });
    $("#team-introduction").css({
        "height": "2230px"
    });
    $("#intro-iframe").css({
        "margin-top": "50px"
    });
    $("#contact").css({
        "margin-top": "50px"
    });
    $("#main-function").css({
        "background-size": mainFuncWidth + "px 112px",
        "height": "112px"
    });
    // window.alert("called setThin");
};
function setWide(mainFuncWidth, raito){
    $(".header-ul").css({
        "padding-top": (20 + raito) + "px"
    });
    $(".header-li").css({
        "font-size": (16 * raito) + "px",
        "margin-right": (100 * raito) + "px"
    });

    $("#logo").css({
        "height": (300 * raito) + "px"
    });
    $(".logo").css({
        "padding-top": (40 * raito) + "px",
        "width": (800 * raito) + "px",
        "height": (226 * raito) + "px"
    });
    $(".logo-title").css({
        "width": (800 * raito) + "px",
        "font-size": (30 * raito) + "px"
    });
    $(".logo-main").css({
        "margin-top": (20 * raito) + "px",
        "width": (800 * raito) + "px",
        "font-size": (72 * raito) + "px"
    });
    $(".logo-strong").css({
        "font-size": (144 * raito) + "px"
    });
    $(".logo-jp").css({
        "width": (800 * raito) + "px",
        "margin-top": (220 * raito) + "px",
        "font-size": (24 * raito) + "px"
    });

    $("section").css({
        "border-radius": (75 * raito) + "px"
    });
    $("h1").css({
        "font-size": (80 * raito) + "px"
    });
    $("h2").css({
        "font-size": (48 * raito) + "px"
    });
    $("h3").css({
        "font-size": (32 * raito) + "px"
    });

    $("#about-our-app").css({
        "height": "600px"
    });
    $("#functions").css({
        "height": "1267px"
    });
    $("#team-introduction").css({
        "height": "1400px"
    });
    $("#intro-iframe").css({
        "margin-top": "150px"
    });
    $("#contact").css({
        "margin-top": "200px"
    });
    $("#main-function").css({
        "background-size": mainFuncWidth + "px 88px",
        "height": "88px"
    });
    // window.alert("called setWide");
}
function setMarginPadding(wid, hei) {
    const text = hei + "px " + wid + "px";
    const idList = ["#about-our-app","#team-introduction","#functions"];

    for (let i = 0; i < idList.length; i++){
        $(idList[i]).css({
            "margin": text,
            "padding": text
        });
    }
}