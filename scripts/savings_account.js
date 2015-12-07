window.onload = function () {

    addStyleSheet('style_sheet/my_style.css');
    replaceToken();
}

function replaceToken() {
    document.getElementById("agent_banking_logo").src = "images/agent_bangking_logo.jpg";
    document.getElementById("logo").src = "images/logo.gif";
    document.getElementById("photo").src = "images/photo.png";
    document.getElementById("qr").src = "images/qr.png";


    document.getElementById("agentId").innerHTML = "11009(Naim Islam)";
    document.getElementById("agentName").innerHTML = "Raqibul Alom";
    document.getElementById("boothAddress").innerHTML = "Vairab Chowdhurir Hath, Sonagazi";

    document.getElementById("accountName").innerHTML = "Mohammad Karim";
    document.getElementById("accountNo").innerHTML = "100-5000001-001"; //Account Number will be 13 characters
    document.getElementById("accountOpeningDate").innerHTML = "30-NOV-2015";
    document.getElementById("accountType").innerHTML = "Savings Account";
    document.getElementById("initialDeposit").innerHTML = "Tk. 5000";
    document.getElementById("district").innerHTML = "Feni";
    document.getElementById("idNo").innerHTML = "CB5000001"; //ID will be 7 characters
    document.getElementById("mobileNo").innerHTML = "01799123456";
    document.getElementById("name").innerHTML = "Mohammad Karim";
    document.getElementById("printDate").innerHTML = "30-NOV-2015 11:15:15AM"; // Print Date will be Timestamp
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