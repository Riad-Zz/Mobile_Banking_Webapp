document.getElementById('login-btn')
    .addEventListener('click',function(e){
    
    const userMobileNumber = parseInt( document.getElementById('MobileNumber').value) ;
    const userPin = parseInt(document.getElementById('Pin').value) ;

    if( (userMobileNumber.toString().length === 11) && (userPin.toString().length === 4)){
        window.location.href = "./Home.html" ;
    }else console.log("Invalid") ;
})