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
    'CHEQUE_STOP_PAYMENT_RANGE_CANCEL',
    'MINI_STATEMENT',//17
    'Remittance_Request',
    'Remittance_Disbursement'
];

window.onload = function myfunction() {
    var formSelect = document.getElementById('formSelect');
    for (var i = 0; i < receipts.length; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.innerHTML = receipts[i];
        formSelect.appendChild(option);
    }
    document.getElementById("go").onclick = function () {
        if ((parseInt(formSelect.value) + 1 == 17)) {
            window.location.href = "../../templates/city/miniStatementTemplate.html?" + (parseInt(formSelect.value) + 1);
        } else {
            window.location.href = "../../templates/city/template.html?" + (parseInt(formSelect.value) + 1);
        }
    }
}