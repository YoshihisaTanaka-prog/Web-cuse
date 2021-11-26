function ultraWideCSS(){
    var raito = width / 1920;
    const baseMarginWidth = (width - contentWidth * 2 * raito) / 5;
    const baseMarginHeight = baseMarginWidth * 0.625;
    setMarginPadding(baseMarginWidth, baseMarginHeight);
    setWide(width - baseMarginWidth * 4, raito);
}