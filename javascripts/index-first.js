const contentWidth = 740;
var width = 0;
var baseMarginWidth = 0;
var baseMarginHeight = 0;

function setThin(){
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
    // window.alert("called setThin");
};
function setWide(){
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

function setMainFunctionBackground(){
    const w = $("#main-function").innerWidth();
    const h = $("#main-function").innerHeight();
    $("#main-function").css({
        "background-size": w + "px " + h + "px",
        "height": h + "px"
    });
}