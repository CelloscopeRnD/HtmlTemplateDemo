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



var accountBalanceText = "একাউন্ট ব্যালান্স";
var accountOpeningDateText = "একাউন্ট খোলার তারিখ";
var balanceAmountText = "ব্যালান্সের পরিমান";
var cashDepositText = "নগদ জমা";
var cashWithdrawText = "নগদ উত্তোলন";
var cityAgentFixedDepositText = "সিটি এজেন্ট ফিক্সড ডিপোজিট";
var cityAgentSavingsAccountText = "সিটি এজেন্ট সেভিংস একাউন্ট";
var colonText = ":";
var depositAmountText = "জমার পরিমান";
var emptyText = "";
var fundTrasferText = "ফান্ড ট্রান্সফার";
var generalDPSAccountText = "সাধারন ডিপিএস একাউন্ট";
var inWordsText = "কথায়";
var linkAccountNumberText = "লিংক একাউন্ট নম্বর";
var maturityDateText = "মেয়াদান্তের তারিখ";
var printDateText = "প্রিন্টের তারিখ";
var transactionDateText = "ট্রানজাকশানের তারিখ";
var transactionCodeText = "ট্রানজাকশান কোড";
var withdrawAmountText = "উত্তোলনের পরিমান";
var productTenorText = "মেয়াদ";
var monthlyDepositText = "মাসিক জমা";
var maturityAmountText = "মেয়াদান্তে টাকার পরিমান";
var profitRateText = "মুনাফার হার";
var principalAmountText = "আসল টাকার পরিমান";

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


var accountNumberId = "accountNumber";  //ACCOUNT_NUMBER
var accountTypeId = "accountType";  //#ACCOUNT_TYPE
var linkAccountNumberColonId = "linkAccountNumberColon"; //#LINK_ACCOUNT_NUMBER_COLON
var linkAccountNumberLabelId = "linkAccountNumberLabel"; //#LINK_ACCOUNT_NUMBER_LABEL
var linkAccountNumberId = "linkAccountNumber"; //#LINK_ACCOUNT_NUMBER
var titleId = "title";  //#TITLE



var accountNumberValue = "2001158500126";
var balanceAmountValue = "BDT 80,550.00";
var balanceAmountInWordsValue = "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY";

var today = new Date();
var currentDate = getDateString(today);
var maturityDate = getDateString(new Date(today.getFullYear() + 5, today.getMonth(), today.getDate()));
var savingsAccountTypeValue = "Savings";
var dpsAccountTypeValue = "DPS";
var depositAmountInWordsValue = "THREE THOUSAND ONLY";
var depositAmountValue = "BDT 3,000.00";
var printDateValue = getTimestampString(new Date());
var savingsAccountTypeValue = "Savings";
var transactionCodeValue = "TR222369";
var linkAccountNumberValue = "2005246987126";
var withdrawAmountValue = "BDT 3,000.00 + 7.5 (Charge)";
var withdrawsAmountInWordsValue = "THREE THOUSANDS SEVEN TAKA FIFTY PAISA ONLY";
var productTenorValue = "5 Years";
var maturityAmountValue = "BDT 2,26,047.00";
var termDepositAccountTypeValue = "TERM DEPOSIT";
var profitRateValue = "8.85% (Yearly)";
var principalAmountValue = "BDT 1,00,000.00";



function replaceToken(receipt) {
    addImage("agent_banking_logo", "images/agent_bangking_logo.png");
    addImage("logo", "images/logo.png");

    addText("accountNoLabel", "একাউন্ট নম্বর"); //#ACCOUNT_NO_LABEL
    addText("accountTypeLabel", "একাউন্টের ধরন"); //#ACCOUNT_TYPE_LABEL
    addClassText("addressLabel", "ঠিকানা"); //#ADDRESS_LABEL
    addText("accountNameLabel", "একাউন্ট নাম"); //#ACCOUNT_NAME_LABEL

    addText("agentNameLabel", "এজেন্টের নাম"); //#AGENT_NAME_LABEL
    addText("amountInWordsLabel", "টাকার পরিমান কথায়"); //#AMOUNT_IN_WORDS_LABEL
    addText("amountLabel", "টাকার পরিমান"); //#AMOUNT_LABEL

    addText("customerIdLabel", "কাষ্টমার আইডি"); //#CUSTOMER_ID_LABEL,
    addText("mobileNoLabel", "মোবাইল নং"); //#MOBILE_NO_LABEL
    addText("maturitAmountLabel", "মেয়াদোত্তীর্ণে টাকার পরিমান"); //#MATURITY_AMOUNT_LABEL

    
    addText("maturityDateLabel2", "মেয়াদোত্তীর্ণের তারিখ"); //#MATURITY_DATE_LABEL_2

     


    
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


    addText("agentName", "BADRUL ALOM"); //#AGENT_NAME
    addText("amount", "BDT 3,000.00"); //#AMOUNT
    addText("amountInWords", "THREE THOUSANDS ONLY"); //#AMOUNT_IN_WORDS
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
   

    
    addText("receiverAccountNo", "2001167500227"); //#RECEIVER_ACCOUNT_NO
    addText("receiverAccountName", "SUJON PATWARY"); //#RECEIVER_ACCOUNT_NAME
    addText("startDate", "30-JAN-2016"); //#START_DATE

    addText("transactionDate", "30-NOV-2015"); //#TRANSACTION_DATE
   
    addText("union", "VHAIRAB CHOWDHURIR HAT"); //#UNION
    addText("userId", "615001001 (NAIM ISLAM)"); //#USER_ID
    addText("village", "SUJAPUR"); //#VILLAGE
    addText("withdrawAmount", "15000Tk. FIFTEEN THOUSAND ONLY. "); //#WITHDRAW_AMOUNT

    switch (receipt) {
        case receipts.ACCOUNT_BALANCE:
            setAccountBalance();
            break;
        case receipts.CASH_DEPOSIT:
            setCashDeposit();
            break;
        case receipts.CASH_WITHDRAW:
            setCashWithdraw();
            break;
        case receipts.DPS_ACCOUNT:
            setDPSAccount();
            break;
        case receipts.FIXED_DEPOSIT:
            setFixedDeposit();
            break;
        case receipts.FUND_TRANSFER:
            setFundTrasfer();
            break;
        case receipts.SAVINGS_ACCOUNT:
            setSavingsAccount();
            break;
        default:
            break;
    }
}

function setAccountBalance() {
    addText(titleId, accountBalanceText);

    addText(accountNumberId, accountNumberValue);
    addText(accountTypeId, savingsAccountTypeValue);
    addText(linkAccountNumberColonId, emptyText);
    addText(linkAccountNumberLabelId, emptyText);
    addText(linkAccountNumberId, emptyText);

    addText(t01LabelId, transactionDateText);
    addText(t01ValueId, currentDate);

    addText(t10LabelId, balanceAmountText);
    addText(t10ValueId, balanceAmountValue);
    addText(t11LabelId, transactionCodeText);
    addText(t11ValueId, transactionCodeValue);

    addText(t20LabelId, inWordsText);
    addText(t20ValueId, balanceAmountInWordsValue);
    addText(t21LabelId, printDateText);
    addText(t21ValueId, printDateValue);

    addText(t30LabelId, emptyText);
    addText(t30ColonId, emptyText);
    addText(t30ValueId, emptyText);
    addText(t31LabelId, emptyText);
    addText(t31ColonId, emptyText);
    addText(t31ValueId, emptyText);
}
function setCashDeposit() {
    addText("title", cashDepositText); //#TITLE

    addText(accountNumberId, accountNumberValue);
    addText(accountTypeId, savingsAccountTypeValue);
    addText(linkAccountNumberColonId, emptyText);
    addText(linkAccountNumberLabelId, emptyText);
    addText(linkAccountNumberId, emptyText);

    addText(t01LabelId, transactionDateText);
    addText(t01ValueId, currentDate);

    addText(t10LabelId, depositAmountText);
    addText(t10ValueId, depositAmountValue);
    addText(t11LabelId, transactionCodeText);
    addText(t11ValueId, transactionCodeValue);

    addText(t20LabelId, inWordsText);
    addText(t20ValueId, depositAmountInWordsValue);
    addText(t21LabelId, printDateText);
    addText(t21ValueId, printDateValue);

    addText(t30LabelId, emptyText);
    addText(t30ColonId, emptyText);
    addText(t30ValueId, emptyText);
    addText(t31LabelId, emptyText);
    addText(t31ColonId, emptyText);
    addText(t31ValueId, emptyText);
}
function setCashWithdraw() {
    addText("title", cashWithdrawText); //#TITLE

    addText(accountNumberId, accountNumberValue);
    addText(accountTypeId, savingsAccountTypeValue);
    addText(linkAccountNumberColonId, emptyText);
    addText(linkAccountNumberLabelId, emptyText);
    addText(linkAccountNumberId, emptyText);

    addText(t01LabelId, transactionDateText);
    addText(t01ValueId, currentDate);

    addText(t10LabelId, withdrawAmountText);
    addText(t10ValueId, withdrawAmountValue);
    addText(t11LabelId, transactionCodeText);
    addText(t11ValueId, transactionCodeValue);

    addText(t20LabelId, inWordsText);
    addText(t20ValueId, withdrawsAmountInWordsValue);
    addText(t21LabelId, printDateText);
    addText(t21ValueId, printDateValue);

    addText(t30LabelId, emptyText);
    addText(t30ColonId, emptyText);
    addText(t30ValueId, emptyText);
    addText(t31LabelId, emptyText);
    addText(t31ColonId, emptyText);
    addText(t31ValueId, emptyText);
}
function setDPSAccount() {
    addText("title", generalDPSAccountText); //#TITLE

    addText(accountNumberId, emptyText);
    addText(accountTypeId, dpsAccountTypeValue);
    addText(linkAccountNumberLabelId, linkAccountNumberText);
    addText(linkAccountNumberColonId, colonText);
    addText(linkAccountNumberId, linkAccountNumberValue);

    addText(t01LabelId, productTenorText);
    addText(t01ValueId, productTenorValue);

    addText(t10LabelId, accountOpeningDateText);
    addText(t10ValueId, currentDate);
    addText(t11LabelId, maturityDateText);
    addText(t11ValueId, maturityDate);

    addText(t20LabelId, monthlyDepositText);
    addText(t20ValueId, depositAmountValue);
    addText(t21LabelId, printDateText);
    addText(t21ValueId, printDateValue);

    addText(t30LabelId, maturityAmountText);
    addText(t30ColonId, colonText);
    addText(t30ValueId, maturityAmountValue);
    addText(t31LabelId, emptyText);
    addText(t31ColonId, emptyText);
    addText(t31ValueId, emptyText);
}
function setFixedDeposit() {
    addText("title", cityAgentFixedDepositText); //#TITLE

    addText(accountNumberId, emptyText);
    addText(accountTypeId, termDepositAccountTypeValue);
    addText(linkAccountNumberLabelId, linkAccountNumberText);
    addText(linkAccountNumberColonId, colonText);
    addText(linkAccountNumberId, linkAccountNumberValue);

    addText(t01LabelId, productTenorText);
    addText(t01ValueId, productTenorValue);

    addText(t10LabelId, accountOpeningDateText);
    addText(t10ValueId, currentDate);
    addText(t11LabelId, maturityDateText);
    addText(t11ValueId, maturityDate);

    addText(t20LabelId, profitRateText);
    addText(t20ValueId, profitRateValue);
    addText(t21LabelId, maturityAmountText);
    addText(t21ValueId, maturityAmountValue);

    addText(t30LabelId, principalAmountText);
    addText(t30ColonId, colonText);
    addText(t30ValueId, principalAmountValue);
    addText(t31LabelId, printDateText);
    addText(t31ColonId, colonText);
    addText(t31ValueId, printDateValue);
}
function setFundTrasfer() {
    addText("title", fundTrasferText); //#TITLE
}
function setSavingsAccount() {
    addText("title", fundTrasferText); //#TITLE
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