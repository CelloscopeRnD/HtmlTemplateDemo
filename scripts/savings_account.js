window.onload = function () {

    addStyleSheet('style_sheet/my_style.css');
    replaceToken();
}

function replaceToken() {
    document.getElementById("agent_banking_logo").src = "images/agent_bangking_logo.jpg";
    document.getElementById("logo").src = "images/logo.gif";
    document.getElementById("photo").src = "images/photo.png";

    document.getElementById("agentId").innerHTML = "Naim Islam";
    document.getElementById("agentName").innerHTML = "Raqibul Alom";
    document.getElementById("boothAddress").innerHTML = "Vairab Chowdhurir Hath, Sonagazi";

    document.getElementById("accountName").innerHTML = "Mohammad Karim";
    document.getElementById("accountNo").innerHTML = "1234567890";
    document.getElementById("accountOpeningDate").innerHTML = "30-11-2015";
    document.getElementById("accountType").innerHTML = "Savings Account";
    document.getElementById("district").innerHTML = "Feni";
    document.getElementById("idNo").innerHTML = "987654321";
    document.getElementById("mobileNo").innerHTML = "01799123456";
    document.getElementById("name").innerHTML = "Mohammad Karim";
    document.getElementById("printDate").innerHTML = "05-12-2015";
    document.getElementById("subDistrict").innerHTML = "Sonagazi";
    document.getElementById("village").innerHTML = "Sujapur";
    document.getElementById("union").innerHTML = "Vhairab Chowdhurir Hat";
}

function addStyleSheet(href) {
    var head = document.head
  , link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;

    head.appendChild(link);
}