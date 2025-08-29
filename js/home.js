console.log("Connected2") ;

//Selection Color Control 
const allCards = document.getElementsByClassName('card') ;
function selectIconColor(id){
    for(const card of allCards){
        card.style.backgroundColor = 'white' ;
}
    const selectedCard = document.getElementById(id) ;
    selectedCard.style.backgroundColor = '#0874f20d' ;
}

//All Form display COntrol Toggling Feature 
const allForms = document.getElementsByClassName('form') ;
function toggling(id){
    for(form of allForms){
        form.style.display = 'none' ;
}
    const currentForm =  document.getElementById(id) ;
    currentForm.style.display = 'block' ;
}

//Form Reset Functionality 
function Reset(num,pin,amount){
    document.getElementById(num).value = " "
        document.getElementById(pin).value = " " ;
        document.getElementById(amount).value = " " ;
}

//Add Money Feature
document.getElementById('addMoney')
    .addEventListener('click' , function(e){
        e.stopPropagation() ;
        // Icon bg Color Control 
         selectIconColor('addMoney') ;
        //Display Control 
        toggling('addMoneyForm') ;
    })


//Cash Out feature 
document.getElementById('cash-out')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        // Icon bg Color Control 
             selectIconColor('cash-out') ;

        //Display Control 
        toggling('CashOut') ;
    })

//Transfer Money feature
document.getElementById('transfer-money')
    .addEventListener('click' , function(e){
        e.stopPropagation() ;
        selectIconColor('transfer-money') ;
        toggling('transfer') ;
        
    })

//Get Bonus Feature
document.getElementById('bonus')
    .addEventListener('click',function(e){
        e.stopPropagation() ;
        selectIconColor('bonus') ;
        toggling('get-Bonus') ;
    })


//Pay Bill Feature pay
document.getElementById('pay')
    .addEventListener('click',function(e){
        e.stopPropagation() ;
        selectIconColor('pay') ;
        toggling('payBill') ;
    })

//Addd Money Functionality 
document.getElementById('addMoney-btn')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        const acNum =parseInt( document.getElementById('account-number').value) ;
        const acPin = parseInt(document.getElementById('acPin').value) ;
        const acAmount = parseInt(document.getElementById('addAmount').value) ;


        if((acNum.toString().length !== 11) || (acPin.toString().length !==4)){
            console.log("Invalid") ;
            return ;
        }

        const initial = parseInt( document.getElementById('initial-money').innerText) ;
        const newBalace = initial + acAmount ;
        document.getElementById('initial-money').innerText = newBalace ;

        //Reset 
      
        Reset('account-number','acPin','addAmount') ;

    })

//Common Functionality Check (Calculation and Number Pin Varify)
// function Calculation(AcNum,AcPin,acAmount){
//     const accountNumber = parseInt(document.getElementById(acAmount).value) ;
//     const accountPin = parseInt(document.getElementById(acPin).value) ;
//     const Amount = parseInt(document.getElementById(acAmount).value) ;
//     const value = [accountNumber,accountPin,Amount] ;
//     return value ;
// }

//Cash Out functionality 
document.getElementById('Cashout-btn')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        const agNum =parseInt( document.getElementById('agentNumber').value) ;
        const agPin = parseInt(document.getElementById('cashoutPin').value) ;
        const agAmount = parseInt(document.getElementById('cashout-amount').value) ;
        const initial = parseInt( document.getElementById('initial-money').innerText) ;

        if((agNum.toString().length !== 11) || (agPin.toString().length !==4) || (agAmount > initial)){
            console.log("Invalid") ;
            return ;
        }

        
        const newBalace = initial - agAmount ;
        document.getElementById('initial-money').innerText = newBalace ;

        //Reset 
         Reset('agentNumber','cashoutPin','cashout-amount') ;

    })

//Transfer-Money Functionality 
document.getElementById('transfer-btn')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        const agNum =parseInt( document.getElementById('agentNum').value) ;
        const agPin = parseInt(document.getElementById('trabsferPin').value) ;
        const agAmount = parseInt(document.getElementById('transfer-amount').value) ;
        const initial = parseInt( document.getElementById('initial-money').innerText) ;

        if((agNum.toString().length !== 11) || (agPin.toString().length !==4) || (agAmount > initial)){
            console.log("Invalid") ;
            return ;
        }

        
        const newBalace = initial - agAmount ;
        document.getElementById('initial-money').innerText = newBalace ;

        //Reset 
        Reset('agentNum','trabsferPin','transfer-amount') ;
    })


//Get Bonus Functionality 
document.getElementById('bonus-btn')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        const coupoCode =document.getElementById('coupon').value ;
        console.log(coupoCode) ;
        if(coupoCode == 'gift'){
            const initial = parseInt( document.getElementById('initial-money').innerText) ;
            const newBalace = initial + 500 ;
            document.getElementById('initial-money').innerText = newBalace ;
        }  
        //Reset 

    })

//Pay Bill Feature
document.getElementById('payBill')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        const agNum =parseInt( document.getElementById('acc-Num').value) ;
        const agPin = parseInt(document.getElementById('pay-pin').value) ;
        const agAmount = parseInt(document.getElementById('amount-pay').value) ;
        const initial = parseInt( document.getElementById('initial-money').innerText) ;

        if((agNum.toString().length !== 11) || (agPin.toString().length !==4) || (agAmount > initial)){
            console.log("Invalid") ;
            return ;
        }

        
        const newBalace = initial - agAmount ;
        document.getElementById('initial-money').innerText = newBalace ;

        //Reset 
         Reset('acc-Num','pay-pin','amount-pay') ;

    })