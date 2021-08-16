// 1
function getDepositValue(inputId) {
    // get deposit value
    const inputField = document.getElementById(inputId);
    let newAmount = parseFloat(inputField.value);
    // clear the field
    inputField.value = '';
    return newAmount;
}
// 2
function getTotal(totalId, newAmount) {
    const total = document.getElementById(totalId)
    let previousTotal = parseFloat(total.innerText);
    total.innerText = previousTotal + newAmount;
}
// 3
function totalBalance(balaceId, isAdd) {
    const balanceTotal = document.getElementById(balaceId);
    let previousBalanceTotal = parseFloat(balanceTotal.innerText);
    if (isAdd == true) { balanceTotal.innerText = previousBalanceTotal + newDepositAmount; }
    else { balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount; }
}
// deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    // call the function
    newDepositAmount = getDepositValue('deposit-input');
    // call get total
    getTotal('deposit-total', newDepositAmount);
    // call balanceTotal
    totalBalance('balance-total', true)
})

// withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    newWithdrawAmount = getDepositValue('withdraw-input');
    getTotal('withdraw-total', newWithdrawAmount);
    totalBalance('balance-total', false)
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceTotal = parseFloat(balanceTotal.innerText)
    // balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
})