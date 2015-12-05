window.onload = function () {

    addStyleSheet('style_sheet/my_style.css');
    replaceToken();
}

function replaceToken() {
    document.getElementById("agent_banking_logo").src = "images/agent_bangking_logo.jpg";
    document.getElementById("logo").src = "images/logo.gif";
    document.getElementById("name").innerHTML = "Abdur Rahim";
    document.getElementById("village").innerHTML = "Karimpur";
}

function addStyleSheet(href) {
    var head = document.head
  , link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;

    head.appendChild(link)
}