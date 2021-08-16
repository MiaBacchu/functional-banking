function getDepositValue(inputId) {
    // get deposit value
    const inputField = document.getElementById(inputId);
    let newAmount = parseFloat(inputField.value);
    // clear the field
    inputField.value = '';
    return newAmount;
}
function getTotal(totalId, newAmount) {
    const total = document.getElementById(totalId)
    let previousTotal = parseFloat(total.innerText);
    total.innerText = previousTotal + newAmount;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    // call the function
    newDepositAmount = getDepositValue('deposit-input')
    // get balance total
    getTotal('deposit-total', newDepositAmount)
    const balanceTotal = document.getElementById('balance-total');
    let previousBalanceTotal = parseFloat(balanceTotal.innerText);
    // adding balance total
    balanceTotal.innerText = previousBalanceTotal + newDepositAmount;

})

// withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    newWithdrawAmount = getDepositValue('withdraw-input')
    getTotal('withdraw-total', newWithdrawAmount)
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText)
    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
})