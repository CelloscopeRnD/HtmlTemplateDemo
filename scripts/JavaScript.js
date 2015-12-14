window.onload = function myfunction() {
    document.getElementById("accountBalance").onclick = function () {
        window.location.href = "../template1.html?1";
    }

    document.getElementById("cashDeposit").onclick = function () {
        window.location.href = "../template1.html?2";
    }

    document.getElementById("cashWithdraw").onclick = function () {
        window.location.href = "../template1.html?3";
    }

    document.getElementById("dpsAccount").onclick = function () {
        window.location.href = "../template1.html?4";
    }

    document.getElementById("fixedDeposit").onclick = function () {
        window.location.href = "../template1.html?5";
    }

    document.getElementById("fundTransfer").onclick = function () {
        window.location.href = "../template1.html?6";
    }

    document.getElementById("savingsAccount").onclick = function () {
        window.location.href = "../template1.html?7";
    }
}
