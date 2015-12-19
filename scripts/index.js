var receipts = {
    ACCOUNT_BALANCE: 1,
    CASH_DEPOSIT: 2,
    CASH_WITHDRAW: 3,
    DPS_ACCOUNT: 4,
    FIXED_DEPOSIT: 5,
    FUND_TRANSFER: 6,
    SAVINGS_ACCOUNT: 7
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
}