function ultraThinCSS(){
    width = 900;
    const baseMarginWidth = (width - contentWidth) / 4;
    const baseMarginHeight = baseMarginWidth * 0.625;
    setMarginPadding(baseMarginWidth, baseMarginHeight);
    setThin(width - baseMarginWidth * 4);
}