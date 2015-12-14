window.onload = function () {

    var url = window.location.search;
    url = url.replace("?", ''); // remove the ?


    addStyleSheet('style_sheet/my_style.css');
    replaceToken(parseInt(url));
}

var receipts = {
    ACCOUNT_BALANCE: 1,
    CASH_DEPOSIT: 2,
    CASH_WITHDRAW: 3,
    DPS_ACCOUNT: 4,
    FIXED_DEPOSIT: 5,
    FUND_TRANSFER: 6,
    SAVINGS_ACCOUNT: 7
};

function replaceToken(receipt) {
    addImage("agent_banking_logo", "images/agent_bangking_logo.png");
    addImage("logo", "images/logo.png");

    addText("accountNoLabel", "একাউন্ট নম্বর"); //#ACCOUNT_NO_LABEL
    addText("accountTypeLabel", "একাউন্টের ধরন"); //#ACCOUNT_TYPE_LABEL
    addClassText("addressLabel", "ঠিকানা"); //#ADDRESS_LABEL
    addText("accountNameLabel", "একাউন্ট নাম"); //#ACCOUNT_NAME_LABEL
    addText("accountOpeningDateLabel", "একাউন্ট খোলার তারিখ"); //#ACCOUNT_OPENING_DATE_LABEL
    addText("agentNameLabel", "এজেন্টের নাম"); //#AGENT_NAME_LABEL
    addText("amountInWordsLabel", "টাকার পরিমান কথায়"); //#AMOUNT_IN_WORDS_LABEL
    addText("amountLabel", "টাকার পরিমান"); //#AMOUNT_LABEL


    addText("customerIdLabel", "কাষ্টমার আইডি"); //#CUSTOMER_ID_LABEL,
    addText("mobileNoLabel", "মোবাইল নং"); //#MOBILE_NO_LABEL
    addText("maturitAmountLabel", "মেয়াদোত্তীর্ণে টাকার পরিমান"); //#MATURITY_AMOUNT_LABEL
    addText("maturityDateLabel", "মেয়াদান্তের তারিখ"); //#MATURITY_DATE_LABEL
    addText("maturityValueLabel", "মেয়াদান্তে টাকার পরিমান"); //#MATURITY_VALUE_LABEL
    addText("maturityDateLabel2", "মেয়াদোত্তীর্ণের তারিখ"); //#MATURITY_DATE_LABEL_2
    addText("monthlyDepositLabel", "মাসিক জমা"); //#MONTHLY_DEPOSIT_LABEL
    addText("principalAmount", "আসল টাকার পরিমান"); //#PRINCIPAL_AMOUNT_LABEL   

    addText("productTenorLabel", "সময়কাল"); //#PRODUCT_TENOR_LABEL
    addText("profitRateLabel", "মুনাফার হার"); //#PROFIT_RATE_LABEL
    addText("receiverAccountNameLabel", "প্রাপকের একাউন্ট নাম"); //#RECEIVER_ACCOUNT_NAME_LABEL
    addText("receiverAccountNoLabel", "প্রাপকের একাউন্ট নম্বর"); //#RECEIVER_ACCOUNT_NO_LABEL
    addText("senderAccountNameLabel", "প্রেরকের একাউন্ট নাম"); //#SENDER_ACCOUNT_NAME_LABEL
    addText("senderAccountNoLabel", "প্রেরকের একাউন্ট নম্বর"); //#SENDER_ACCOUNT_NO_LABEL


    addText("userIdLabel", "ইউজার"); //#USER_ID_LABEL

    addImage("customerPhoto", "images/photo.png");
    addImage("qr", "images/qr.png");





    // Value will be all caps
    // BDT will be used for currency
    // Comma will be used for amount 
    // date format will be 30-NOV-2015
    addText("accountName", "MD Arif Gazi"); //#ACCOUNT_NAME
    addText("accountNo", "2001158500126"); //#ACCOUNT_NO, Account Number will be 13 characters
    addText("accountOpeningDate", "30-NOV-2015"); //#ACCOUNT_OPENING_DATE
    addText("agentName", "BADRUL ALOM"); //#AGENT_NAME
    addText("amount", "BDT 3,000.00"); //#AMOUNT
    addText("amountInWords", "THREE THOUSANDS ONLY"); //#AMOUNT_IN_WORDS
    addText("amountInWordsWithCharge", "THREE THOUSANDS SEVEN TAKA FIFTY PAISA ONLY"); //#AMOUNT_IN_WORDS_WITH_CHARGE
    addText("amountWithCharge", "BDT 3,000.00 + 7.5 (Charge)"); //#AMOUNT_WITH_CHARGE


    addText("boothAddress", "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI"); //#BOOTH_ADDRESS
    addText("cashDeposit", "CASH DEPOSIT"); //#CASH_DEPOSIT    
    addText("cashWithdraw", "CASH WITHDRAW"); //#CASH_WITHDRAW
    addText("currentAccountType", "CURRENT ACCCOUNT"); //#CURRENT_ACCOUNT_TYPE
    addText("customerAddress", "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA"); //  
    addText("customerId", "CB1158500"); //#CUSTOMER_ID, ID will be 7 characters 
    addText("customerName", "MD Arif Gazi"); //#CUSTOMER_NAME
    addText("depositAmount", "1000Tk. ONE THOUSAND ONLY. "); //#DEPOSIT_AMOUNT

    addText("dpsAccount", "DPS"); //#DPS_ACCOUNT_TITLE
    addText("duration", "১২ YEARS"); //#DURATION
    addText("endDate", "30-NOV-2027"); //#END_DATE
    addText("expiryAmount", "32,000 টাকা"); //#EXPIRY_AMOUNT
    addText("expireDate", "30-NOV-2027"); //#EXPAIRE_DATE
    addText("initialDeposit", "BDT 3,000.00"); //#INITIAL_DEPOSIT, BDT will be used for currency and comma will be used for currency

    addText("mobileNo", "01617877595"); //#MOBILE_NO
    addText("monthlyDeposit", "1000  টাকা"); //#MONTHLY_DEPOSIT
    addText("montylyDeposit", "BDT 3,000.00"); //#MONTHLY_DEPOSIT
    addText("outletName", "Vairab Chowdhurir Hath, Sonagazi"); //#OUTLATE_NAME

    addText("requestId", "736373736"); //#REQUEST_ID

    addText("transactionDate", "30-NOV-201"); //#TRANSACTION_DATE
    addText("transactionId", "TR025552"); //#TRANSACTION_ID
    addText("maturityDate", "30-JAN-2021"); //#MATURITY_DATE
    addText("maturityAmount", "BDT 2,26,047.00"); //#MATURITY_AMOUNT
    addText("maturityValue", "BDT 2,26,047.00"); //#MATURITY_VALUE
    addText("productTenor", "5 Years (60 Months)"); //#PRODUCT_TENOR
    addText("profitRate", "8.85% (Yearly)"); //#PROFIT_RATE
    addText("receiverAccountNo", "2001167500227"); //#RECEIVER_ACCOUNT_NO
    addText("receiverAccountName", "SUJON PATWARY"); //#RECEIVER_ACCOUNT_NAME
    addText("startDate", "30-JAN-2016"); //#START_DATE




    addText("transactionDate", "30-NOV-2015"); //#TRANSACTION_DATE

    addText("termDepositAccount", "TERM DEPOSIT"); //#TERM_DEPOSIT_ACCOUNT
    addText("union", "VHAIRAB CHOWDHURIR HAT"); //#UNION
    addText("userId", "615001001 (NAIM ISLAM)"); //#USER_ID
    addText("village", "SUJAPUR"); //#VILLAGE
    addText("withdrawAmount", "15000Tk. FIFTEEN THOUSAND ONLY. "); //#WITHDRAW_AMOUNT


    var accountBalanceText = "একাউন্ট ব্যালান্স";
    var balanceAmountInWordsText = "ব্যালান্সের পরিমান কথায়";
    var cashDepositText = "নগদ জমা";
    var cashWithdrawText = "নগদ উত্তোলন";
    var cityAgentFixedDepositText = "সিটি এজেন্ট ফিক্সড ডিপোজিট";
    var cityAgentSavingsAccountText = "সিটি এজেন্ট সেভিংস একাউন্ট";
    var colonText = ":";
    var emptyText = "";
    var fundTrasferText = "ফান্ড ট্রান্সফার";
    var generalDPSAccountText = "সাধারন ডিপিএস একাউন্ট";
    var linkAccountNumberText = "লিংক একাউন্ট নম্বর";
    var printDateText = "প্রিন্টের তারিখ";
    var transactionDateText = "ট্রানজাকশানের তারিখ";
    var transactionCodeText = "ট্রানজাকশান কোড";
    var balanceAmountText = "ব্যালান্সের পরিমান";

    var t01LabelId = "t01Label"; //#T_01_LABEL
    var t01ValueId = "t01Value"; //#T_01_VALUE

    var t10LabelId = "t10Label"; //#T_10_LABEL
    var t10ValueId = "t10Value"; //#T_10_VALUE
    var t11LabelId = "t11Label"; //#T_11_LABEL
    var t11ValueId = "t11Value"; //#T_11_VALUE

    var t20LabelId = "t20Label"; //#T_20_LABEL
    var t20ValueId = "t20Value"; //#T_20_VALUE
    var t21LabelId = "t21Label"; //#T_21_LABEL
    var t21ValueId = "t21Value"; //#T_21_VALUE

    var t30LabelId = "t30Label"; //#T_30_LABEL
    var t30ColonId = "t30Colon"; //#COLON
    var t30ValueId = "t30Value"; //#T_30_VALUE
    var t31LabelId = "t31Label"; //#T_31_LABEL
    var t31ColonId = "t31Colon"; //#COLON
    var t31ValueId = "t31Value"; //#T_31_VALUE

    var accountTypeId = "accountType";  //#ACCOUNT_TYPE
    var linkAccountNumberColonId = "linkAccountNumberColon"; //#LINK_ACCOUNT_NUMBER_COLON
    var linkAccountNumberLabelId = "linkAccountNumberLabel"; //#LINK_ACCOUNT_NUMBER_LABEL
    var linkAccountNumberId = "linkAccountNumber"; //#LINK_ACCOUNT_NUMBER
    var titleId = "title";  //#TITLE

    var currentDate = getDateString(new Date());
    var savingsAccountTypeValue = "Savings";
    var balanceAmountInWordsValue = "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY";
    var balanceAmountValue = "BDT 80,550.00";
    //var printDateValue = "30-NOV-2015 11:15:15 AM";
    var printDateValue = getTimestampString(new Date());
    var transactionCodeValue = "TR222369";
    switch (receipt) {
        case receipts.ACCOUNT_BALANCE:
            addText(t01LabelId, transactionDateText);
            addText(t01ValueId, currentDate);

            addText(t10LabelId, balanceAmountText);
            addText(t10ValueId, balanceAmountValue);
            addText(t11LabelId, transactionCodeText);
            addText(t11ValueId, transactionCodeValue);

            addText(t20LabelId, balanceAmountInWordsText);
            addText(t20ValueId, balanceAmountInWordsValue);
            addText(t21LabelId, printDateText);
            addText(t21ValueId, printDateValue);

            addText(t30LabelId, emptyText);
            addText(t30ColonId, emptyText);
            addText(t30ValueId, emptyText);
            addText(t31LabelId, emptyText);
            addText(t31ColonId, emptyText);
            addText(t31ValueId, emptyText);

            addText(accountTypeId, savingsAccountTypeValue);
            addText(linkAccountNumberColonId, emptyText);
            addText(linkAccountNumberLabelId, emptyText);
            addText(linkAccountNumberId, emptyText);
            addText(titleId, accountBalanceText);
            break;
        case receipts.CASH_DEPOSIT:
            addText(linkAccountNumberColonId, colonText); //#LINK_ACCOUNT_NUMBER_COLON
            addText(linkAccountNumberLabelId, linkAccountNumberText); //#LINK_ACCOUNT_NUMBER_LABEL
            addText("linkAccountNumber", "2001158500126"); //#LINK_ACCOUNT_NUMBER
            addText("title", cashDepositText); //#TITLE
            break;
        case receipts.CASH_WITHDRAW:
            addText(linkAccountNumberColonId, colonText); //#LINK_ACCOUNT_NUMBER_COLON
            addText(linkAccountNumberLabelId, linkAccountNumberText); //#LINK_ACCOUNT_NUMBER_LABEL
            addText("linkAccountNumber", "2001158500126"); //#LINK_ACCOUNT_NUMBER
            addText("title", cashWithdrawText); //#TITLE
            break;
        case receipts.DPS_ACCOUNT:
            addText(linkAccountNumberColon, colonText); //#LINK_ACCOUNT_NUMBER_COLON
            addText(linkAccountNumberLabelId, linkAccountNumberText); //#LINK_ACCOUNT_NUMBER_LABEL
            addText("linkAccountNumber", "2001158500126"); //#LINK_ACCOUNT_NUMBER
            addText("title", generalDPSAccountText); //#TITLE
            break;
        case receipts.FIXED_DEPOSIT:
            addText(linkAccountNumberColon, colonText); //#LINK_ACCOUNT_NUMBER_COLON
            addText(linkAccountNumberLabelId, linkAccountNumberText); //#LINK_ACCOUNT_NUMBER_LABEL
            addText("linkAccountNumber", "2001158500126"); //#LINK_ACCOUNT_NUMBER
            addText("title", cityAgentFixedDepositText); //#TITLE
            break;
        case receipts.FUND_TRANSFER:
            addText(linkAccountNumberColon, colonText); //#LINK_ACCOUNT_NUMBER_COLON
            addText(linkAccountNumberLabelId, linkAccountNumberText); //#LINK_ACCOUNT_NUMBER_LABEL
            addText("linkAccountNumber", "2001158500126"); //#LINK_ACCOUNT_NUMBER
            addText("title", fundTrasferText); //#TITLE
            break;
        case receipts.SAVINGS_ACCOUNT:
            addText(linkAccountNumberColon, colonText); //#LINK_ACCOUNT_NUMBER_COLON
            addText(linkAccountNumberLabelId, linkAccountNumberText); //#LINK_ACCOUNT_NUMBER_LABEL
            addText("linkAccountNumber", "2001158500126"); //#LINK_ACCOUNT_NUMBER
            addText("title", fundTrasferText); //#TITLE
            break;
        default:
            break;
    }
}

function getDateString(date) {

    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth().toLocaleString()).toString(); // getMonth() is zero-based
    var dd = date.getDate().toString();
    return ((dd[1] ? dd : "0" + dd[0]) + '-' + monthNames[mm] + '-' + yyyy); // padding
};

function getTimestampString(date) {

    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth().toLocaleString()).toString(); // getMonth() is zero-based
    var dd = date.getDate().toString();
    var hh = date.getHours().toString();
    var min = date.getMinutes().toString();
    var sec = date.getSeconds().toString();
    return ((dd[1] ? dd : "0" + dd[0]) + '-' + monthNames[mm] + '-' + yyyy + ' ' + hh + ':' + min + ':' + sec + ' ' + ((hh >= 12) ? "PM" : "AM"));
};

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