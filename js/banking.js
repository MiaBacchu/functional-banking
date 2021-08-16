function getDepositValue() {
    // get deposit value
    const depositInput = document.getElementById('deposit-input');
    let newDepositAmount = parseFloat(depositInput.value);
    // clear the field
    depositInput.value = '';
    return newDepositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // call the function
    newDepositAmount = getDepositValue()
    /*const depositInput = document.getElementById('deposit-input');
    let newDepositAmount = parseFloat(depositInput.value);*/
    // get deposit total
    const depositTotal = document.getElementById('deposit-total')
    let previousDepositTotal = parseFloat(depositTotal.innerText);
    // adding deposit total
    depositTotal.innerText = previousDepositTotal + newDepositAmount;
    // get balance total
    const balanceTotal = document.getElementById('balance-total');
    let previousBalanceTotal = parseFloat(balanceTotal.innerText);
    // adding balance total
    balanceTotal.innerText = previousBalanceTotal + newDepositAmount;

})

// withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    withdrawInput.value = '';
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount;
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText)
    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
})