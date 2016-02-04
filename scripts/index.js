//var receipts = {
//    ACCOUNT_BALANCE: 1,
//    CASH_DEPOSIT: 2,
//    CASH_WITHDRAW: 3,
//    DPS_ACCOUNT: 4,
//    FIXED_DEPOSIT: 5,
//    FUND_TRANSFER: 6,
//    SAVINGS_ACCOUNT: 7,
//    ATM_DEBIT_CARD_REQUEST: 8,
//    ATM_DEBIT_CARD_DELIVERY: 9,
//    ATM_DEBIT_CARD_CANCEL: 10,
//    CHEQUE_BOOK_REQUISITION: 11,
//    CHEQUE_BOOK_DELIVERY: 12,
//    CHEQUE_STOP_PAYMENT_SINGLE: 13,
//    CHEQUE_STOP_PAYMENT_RANGE: 14,
//    CHEQUE_STOP_PAYMENT_SINGLE_CANCEL: 15,
//    CHEQUE_STOP_PAYMENT_RANGE_CANCEL: 16
//};

var receipts = [
    'ACCOUNT_BALANCE',
    'CASH_DEPOSIT',
    'CASH_WITHDRAW',
    'DPS_ACCOUNT',
    'FIXED_DEPOSIT',
    'FUND_TRANSFER',
    'SAVINGS_ACCOUNT',
    'ATM_DEBIT_CARD_REQUEST',
    'ATM_DEBIT_CARD_DELIVERY',
    'ATM_DEBIT_CARD_CANCEL',
    'CHEQUE_BOOK_REQUISITION',
    'CHEQUE_BOOK_DELIVERY',
    'CHEQUE_STOP_PAYMENT_SINGLE',
    'CHEQUE_STOP_PAYMENT_RANGE',
    'CHEQUE_STOP_PAYMENT_SINGLE_CANCEL',
    'CHEQUE_STOP_PAYMENT_RANGE_CANCEL'];

window.onload = function myfunction() {
    var formSelect = document.getElementById('formSelect');
    for (var i = 0; i < receipts.length; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.innerHTML = receipts[i];
        formSelect.appendChild(option);
    }
    document.getElementById("go").onclick = function () {
        window.location.href = "../template1.html?" + (parseInt(formSelect.value) + 1);
    }
}