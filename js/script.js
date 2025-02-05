"use strict";

const button = document.querySelector('.button');

button.addEventListener('click', () => {

    setValue();
    
});


function setValue() {

    const amount = document.querySelector('#amount').value;
    const term = document.querySelector('#term').value;
    const rate = document.querySelector('#rate').value;
    const repayment = document.querySelector('#repayment').checked;
    const intrest = document.querySelector('#intrest').checked;

    console.log(amount);
    console.log(term);
    console.log(rate);
    console.log(repayment);
    console.log(intrest);
    
    validateForm(amount, term, rate, repayment, intrest);

};

function validateForm(amount, term, rate, repayment, intrest) {

    if (!amount || isNaN(Number(amount))) {

        console.log('amount error');

        const amountError = document.querySelector('.amountError');
        const amountBox = document.querySelector('.labelInsideAmount');
        const amountLabel = document.querySelector(".inputColorIdk");
    
        amountError.style.display = 'block';
        amountBox.style.backgroundColor = 'hsl(4, 69%, 50%)';  
        amountBox.style.color = 'hsl(0, 0%, 100%)';  
        amountLabel.style.border = 'solid 1px hsl(4, 69%, 50%)';

    }

    if (!term || isNaN(Number(term))) {

        console.log('term error');

        const termError = document.querySelector('.termError');
        const termBox = document.querySelector('.labelInsideTerm');
        const termLabel = document.querySelector(".optionTerm");

        termError.style.display = 'block';
        termBox.style.background = 'hsl(4, 69%, 50%)'; 
        termBox.style.color = 'hsl(0, 0%, 100%)';  
        termLabel.style.border = 'solid 1px hsl(4, 69%, 50%)'; 

    }

    if (!rate || isNaN(Number(rate))) {

        console.log('rate error');

        const rateError = document.querySelector('.rateError');
        const rateBox = document.querySelector('.labelInsideRate');
        const rateLabel = document.querySelector(".optionRate");

        rateError.style.display = 'block';
        rateBox.style.background = 'hsl(4, 69%, 50%)'; 
        rateBox.style.color = 'hsl(0, 0%, 100%)';  
        rateLabel.style.border = 'solid 1px hsl(4, 69%, 50%)'; 
    
    }
    
    const radioStatus = true;

    if (!repayment && !intrest) {

        console.log('radio error');

        const radioError = document.querySelector('.radioError');

        radioStatus = false;

        radioError.style.display = 'block';

    }

    if (amount && term && rate && radioStatus) {

        clear()
        
        calculate(amount, term, rate, repayment, intrest);

    }

};

function calculate(amount, term, rate, repayment, intrest) {
    
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
    const monthlyPayment = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    const total = monthlyPayment * 12 * term;

    schowData (monthlyPayment, total);

};

function schowData(monthlyPayment, total) {

    const foto = document.querySelector('.foto');
    const tittle2 = document.querySelector('.tittle2');
    const centerText = document.querySelector('.centerText');

    foto.style.display = 'none';
    tittle2.style.display = 'none';
    centerText.style.display = 'none';

    const tittle3 = document.querySelector('.tittle3');
    const bottomText2 = document.querySelector('.bottomText2');
    const finalResult = document.querySelector('.finalResult');

    tittle3.style.display = 'block';
    bottomText2.style.display = 'block';
    finalResult.style.display = 'block';

    const mounthlyPaymentText = document.querySelector('.mounthlyPayment');
    const payment = document.querySelector('.payment');

    mounthlyPaymentText.innerText = "£" + monthlyPayment.toFixed(2);
    payment.innerText = "£" + total.toFixed(2);

};

function clear() {

    const amountError = document.querySelector('.amountError');
    const amountBox = document.querySelector('.labelInsideAmount');
    const amountLabel = document.querySelector(".inputColorIdk");
    const termError = document.querySelector('.termError');
    const termBox = document.querySelector('.labelInsideTerm');
    const termLabel = document.querySelector(".optionTerm");
    const rateError = document.querySelector('.rateError');
    const rateBox = document.querySelector('.labelInsideRate');
    const rateLabel = document.querySelector(".optionRate");
    const radioError = document.querySelector('.radioError');

    amountError.style.display = 'none';
    amountBox.style.backgroundColor = 'hsl(61, 70%, 52%)';  
    amountBox.style.color = 'hsl(202, 55%, 16%);';  
    amountLabel.style.border = 'solid 1px hsl(61, 70%, 52%)';
    termError.style.display = 'none';
    termBox.style.background = 'hsl(61, 70%, 52%)'; 
    termBox.style.color = 'hsl(202, 55%, 16%);';  
    termLabel.style.border = 'solid 1px hsl(61, 70%, 52%)'; 
    rateError.style.display = 'none';
    rateBox.style.background = 'hsl(61, 70%, 52%)'; 
    rateBox.style.color = 'hsl(202, 55%, 16%);';  
    rateLabel.style.border = 'solid 1px hsl(61, 70%, 52%)';
    radioError.style.display = 'none';

};