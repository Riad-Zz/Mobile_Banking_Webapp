console.log("Connected2") ;

//---------------------Shared Functions----------------------

//-- -------Selection Color Control------------------------- 
const allCards = document.getElementsByClassName('card') ;
function selectIconColor(id){
    for(const card of allCards){
        card.style.backgroundColor = 'white' ;
}
    const selectedCard = document.getElementById(id) ;
    selectedCard.style.backgroundColor = '#0874f20d' ;
}

//---------All Form display COntrol Toggling Feature------------- 
const allForms = document.getElementsByClassName('form') ;
function toggling(id){
    for(form of allForms){
        form.style.display = 'none' ;
}
    const currentForm =  document.getElementById(id) ;
    currentForm.style.display = 'block' ;
}

//--------------Form Reset Functionality---------------- 
function Reset(num,pin,amount){
    document.getElementById(num).value = " "
        document.getElementById(pin).value = " " ;
        document.getElementById(amount).value = " " ;
}

//-----------------Deafault Display Blocking Transaction----------
function HideIt(){
    const defTrans = document.getElementById('deafaultTeansactions') ;
    defTrans.style.display = 'none' ;
}

//-----------------Common Transition History---------------- 
function transistionHistory(name){
    const newChild = document.createElement('div') ;
    newChild.innerHTML = `
        <div class="flex justify-between items-center  bg-white rounded-[12px] mb-[12px] p-4">
            <div class="left-side flex items-center gap-3">
                <div class="rounded-full bg-[#0808080d] h-[45px] w-[45px] flex justify-center items-center">
                    <img src="assets/wallet1.png" alt="">
                </div>
                <div>
                    <p class="font-semibold text-[#080808b3]">${name}</p>
                <p class="text-[#080808b3] text-[12px]">${new Date().toLocaleTimeString()}</p>
                </div>
            </div>
            <div class="right">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    `
    const parent = document.getElementById('all-card-container') ;
    parent.prepend(newChild) ;
}

//--------------------Basic Features------------------------

//-----------------Add Money Feature----------------------
document.getElementById('addMoney')
    .addEventListener('click' , function(e){
        e.stopPropagation() ;
        // Icon bg Color Control 
         selectIconColor('addMoney') ;
        //Display Control 
        toggling('addMoneyForm') ;
    })


//-----------------Cash Out feature----------------------- 
document.getElementById('cash-out')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        // Icon bg Color Control 
             selectIconColor('cash-out') ;

        //Display Control 
        toggling('CashOut') ;
    })

//-------------------Transfer Money feature--------------------
document.getElementById('transfer-money')
    .addEventListener('click' , function(e){
        e.stopPropagation() ;
        selectIconColor('transfer-money') ;
        toggling('transfer') ;
        
    })

//--------------------Get Bonus Feature-------------------------
document.getElementById('bonus')
    .addEventListener('click',function(e){
        e.stopPropagation() ;
        selectIconColor('bonus') ;
        toggling('get-Bonus') ;
    })


//--------------------Pay Bill Feature pay-------------------
document.getElementById('pay')
    .addEventListener('click',function(e){
        e.stopPropagation() ;
        selectIconColor('pay') ;
        toggling('payBill') ;
    })

//-----------------Transition History Feature-------------------
document.getElementById('transition')
    .addEventListener('click',function(e){
        e.stopPropagation() ;
        selectIconColor('transition') ;
        toggling('Transaction-History') ;
       
    })

//---------------Log Out Feature---------------------- 
document.getElementById('logout')
    .addEventListener('click',function(e){
        window.location.href = "./index.html" ;
   
})

//------------------All Features Functionality----------------

//--------------Addd Money Functionality------------------- 
document.getElementById('addMoney-btn')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        const acNum =parseInt( document.getElementById('account-number').value) ;
        const acPin = parseInt(document.getElementById('acPin').value) ;
        const acAmount = parseInt(document.getElementById('addAmount').value) ;


        if((acNum.toString().length !== 11) || (acPin.toString().length !==4)){
            console.log("Invalid") ;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
});
            return ;
        }

        const initial = parseInt( document.getElementById('initial-money').innerText) ;
        const newBalace = initial + acAmount ;
        document.getElementById('initial-money').innerText = newBalace ;

        //Reset 
        transistionHistory('Add Money') ;
        HideIt() ;
        Swal.fire({
            title: "Add Money Sucessfull",
            icon: "success"
});
        Reset('account-number','acPin','addAmount') ;

    })



//---------------------Cash Out functionality-------------------- 
document.getElementById('Cashout-btn')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        const agNum =parseInt( document.getElementById('agentNumber').value) ;
        const agPin = parseInt(document.getElementById('cashoutPin').value) ;
        const agAmount = parseInt(document.getElementById('cashout-amount').value) ;
        const initial = parseInt( document.getElementById('initial-money').innerText) ;

        if((agNum.toString().length !== 11) || (agPin.toString().length !==4) || (agAmount > initial)){
            console.log("Invalid") ;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
});
            return ;
        }

        
        const newBalace = initial - agAmount ;
        document.getElementById('initial-money').innerText = newBalace ;
        Swal.fire({
            title: "Cash Out Sucessfull",
            icon: "success"
});
        transistionHistory('Cash Out') ;
        HideIt() ;
        //Reset 
         Reset('agentNumber','cashoutPin','cashout-amount') ;

    })

//-----------------Transfer-Money Functionality------------------- 
document.getElementById('transfer-btn')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        const agNum =parseInt( document.getElementById('agentNum').value) ;
        const agPin = parseInt(document.getElementById('trabsferPin').value) ;
        const agAmount = parseInt(document.getElementById('transfer-amount').value) ;
        const initial = parseInt( document.getElementById('initial-money').innerText) ;

        if((agNum.toString().length !== 11) || (agPin.toString().length !==4) || (agAmount > initial)){
            console.log("Invalid") ;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
});
            return ;
        }
        Swal.fire({
            title: "Transfer Sucessfull",
            icon: "success"
});
        
        const newBalace = initial - agAmount ;
        document.getElementById('initial-money').innerText = newBalace ;

        transistionHistory('Money Transfer') ;
        HideIt() ;
        //Reset 
        Reset('agentNum','trabsferPin','transfer-amount') ;
    })


//-------------------Get Bonus Functionality-------------------- 
document.getElementById('bonus-btn')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        const coupoCode =document.getElementById('coupon').value ;
        console.log(coupoCode) ;
        if(coupoCode == 'gift'){
            const initial = parseInt( document.getElementById('initial-money').innerText) ;
            const newBalace = initial + 500 ;
            document.getElementById('initial-money').innerText = newBalace ;
            Swal.fire({
            title: "Bonus $500 !",
            icon: "success"
});
         HideIt() ;
            transistionHistory('Bonus') ;
        Reset('coupon') ; 
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong Coupon Code!",
});
        }
        
        //Reset 
       
        
    })

//-----------------------Pay Bill Feature-------------------------
document.getElementById('pay-btn')
    .addEventListener('click',function (e){
        e.stopPropagation() ;
        const agNum =parseInt( document.getElementById('acc-Num').value) ;
        const agPin = parseInt(document.getElementById('pay-pin').value) ;
        const agAmount = parseInt(document.getElementById('amount-pay').value) ;
        const initial = parseInt( document.getElementById('initial-money').innerText) ;

        if((agNum.toString().length !== 11) || (agPin.toString().length !==4) || (agAmount > initial)){
            console.log("Invalid") ;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
});
            return ;
        }
        Swal.fire({
            title: "Bill Paid",
            icon: "success"
});
        
        const newBalace = initial - agAmount ;
        document.getElementById('initial-money').innerText = newBalace ;

        transistionHistory('Pay Bill') ;
        HideIt() ;
        Reset('acc-Num','pay-pin','amount-pay') ;

    })