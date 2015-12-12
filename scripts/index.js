window.onload = function () {
    addStyleSheet('style_sheet/my_style.css');
    replaceToken();
}

function replaceToken() {
    addImage("agent_banking_logo", "images/agent_bangking_logo.png");
    addImage("logo", "images/logo.png");
    addImage("customerPhoto", "images/photo.png");
    addImage("qr", "images/qr.png");


    addText("agentName", "Raqibul Alom"); //#AGENT_NAME
    addText("agentPoint", "Kashipur Bazar"); //#AGENT_POINT

    addText("outletName", "Vairab Chowdhurir Hath, Sonagazi"); //#OUTLATE_NAME

    // Value will be all caps
    // BDT will be used for currency
    // Comma will be used for amount 
    // date format will be 30-NOV-2015
    addText("accountName", "MD Arif Gazi"); //#ACCOUNT_NAME
    addText("accountNo", "2001158500126"); //#ACCOUNT_NO, Account Number will be 13 characters
    addText("accountNoLabel", "একাউন্ট নম্বর"); //#ACCOUNT_NO_LABEL
    addText("accountOpeningDate", "30-NOV-2015"); //#ACCOUNT_OPENING_DATE
    addText("accountTypeLabel", "একাউন্টের ধরন"); //#ACCOUNT_TYPE_LABEL
    addText("agentNameLabel", "এজেন্টের নাম"); //#AGENT_NAME_LABEL
    addText("agentName", "BADRUL ALOM"); //#AGENT_NAME
    addText("cashDeposit", "CASH DEPOSIT"); //#CASH_DEPOSIT    
    addClassText("addressLabel", "ঠিকানা"); //#ADDRESS_LABEL
    addText("boothAddress", "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI"); //#BOOTH_ADDRESS
    addText("cashWithdraw", "CASH WITHDRAW"); //#CASH_WITHDRAW
    addText("currentAccountType", "CURRENT ACCCOUNT"); //#CURRENT_ACCOUNT_TYPE
    addText("customerAddress", "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA"); //  
    addText("district", "FENI"); //#DISTRICT    
    addText("depositAmount", "1000Tk. ONE THOUSAND ONLY. "); //#DEPOSIT_AMOUNT
    addText("endDate", "30-NOV-2027"); //#END_DATE
    addText("expiryAmount", "32,000 টাকা"); //#EXPIRY_AMOUNT
    addText("expireDate", "30-NOV-2027"); //#EXPAIRE_DATE
    addText("customerId", "CB1158500"); //#CUSTOMER_ID, ID will be 7 characters 
    addText("customerIdLabel", "কাষ্টমার আইডি"); //#CUSTOMER_ID_LABEL,
    addText("initialDeposit", "BDT 3,000.00"); //#INITIAL_DEPOSIT, BDT will be used for currency and comma will be used for currency
    addText("linkAccountNumber", "2001158500126"); //#LINK_ACCOUNT_NUMBER
    addText("mobileNo", "01617877595"); //#MOBILE_NO
    addText("mobileNoLabel", "মোবাইল নং"); //#MOBILE_NO_LABEL
    addText("monthlyDeposit", "1000  টাকা"); //#MONTHLY_DEPOSIT
    addText("customerName", "MD Arif Gazi"); //#CUSTOMER_NAME
    addText("printDate", "30-NOV-2015 11:15:15 AM"); //#PRINT_DATE Print Date will be Timestamp 
    addText("printDateLabel", "প্রিন্টের তারিখ"); //#PRINT_DATE_LABEL 
    addText("requestId", "736373736"); //#REQUEST_ID
    addText("savingsAccountTitle", "সিটি এজেন্ট সেভিংস একাউন্ট"); //#SAVINGS_ACCOUNT_TITLE
    addText("dpsAccountTitle", "সাধারন ডিপিএস একাউন্ট"); //#DPS_ACCOUNT_TITLE
    addText("dpsAccount", "DPS"); //#DPS_ACCOUNT_TITLE
    addText("savingsAccountType", "Savings"); //#SAVINGS_ACCOUNT_TYPE
    addText("subDistrict", "SONAGAZI"); //#SUB_DISTRICT
    addText("duration", "১২ YEARS"); //#DURATION
    addText("transactionDate", "30-NOV-201"); //#TRANSACTION_DATE
    addText("transactionId", "TR025552"); //#TRANSACTION_ID
    addText("village", "SUJAPUR"); //#VILLAGE
    addText("union", "VHAIRAB CHOWDHURIR HAT"); //#UNION
    addText("userId", "615001001 (NAIM ISLAM)"); //#USER_ID
    addText("userIdLabel", "ইউজার"); //#USER_ID_LABEL
    addText("withdrawAmount", "15000Tk. FIFTEEN THOUSAND ONLY. "); //#WITHDRAW_AMOUNT
    addText("monthlyDepositLabel", "মাসিক জমা"); //#MONTHLY_DEPOSIT_LABEL
    addText("montylyDeposit", "BDT 3,000.00"); //#MONTHLY_DEPOSIT
    addText("productTenorLabel", "সময়কাল"); //#PRODUCT_TENOR_LABEL
    addText("productTenor", "5 Years (60 Months)"); //#PRODUCT_TENOR
    addText("accountOpeningDateLabel", "একাউন্ট খোলার তারিখ"); //#ACCOUNT_OPENING_DATE_LABEL
    addText("startDate", "30-JAN-2016"); //#START_DATE
    addText("maturityDateLabel", "মেয়াদান্তের তারিখ"); //#MATURITY_DATE_LABEL
    addText("maturityDate", "30-JAN-2021"); //#MATURITY_DATE
    addText("maturityValueLabel", "মেয়াদান্তে টাকার পরিমান"); //#MATURITY_VALUE_LABEL
    addText("maturityValue", "BDT 2,26,047.00"); //#MATURITY_VALUE
    addText("accountNameLabel", "একাউন্ট নাম"); //#ACCOUNT_NAME_LABEL
    addText("linkAccountNumberLabel", "লিংক একাউন্ট নম্বর"); //#LINK_ACCOUNT_NUMBER_LABEL
    addText("fixedDepositTitle", "সিটি এজেন্ট ফিক্সড ডিপোজিট"); //#FIXED_DEPOSIT_TITLE
    addText("principalAmount", "আসল টাকার পরিমান"); //#PRINCIPAL_AMOUNT_LABEL   
    addText("maturityDateLabel2", "মেয়াদোত্তীর্ণের তারিখ"); //#MATURITY_DATE_LABEL_2
    addText("maturityDate", "30-JAN-2016"); //#MATURITY_DATE
    addText("profitRateLabel", "মুনাফার হার"); //#PROFIT_RATE_LABEL
    addText("profitRate", "8.85% (Yearly)"); //#PROFIT_RATE
    addText("maturityDate", "30-JAN-2021"); //#MATURITY_DATE
    addText("maturitAmountLabel", "মেয়াদোত্তীর্ণে টাকার পরিমান"); //#MATURITY_AMOUNT_LABEL
    addText("maturitAmount", "BDT 2,26,047.00"); //#MATURITY_AMOUNT
    addText("termDepositAccount", "TERM DEPOSIT"); //#TERM_DEPOSIT_ACCOUNT
    addText("cashDepositTitle", "নগদ জমা"); //#CASH_DEPOSIT_TITLE
    addText("transactionDateLabel", "ট্রানজাকশানের তারিখ"); //#TRANSACTION_DATE_LABEL   
    addText("transactionDate", "30-NOV-2015"); //#TRANSACTION_DATE
    addText("amountLabel", "টাকার পরিমান"); //#AMOUNT_LABEL
    addText("transactionCodeLabel", "ট্রানজাকশান কোড"); //#TRANSACTION_CODE_LABEL
    addText("transactionCode", "TR222369"); //#TRANSACTION_CODE
    addText("amountInWordsLabel", "টাকার পরিমান কথায়"); //#AMOUNT_IN_WORDS_LABEL
    addText("amountInWords", "THREE THOUSANDS ONLY"); //#AMOUNT_IN_WORDS
    addText("amount", "BDT 3,000.00"); //#AMOUNT
    addText("cashWithdrawTitle", "নগদ উত্তোলন"); //#CASH_WITHDRAW_TITLE
    addText("amountWithCharge", "BDT 3,000.00 + 7.5 (Charge)"); //#AMOUNT_WITH_CHARGE
    addText("amountInWordsWithCharge", "THREE THOUSANDS SEVEN TAKA FIFTY PAISA ONLY"); //#AMOUNT_IN_WORDS_WITH_CHARGE

    addText("fundTransferTitle", "ফান্ড ট্রান্সফার"); //#FUND_TRANSFER_TITLE
    addText("senderAccountNameLabel", "প্রেরকের একাউন্ট নাম"); //#SENDER_ACCOUNT_NAME_LABEL
    addText("senderAccountNoLabel", "প্রেরকের একাউন্ট নম্বর"); //#SENDER_ACCOUNT_NO_LABEL
    addText("receiverAccountNoLabel", "প্রাপকের একাউন্ট নম্বর"); //#RECEIVER_ACCOUNT_NO_LABEL
    addText("receiverAccountNo", "2001167500227"); //#RECEIVER_ACCOUNT_NO
    addText("receiverAccountNameLabel", "প্রাপকের একাউন্ট নাম"); //#RECEIVER_ACCOUNT_NAME_LABEL
    addText("receiverAccountName", "SUJON PATWARY"); //#RECEIVER_ACCOUNT_NAME
}

function addImage(elementId, path) {
    var id = document.getElementById(elementId);
    if (id != null) {
        id.src = path;
    }
}

function addClassText(elementId, innerHtml) {
    var elements = document.getElementsByClassName(elementId);

    if (elements != null) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = innerHtml;
        }
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