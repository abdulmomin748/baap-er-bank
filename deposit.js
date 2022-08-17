// step 1.add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function() {
    // step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    let depositField = document.getElementById('deposit-field');
    let newDepositAmountString = depositField.value;
    let newDepositAmount = parseFloat(newDepositAmountString)
    console.log(newDepositAmount);
    if (isNaN(newDepositAmount)) {
        alert('Please porvide a valid number');
        return;
    }

    // step-3: get the current deposit total
    // for non-input(element other then input, textarea) use innerText to get the text
    let depositeTotalElement = document.getElementById('deposit-total');
    let prevDepositTotalString = depositeTotalElement.innerText;
    let prevDepositTotal = parseFloat(prevDepositTotalString)

    // step-4: add numbers to set the total deposit
    const currentDepositTotal = newDepositAmount + prevDepositTotal;
    // set the deposit total
    depositeTotalElement.innerText = currentDepositTotal;


    // step-5: get ballance current total
    let balanceElement = document.getElementById('total-balance');
    let prevBalanceTotaltString = balanceElement.innerText;
    let prevBalanceTotal = parseFloat(prevBalanceTotaltString);


    // step-6: calculate current total balance
    const currentBalanceTotal = prevBalanceTotal + newDepositAmount;

    // set the balance total
    balanceElement.innerText = currentBalanceTotal;


    // step-7: clear the input
    depositField.value = '';
})