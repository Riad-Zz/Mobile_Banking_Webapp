console.log("Connected2") ;

document.getElementById('addMoney')
    .addEventListener('click' , function(e){
        e.stopPropagation() ;
        // Icon bg Color Control 
        const Icn = document.getElementById('addMoney') ;
        Icn.style.backgroundColor = '#0874f20d' ;
        const IcnCashout = document.getElementById('cash-out');
        IcnCashout.style.backgroundColor = 'white' ; 

        //Display Control 
        const def = document.getElementById('default') ;
        def.style.display = 'none' ;
        const cashOut = document.getElementById('CashOut') ;
        cashOut.style.display = 'none' ;
        const addMoney = document.getElementById('addMoneyForm') ;
        addMoney.style.display = 'block' ;
    })

document.getElementById('cash-out')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        // Icon bg Color Control 
        const IcnCashout = document.getElementById('cash-out');
        IcnCashout.style.backgroundColor = '#0874f20d' ; 
        const IcnaddMoney = document.getElementById('addMoney') ;
        IcnaddMoney.style.backgroundColor = 'white'

        //Display Control 
        const def = document.getElementById('default') ;
        def.style.display = 'none' ;
        const addMoney = document.getElementById('addMoneyForm') ;
        addMoney.style.display = 'none' ; 
        const cashOut = document.getElementById('CashOut') ;
        cashOut.style.display = 'block' ;
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
        document.getElementById('account-number').value = " "
        document.getElementById('acPin').value = " " ;
        document.getElementById('addAmount').value = " " ;

    })

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
        document.getElementById('agentNumber').value = " "
        document.getElementById('cashoutPin').value = " " ;
        document.getElementById('cashout-amount').value = " " ;

    })

