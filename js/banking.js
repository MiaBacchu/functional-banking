function getDepositValue(inputId) {
    // get deposit value
    const inputField = document.getElementById(inputId);
    let newAmount = parseFloat(inputField.value);
    // clear the field
    inputField.value = '';
    return newAmount;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // call the function
    newAmount = getDepositValue('deposit-input')
    // get deposit total
    const total = document.getElementById('deposit-total')
    let previousTotal = parseFloat(total.innerText);
    // adding deposit total
    total.innerText = previousTotal + newAmount;
    // get balance total
    const balanceTotal = document.getElementById('balance-total');
    let previousBalanceTotal = parseFloat(balanceTotal.innerText);
    // adding balance total
    balanceTotal.innerText = previousBalanceTotal + newAmount;

})

// withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    newAmount = getDepositValue('withdraw-input')
    const total = document.getElementById('withdraw-total');
    const previousTotal = parseFloat(total.innerText);
    total.innerText = previousTotal + newAmount;
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText)
    balanceTotal.innerText = previousBalanceTotal - newAmount;
})