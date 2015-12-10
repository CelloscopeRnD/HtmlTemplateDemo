window.onload = function () {
    addStyleSheet('style_sheet/my_style.css');
    replaceToken();
}

function replaceToken() {
    addImage("agent_banking_logo", "images/agent_bangking_logo.bmp");
    addImage("logo", "images/logo.png");
    addImage("photo", "images/photo.png");
    addImage("qr", "images/qr.png");


    addText("agentName", "Raqibul Alom"); //#AGENT_NAME
    addText("agentPoint", "Kashipur Bazar"); //#AGENT_POINT
    addText("boothAddress", "Vairab Chowdhurir Hath, Sonagazi"); //#BOOTH_ADDRESS
    addText("outletName", "Vairab Chowdhurir Hath, Sonagazi"); //#OUTLATE_NAME
    /*
   Savings Account: name,village,mobileNo,union,subDistrict,district,accountName,idNo,accountNo,savingsAccountType,accountOpeningDate,printDate
   Current Account: name,village,mobileNo,union,subDistrict,district,accountName,idNo,accountNo,savingsAccountType,accountOpeningDate,printDate
   DPS Account: name,village,mobileNo,union,subDistrict,district,accountName,idNo,accountNo,linkAccountNumber,accountOpeningDate,monthlyDeposit,printDate
    
    
    */
    // Value will be all caps
    // BDT will be used for currency
    // Comma will be used for amount 
    // date format will be 30-NOV-2015
    addText("accountName", "MD ARIF GAZI"); //#ACCOUNT_NAME
    addText("accountNo", "2001158500126"); //#ACCOUNT_NO, Account Number will be 13 characters
    addText("accountNoLabel", "একাউন্ট নম্বর"); //#ACCOUNT_NO_LABEL
    addText("accountOpeningDate", "30-NOV-2015"); //#ACCOUNT_OPENING_DATE
    addText("accountTypeLabel", "একাউন্টের ধরন"); //#ACCOUNT_TYPE_LABEL
    addText("agentNameLabel", "এজেন্টের নাম"); //#AGENT_NAME_LABEL
    addText("agentName", "BADRUL ALOM"); //#AGENT_NAME
    addText("cashDeposit", "CASH DEPOSIT"); //#CASH_DEPOSIT
    addText("address", ""); //#ADDRESS
    addText("cashWithdraw", "CASH WITHDRAW"); //#CASH_WITHDRAW
    addText("currentAccountType", "CURRENT ACCCOUNT"); //#CURRENT_ACCOUNT_TYPE
    addText("district", "FENI"); //#DISTRICT    
    addText("depositAmount", "1000Tk. ONE THOUSAND ONLY. "); //#DEPOSIT_AMOUNT
    addText("endDate", "30-NOV-2027"); //#END_DATE
    addText("expiryAmount", "32,000 টাকা"); //#EXPIRY_AMOUNT
    addText("expireDate", "30-NOV-2027"); //#EXPAIRE_DATE
    addText("customerId", "CB5000001"); //#CUSTOMER_ID, ID will be 7 characters 
    addText("customerIdLabel", "কাষ্টমার আইডি"); //#CUSTOMER_ID_LABEL,
    addText("initialDeposit", "BDT 3,000.00"); //#INITIAL_DEPOSIT, BDT will be used for currency and comma will be used for currency
    addText("linkAccountNumber", "100-5000001-001"); //#LINK_ACCOUNT_NUMBER
    addText("contactNo", "01617877595"); //#CONTACT_NO
    addText("monthlyDeposit", "1000  টাকা"); //#MONTHLY_DEPOSIT
    addText("customerName", "MD ARIF GAZI"); //#CUSTOMER_NAME
    addText("printDate", "30-NOV-2015 11:15:15 AM"); // Print Date will be Timestamp #PRINT_DATE
    addText("requestId", "736373736"); //#REQUEST_ID
    addText("savingsAccountTitle", "সিটি এজেন্ট সেভিংস একাউন্ট"); //#SAVINGS_ACCOUNT_TITLE
    addText("savingsAccountType", "Savings"); //#SAVINGS_ACCOUNT_TYPE
    addText("subDistrict", "SONAGAZI"); //#SUB_DISTRICT
    addText("duration", "১২ YEARS"); //#DURATION
    addText("transactionDate", "30-NOV-201"); //#TRANSACTION_DATE
    addText("transactionId", "TR025552"); //#TRANSACTION_ID
    addText("village", "SUJAPUR"); //#VILLAGE
    addText("union", "VHAIRAB CHOWDHURIR HAT"); //#UNION
    addText("userId", "11009(NAIM ISLAM)"); //#USER_ID
    addText("withdrawAmount", "15000Tk. FIFTEEN THOUSAND ONLY. "); //#WITHDRAW_AMOUNT
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






