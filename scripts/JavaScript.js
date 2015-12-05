window.onload = function () {
    addStyleSheet('style_sheet/my_style.css');
}

function addStyleSheet(href) {
    var head = document.head
  , link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;

    head.appendChild(link)
}