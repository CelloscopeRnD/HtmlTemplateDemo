var receipts = {
    ACCOUNT_BALANCE: 1,
    CASH_DEPOSIT: 2,
    CASH_WITHDRAW: 3,
    DPS_ACCOUNT: 4,
    FIXED_DEPOSIT: 5,
    FUND_TRANSFER: 6,
    SAVINGS_ACCOUNT: 7,
    ATM_DEBIT_CARD_REQUEST: 8,
    ATM_DEBIT_CARD_DELIVERY: 9,
    ATM_DEBIT_CARD_CANCEL: 10,
    CHEQUE_BOOK_REQUISITION: 11,
    CHEQUE_BOOK_DELIVERY: 12,
    CHEQUE_STOP_PAYMENT_SINGLE: 13,
    CHEQUE_STOP_PAYMENT_RANGE: 14,
    CHEQUE_STOP_PAYMENT_CANCEL: 15
};

window.onload = function myfunction() {

    document.getElementById("accountBalance").onclick = function () {
        window.location.href = "../template1.html?" + receipts.ACCOUNT_BALANCE;
    }

    document.getElementById("cashDeposit").onclick = function () {
        window.location.href = "../template1.html?" + receipts.CASH_DEPOSIT;
    }

    document.getElementById("cashWithdraw").onclick = function () {
        window.location.href = "../template1.html?" + receipts.CASH_WITHDRAW;
    }

    document.getElementById("dpsAccount").onclick = function () {
        window.location.href = "../template1.html?" + receipts.DPS_ACCOUNT;
    }

    document.getElementById("fixedDeposit").onclick = function () {
        window.location.href = "../template1.html?" + receipts.FIXED_DEPOSIT;
    }

    document.getElementById("fundTransfer").onclick = function () {
        window.location.href = "../template1.html?" + receipts.FUND_TRANSFER;
    }

    document.getElementById("savingsAccount").onclick = function () {
        window.location.href = "../template1.html?" + receipts.SAVINGS_ACCOUNT;
    }


    document.getElementById("atmDebitCardRequest").onclick = function () {
        window.location.href = "../template1.html?" + receipts.ATM_DEBIT_CARD_REQUEST;
    }

    document.getElementById("atmDebitCardDelivery").onclick = function () {
        window.location.href = "../template1.html?" + receipts.ATM_DEBIT_CARD_DELIVERY;
    }

    document.getElementById("atmDebitCardCancel").onclick = function () {
        window.location.href = "../template1.html?" + receipts.ATM_DEBIT_CARD_CANCEL;
    }

    document.getElementById("chequeBookRequisition").onclick = function () {
        window.location.href = "../template1.html?" + receipts.CHEQUE_BOOK_REQUISITION;
    }

    document.getElementById("chequeBookDelivery").onclick = function () {
        window.location.href = "../template1.html?" + receipts.CHEQUE_BOOK_DELIVERY;
    }

    document.getElementById("chequeStopPaymentSingle").onclick = function () {
        window.location.href = "../template1.html?" + receipts.CHEQUE_STOP_PAYMENT_SINGLE;
    }

    document.getElementById("chequeStopPaymentRange").onclick = function () {
        window.location.href = "../template1.html?" + receipts.CHEQUE_STOP_PAYMENT_RANGE;
    }

    document.getElementById("chequeStopPaymentCancel").onclick = function () {
        window.location.href = "../template1.html?" + receipts.CHEQUE_STOP_PAYMENT_CANCEL;
    }
}