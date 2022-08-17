/*
1. add event handeler with the withdraw button
2. get the withdraw amount from the withdraw input field
2. 5 also make sure to convert the input into a number by using parseFloat()
3. get previous withdraw total 

4. total withdraw amount
4.5. set withdraw total amount

5. get previous balance total

6. calculate new balance total 
6.5 set the new balance total

7. clear the input field
*/

// step 1-
document.getElementById('btn-withdraw').addEventListener('click', function() {
    // step 2-
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldAmountString = withdrawField.value;
    const newWithdrawFieldAmount = parseFloat(newWithdrawFieldAmountString);

    // step 7
    withdrawField.value = '';

    if (isNaN(newWithdrawFieldAmount)) {
        alert('Please porvide a valid number');
        return;
    }

    // step 3-
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = withdrawTotalElement.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);

    // step 4-
    const cuurentWithdrawTotal = prevWithdrawTotal + newWithdrawFieldAmount;


    // step 5-
    const balanceTotalElement = document.getElementById('total-balance');
    const prevBalanceTotalString = balanceTotalElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    if (prevBalanceTotal < newWithdrawFieldAmount) {
        alert('your withdraw balance is over from existing balance!');
        return;
    }

    // step 4.5-
    withdrawTotalElement.innerText = cuurentWithdrawTotal;

    // step 6-
    const newBalanceTotal = prevBalanceTotal - newWithdrawFieldAmount;

    // step 6.5-
    balanceTotalElement.innerText = newBalanceTotal;

    

})