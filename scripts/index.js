window.onload = function () {

    addStyleSheet('style_sheet/my_style.css');
    replaceToken();
}

function replaceToken() {
    addImage("agent_banking_logo", "images/agent_bangking_logo.jpg");
    addImage("logo", "images/logo.gif");
    addImage("photo", "images/photo.png");
    addImage("qr", "images/qr.png");



    addText("userId", "11009(Naim Islam)"); //USER_ID
    addText("agentName", "Raqibul Alom");
    addText("agentPoint", "Kashipur Bazar");
    addText("boothAddress", "Vairab Chowdhurir Hath, Sonagazi");
    addText("outletName", "Vairab Chowdhurir Hath, Sonagazi");

    addText("accountName", "Mohammad Karim");
    addText("accountNo", "100-5000001-001"); //Account Number will be 13 characters //#ACCOUNT_NO
    addText("accountOpeningDate", "30-NOV-2015");

    addText("cashDeposit", "Cash Deposit"); //TRANSACTION_TYPE
    addText("cashWithdraw", "Cash Withdraw"); //TRANSACTION_TYPE
    addText("currentAccountType", "Current Account");

    addText("district", "Feni");
    addText("withdrawAmount", "15000Tk. Fifteen Thousand Only. "); //WITHDRAW_AMOUNT
    addText("depositAmount", "1000Tk. One Thousand Only. "); //DEPOSIT_AMOUNT
    addText("endDate", "30-NOV-2027");
    addText("idNo", "CB5000001"); //ID will be 7 characters
    addText("initialDeposit", "Tk. 5000");
    addText("linkAccountNumber", "100-5000001-001");
    addText("mobileNo", "01799123456");
    addText("name", "Mohammad Karim");
    addText("printDate", "30-NOV-2015 11:15:15AM"); // Print Date will be Timestamp

    addText("requestId", "736373736"); //REQUEST_ID
    addText("savingsAccountType", "Savings Account");
    addText("subDistrict", "Sonagazi");
    addText("transactionDate", "30-NOV-201"); //TRANSACTION_DATE
    addText("transactionId", "TR025552"); //TRANSACTION_ID
    
    addText("timeSpan", "১২ বছর");
    addText("village", "Sujapur");
    addText("union", "Vhairab Chowdhurir Hat");
}

function addImage(elementId, path) {
    var id = document.getElementById(elementId);
    if (id != null) {
        id.src = path;
    }
}

function addText(elementId, innerHtml) {
    var id = document.getElementById(elementId);
    if (id != null) {
        id.innerHTML = innerHtml;
    }
}

function addStyleSheet(href) {
    var head = document.head
  , link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;

    head.appendChild(link);
}