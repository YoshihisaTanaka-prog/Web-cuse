const interval = Math.floor(1000 / 60 * 10);
var resizeTimer;
var width = 0;

function setCSS() {
    setMainFunctionBackground();
    width = document.body.clientWidth;
    if ( width < 900 ) {
        // メチャクチャ狭い場合
        setThin();
        ultraThinCSS();
        // window.alert('1');
    } else if (width < 1850) {
        // 1段のみの場合
        setThin();
        thinCSS();
        // window.alert('2');
    } else if (width < 1921) {
        // 2段構えできる場合
        setWide();
        wideCSS();
        // window.alert('3');
    } else {
        // メチャクチャ広い場合
        setWide();
        ultraWideCSS();
        // window.alert('4');
    }
}

window.addEventListener('resize', function (event) {
    console.log('resizing');
    if (resizeTimer !== false) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(setCSS, interval);
});
setCSS();