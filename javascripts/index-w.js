function wideCSS(){
    const baseMarginWidth = (width - contentWidth * 2) / 5;
    const baseMarginHeight = baseMarginWidth * 0.625;
    setMarginPadding(baseMarginWidth, baseMarginHeight);
    setWide(width - baseMarginWidth * 4, 1);

}