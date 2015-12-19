window.onload = function () {
    var url = window.location.search;
    url = url.replace("?", ''); // remove the ?

    addStyleSheet('style_sheet/style.css');
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

var accountNoText = "হিসাব নম্বর";
var accountNameText = "হিসাব নাম";
var accountBalanceText = "ব্যালান্স";
var accountOpeningDateText = "হিসাব খোলার তারিখ";
var accountTypeText = "হিসাবের ধরন";
var addressLine1Text = "এজেন্ট ব্যাংকিং ডিভিশন";
var addressLine2Text = "সিটি ব্যাংক লিঃ";
var addressLine3Text = "সিটি ব্যাংক  সেন্টার ১৩৬";
var addressLine4Text = "গুলশান এভিনিউ, ঢাকা-১২১২";
var addressText = "ঠিকানা";
var agentNameText = "এজেন্টের নাম";
var balanceAmountText = "ব্যালান্সের পরিমান";
var balanceDateText = "ব্যালান্সের তারিখ";
var chargeText = "চার্জ";
var cashDepositText = "নগদ জমা";
var cashWithdrawText = "নগদ উত্তোলন";
var cityAgentFixedDepositText = "সিটি এজেন্ট ফিক্সড ডিপোজিট";
var cityAgentSavingsAccountText = "সিটি এজেন্ট সেভিংস হিসাব";
var colonText = ":";
var customerIdText = "গ্রাহক আইডি";
var customerNameText = "গ্রাহকের নাম";
var depositAmountText = "জমার পরিমান";
var depositDateText = "জমার তারিখ";
var emptyText = "";
var fundTransferDateText = "ফান্ড ট্রান্সফারের তারিখ"
var fundTrasferText = "ফান্ড ট্রান্সফার";
var generalDPSAccountText = "সাধারন ডিপিএস হিসাব";
var initialDepositText = "প্রারম্ভিক জমার পরিমান";
var inWordsText = "কথায়";
var linkAccountNumberText = "লিংক হিসাব নম্বর";
var maturityAmountText = "মেয়াদান্তে টাকার পরিমান";
var maturityDateText = "মেয়াদান্তের তারিখ";
var mobileNoText = "মোবাইল নং";
var monthlyDepositText = "মাসিক জমা";
var profitRateText = "মুনাফার হার";
var printDateText = "প্রিন্টের তারিখ";
var principalAmountText = "আসল টাকার পরিমান";
var productTenorText = "মেয়াদ";
var receiverAccountNoText = "প্রাপকের হিসাব নম্বর";
var receiverAccountNameText = "প্রাপকের হিসাব নাম";
var senderAccountNoText = "প্রেরকের হিসাব নম্বর";
var sendrAccountNameText = "প্রেরকের হিসাব নাম";
var transferAmountText = "ট্রান্সফারের পরিমান";
var transactionIdText = "লেনদেন আইডি";
var userText = "ইউজার";
var withdrawAmountText = "উত্তোলনের পরিমান";
var withdrawDateText = "উত্তোলনের তারিখ";

var accountNoLabelId = "accountNoLabel";
var accountNumberId = "accountNumber";  //ACCOUNT_NUMBER
var accountTypeId = "accountType";  //#ACCOUNT_TYPE
var customerAddressId = "customerAddress";
var linkAccountNumberColonId = "linkAccountNumberColon"; //#LINK_ACCOUNT_NUMBER_COLON
var linkAccountNumberLabelId = "linkAccountNumberLabel"; //#LINK_ACCOUNT_NUMBER_LABEL
var linkAccountNumberId = "linkAccountNumber"; //#LINK_ACCOUNT_NUMBER
var titleId = "title";  //#TITLE

var t00LabelId = "t00Label"; //#T_00_LABEL
var t00ValueId = "t00Value"; //#T_00_VALUE
var t01LabelId = "t01Label"; //#T_01_LABEL
var t01ValueId = "t01Value"; //#T_01_VALUE

var t10LabelId = "t10Label"; //#T_10_LABEL
var t10ValueId = "t10Value"; //#T_10_VALUE
var t11LabelId = "t11Label"; //#T_11_LABEL
var t11ValueId = "t11Value"; //#T_11_VALUE

var t20LabelId = "t20Label"; //#T_20_LABEL
var t20ColonId = "t20Colon"; //#COLON
var t20ValueId = "t20Value"; //#T_20_VALUE
var t21LabelId = "t21Label"; //#T_21_LABEL
var t21ColonId = "t21Colon"; //#COLON
var t21ValueId = "t21Value"; //#T_21_VALUE

var t30LabelId = "t30Label"; //#T_30_LABEL
var t30ColonId = "t30Colon"; //#COLON
var t30ValueId = "t30Value"; //#T_30_VALUE
var t31LabelId = "t31Label"; //#T_31_LABEL
var t31ColonId = "t31Colon"; //#COLON
var t31ValueId = "t31Value"; //#T_31_VALUE


var accountNameValue = "MD Arif Gazi";

var accountNumberValue = "2001158500126";
var balanceAmountValue = "BDT 80,550.00";
var balanceAmountInWordsValue = "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY";

var chargeVaue = "BDT 7.50";
var today = new Date();
var currentDate = getDateString(today);
var customerAddressValue = "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA";
var depositAmountInWordsValue = "THREE THOUSAND ONLY";
var depositAmountValue = "BDT 3,000.00";
var dpsAccountTypeValue = "DPS";
var linkAccountNumberValue = "2005246987526";
var maturityAmountValue = "BDT 2,26,047.00";
var maturityDate = getDateString(new Date(today.getFullYear() + 5, today.getMonth(), today.getDate()));
var principalAmountValue = "BDT 1,00,000.00";
var printDateValue = getTimestampString(new Date());
var productTenorValue = "5 Years";
var profitRateValue = "8.85% (Yearly)";
var receiverAccountNameValue = "SUJON PATWARY";
var termDepositAccountTypeValue = "TERM DEPOSIT";
var savingsAccountTypeValue = "Savings";
var savingsAccountTypeValue = "Savings";
var transactionCodeValue = "TR222369";
var withdrawAmountValue = "BDT 3,000.00 + 7.5 (Charge)";
var withdrawsAmountInWordsValue = "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY";

function replaceToken(receipt) {
    addImage("agent_banking_logo", "images/agent_bangking_logo.png");
    addImage("logo", "images/logo.png");
    addText("addressLine1Label", addressLine1Text); //#ADDRESS_LINE_1
    addText("addressLine2Label", addressLine2Text); //#ADDRESS_LINE_2
    addText("addressLine3Label", addressLine3Text); //#ADDRESS_LINE_3
    addText("addressLine4Label", addressLine4Text); //#ADDRESS_LINE_4

    addImage("qr", "images/qr.png");
    addImage("customerPhoto", "images/photo.png");

    addText("agentNameLabel", agentNameText); //#AGENT_NAME_LABEL
    addText("agentName", "BADRUL ALOM"); //#AGENT_NAME
    addText("userIdLabel", userText); //#USER_ID_LABEL
    addText("userId", "615001001 (NAIM ISLAM)"); //#USER_ID
    addClassText("addressLabel", addressText); //#ADDRESS_LABEL
    addText("boothAddress", "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI"); //#BOOTH_ADDRESS
    addText("customerIdLabel", customerIdText); //#CUSTOMER_ID_LABEL,
    addText("customerId", "CB1158500"); //#CUSTOMER_ID, ID will be 7 characters 
    addText("accountTypeLabel", accountTypeText); //#ACCOUNT_TYPE_LABEL
    addText("customerNameLabel", customerNameText); //#CUSTOMER_NAME_LABEL
    addText("customerName", "MD Arif Gazi"); //#CUSTOMER_NAME
    addText("mobileNoLabel", mobileNoText); //#MOBILE_NO_LABEL
    addText("mobileNo", "01617877595"); //#MOBILE_NO
      

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

    addText(accountNoLabelId, accountNoText);
    addText(accountNumberId, accountNumberValue);
    addText(accountTypeId, savingsAccountTypeValue);
    addText(linkAccountNumberColonId, emptyText);
    addText(linkAccountNumberLabelId, emptyText);
    addText(linkAccountNumberId, emptyText);

    addText(customerAddressId, customerAddressValue);

    addText(t00LabelId, accountNameText);
    addText(t00ValueId, accountNameValue);
    addText(t01LabelId, balanceDateText);
    addText(t01ValueId, currentDate);

    addText(t10LabelId, balanceAmountText);
    addText(t10ValueId, balanceAmountValue);
    addText(t11LabelId, transactionIdText);
    addText(t11ValueId, transactionCodeValue);

    addText(t20LabelId, inWordsText);
    addText(t20ColonId, colonText);
    addText(t20ValueId, balanceAmountInWordsValue);
    addText(t21LabelId, printDateText);
    addText(t21ColonId, colonText);
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

    addText(accountNoLabelId, accountNoText);
    addText(accountNumberId, accountNumberValue);
    addText(accountTypeId, savingsAccountTypeValue);
    addText(linkAccountNumberColonId, emptyText);
    addText(linkAccountNumberLabelId, emptyText);
    addText(linkAccountNumberId, emptyText);

    addText(customerAddressId, customerAddressValue);

    addText(t00LabelId, accountNameText);
    addText(t00ValueId, accountNameValue);
    addText(t01LabelId, depositDateText);
    addText(t01ValueId, currentDate);

    addText(t10LabelId, depositAmountText);
    addText(t10ValueId, depositAmountValue);
    addText(t11LabelId, transactionIdText);
    addText(t11ValueId, transactionCodeValue);

    addText(t20LabelId, inWordsText);
    addText(t20ColonId, colonText);
    addText(t20ValueId, depositAmountInWordsValue);
    addText(t21LabelId, printDateText);
    addText(t21ColonId, colonText);
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

    addText(accountNoLabelId, accountNoText);
    addText(accountNumberId, accountNumberValue);
    addText(accountTypeId, savingsAccountTypeValue);
    addText(linkAccountNumberColonId, emptyText);
    addText(linkAccountNumberLabelId, emptyText);
    addText(linkAccountNumberId, emptyText);

    addText(customerAddressId, customerAddressValue);

    addText(t00LabelId, accountNameText);
    addText(t00ValueId, accountNameValue);
    addText(t01LabelId, withdrawDateText);
    addText(t01ValueId, currentDate);

    addText(t10LabelId, withdrawAmountText);
    addText(t10ValueId, depositAmountValue);
    addText(t11LabelId, transactionIdText);
    addText(t11ValueId, transactionCodeValue);

    addText(t20LabelId, inWordsText);
    addText(t20ColonId, colonText);
    addText(t20ValueId, depositAmountInWordsValue);
    addText(t21LabelId, printDateText);
    addText(t21ColonId, colonText);
    addText(t21ValueId, printDateValue);

    addText(t30LabelId, chargeText);
    addText(t30ColonId, colonText);
    addText(t30ValueId, chargeVaue);
    addText(t31LabelId, emptyText);
    addText(t31ColonId, emptyText);
    addText(t31ValueId, emptyText);
}
function setDPSAccount() {
    addText("title", generalDPSAccountText); //#TITLE

    addText(accountNoLabelId, accountNoText);
    addText(accountNumberId, emptyText);
    addText(accountTypeId, dpsAccountTypeValue);
    addText(linkAccountNumberLabelId, linkAccountNumberText);
    addText(linkAccountNumberColonId, colonText);
    addText(linkAccountNumberId, linkAccountNumberValue);

    addText(customerAddressId, customerAddressValue);

    addText(t00LabelId, accountNameText);
    addText(t00ValueId, accountNameValue);
    addText(t01LabelId, productTenorText);
    addText(t01ValueId, productTenorValue);

    addText(t10LabelId, accountOpeningDateText);
    addText(t10ValueId, currentDate);
    addText(t11LabelId, maturityDateText);
    addText(t11ValueId, maturityDate);

    addText(t20LabelId, monthlyDepositText);
    addText(t20ColonId, colonText);
    addText(t20ValueId, depositAmountValue);
    addText(t21LabelId, printDateText);
    addText(t21ColonId, colonText);
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

    addText(accountNoLabelId, accountNoText);
    addText(accountNumberId, emptyText);
    addText(accountTypeId, termDepositAccountTypeValue);
    addText(linkAccountNumberLabelId, linkAccountNumberText);
    addText(linkAccountNumberColonId, colonText);
    addText(linkAccountNumberId, linkAccountNumberValue);

    addText(customerAddressId, customerAddressValue);

    addText(t00LabelId, accountNameText);
    addText(t00ValueId, accountNameValue);
    addText(t01LabelId, productTenorText);
    addText(t01ValueId, productTenorValue);

    addText(t10LabelId, accountOpeningDateText);
    addText(t10ValueId, currentDate);
    addText(t11LabelId, maturityDateText);
    addText(t11ValueId, maturityDate);

    addText(t20LabelId, profitRateText);
    addText(t20ColonId, colonText);
    addText(t20ValueId, profitRateValue);
    addText(t21LabelId, maturityAmountText);
    addText(t21ColonId, colonText);
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

    addText(accountNoLabelId, senderAccountNoText);
    addText(accountNumberId, accountNumberValue);
    addText(accountNumberId, accountNumberValue);
    addText(accountTypeId, savingsAccountTypeValue);
    addText(linkAccountNumberLabelId, emptyText);
    addText(linkAccountNumberColonId, emptyText);
    addText(linkAccountNumberId, emptyText);

    addText(customerAddressId, customerAddressValue);

    addText(t00LabelId, sendrAccountNameText);
    addText(t00ValueId, accountNameValue);
    addText(t01LabelId, fundTransferDateText);
    addText(t01ValueId, currentDate);

    addText(t10LabelId, receiverAccountNameText);
    addText(t10ValueId, receiverAccountNameValue);
    addText(t11LabelId, receiverAccountNoText);
    addText(t11ValueId, linkAccountNumberValue);

    addText(t20LabelId, transferAmountText);
    addText(t20ColonId, colonText);
    addText(t20ValueId, depositAmountValue);
    addText(t21LabelId, transactionIdText);
    addText(t21ColonId, colonText);
    addText(t21ValueId, transactionCodeValue);

    addText(t30LabelId, inWordsText);
    addText(t30ColonId, colonText);
    addText(t30ValueId, depositAmountInWordsValue);
    addText(t31LabelId, printDateText);
    addText(t31ColonId, colonText);
    addText(t31ValueId, printDateValue);
}
function setSavingsAccount() {
    addText("title", cityAgentSavingsAccountText); //#TITLE

    addText(accountNoLabelId, accountNoText);
    addText(accountNumberId, accountNumberValue);
    addText(accountTypeId, savingsAccountTypeValue);
    addText(linkAccountNumberColonId, emptyText);
    addText(linkAccountNumberLabelId, emptyText);
    addText(linkAccountNumberId, emptyText);

    addText(customerAddressId, emptyText);

    addText(t00LabelId, accountNameText);
    addText(t00ValueId, accountNameValue);
    addText(t01LabelId, initialDepositText);
    addText(t01ValueId, depositAmountValue);

    addText(t10LabelId, accountOpeningDateText);
    addText(t10ValueId, currentDate);
    addText(t11LabelId, printDateText);
    addText(t11ValueId, printDateValue);

    addText(t20LabelId, emptyText);
    addText(t20ColonId, emptyText);
    addText(t20ValueId, emptyText);
    addText(t21LabelId, emptyText);
    addText(t21ColonId, emptyText);
    addText(t21ValueId, emptyText);

    addText(t30LabelId, emptyText);
    addText(t30ColonId, emptyText);
    addText(t30ValueId, emptyText);
    addText(t31LabelId, emptyText);
    addText(t31ColonId, emptyText);
    addText(t31ValueId, emptyText);
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