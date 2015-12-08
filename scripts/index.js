window.onload = function () {

    addStyleSheet('style_sheet/my_style.css');
    replaceToken();
}

function replaceToken() {
    addImage("agent_banking_logo", "images/agent_bangking_logo.jpg");
    addImage("logo", "images/logo.gif");
    addImage("photo", "images/photo.png");
    addImage("qr", "images/qr.png");
    addImage("barcode", "images/barcode.jpg");



    
    addText("agentName", "Raqibul Alom"); //#AGENT_NAME
    addText("agentPoint", "Kashipur Bazar"); //#AGENT_POINT
    addText("boothAddress", "Vairab Chowdhurir Hath, Sonagazi"); //#BOOTH_ADDRESS
    addText("outletName", "Vairab Chowdhurir Hath, Sonagazi"); //#OUTLATE_NAME
    addText("accountName", "Mohammad Karim"); //#ACCOUNT_NAME
    addText("accountNo", "100-5000001-001"); //Account Number will be 13 characters //#ACCOUNT_NO
    addText("accountOpeningDate", "30-NOV-2015"); //#ACCOUNT_OPENING_DATE
    addText("cashDeposit", "Cash Deposit"); //#CASH_DEPOSIT
    addText("cashWithdraw", "Cash Withdraw"); //#CASH_WITHDRAW
    addText("currentAccountType", "Current Account"); //#CURRENT_ACCOUNT_TYPE
    addText("district", "Feni"); //#DISTRICT
    addText("withdrawAmount", "15000Tk. Fifteen Thousand Only. "); //#WITHDRAW_AMOUNT
    addText("depositAmount", "1000Tk. One Thousand Only. "); //#DEPOSIT_AMOUNT
    addText("endDate", "30-NOV-2027"); //#END_DATE
    addText("expiryAmount", "32,000 টাকা"); //#EXPIRY_AMOUNT
    addText("expireDate", "30-NOV-2027"); //#EXPAIRE_DATE
    addText("idNo", "CB5000001"); //ID will be 7 characters #ID_NO
    addText("initialDeposit", "Tk. 5000"); //#INITIAL_DEPOSIT
    addText("linkAccountNumber", "100-5000001-001"); //#LINK_ACCOUNT_NUMBER
    addText("mobileNo", "01799123456"); //#MOBILE_NO
    addText("monthlyDeposit", "1000  টাকা"); //#MONTHLY_DEPOSIT
    addText("name", "Mohammad Karim"); //#NAME
    addText("printDate", "30-NOV-2015 11:15:15AM"); // Print Date will be Timestamp #PRINT_DATE

    addText("requestId", "736373736"); //#REQUEST_ID
    addText("savingsAccountType", "Savings Account"); //#SAVINGS_ACCOUNT_TYPE
    addText("subDistrict", "Sonagazi"); //#SUB_DISTRICT
    addText("transactionDate", "30-NOV-201"); //#TRANSACTION_DATE
    addText("transactionId", "TR025552"); //#TRANSACTION_ID

    addText("timeSpan", "১২ বছর"); //#TIMESPAN
    addText("village", "Sujapur"); //#VILLAGE
    addText("union", "Vhairab Chowdhurir Hat"); //#UNION
    addText("userId", "11009(Naim Islam)"); //#USER_ID
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