function setCSS() {
    width = document.body.clientWidth;
    window.alert(width);
    if (width < 1872) {
        // 狭い場合
    } else {
        // 広い場合
    }
}

setCSS();
window.onresize = setCSS;