function validateForm2() {
    var firstName = firstNameInput.value.trim();
    var lastName = lastNameInput.value.trim();
    var passWord = passWordInput.value.trim();
    var Email = EmailInput.value.trim();
    var nation = nationInput.value.trim();
    var sex = SexInput.value.trim();
    var adresse = adresseInput.value.trim();
    var num = numInput.value.trim();
    var country = countryInput.value.trim();

    var isValid = true;

       if(firstName===''){
        firstNameErrorMessage.textContent= 'Vui lòng nhập Tên của bạn';
        isValid =false;
       }else{
        firstNameErrorMessage.textContent='';
       }
    
       if(lastName===''){
        lastNameErrorMessage.textContent= 'Vui lòng nhập Họ của bạn';
        isValid =false;
       }else{
        lastNameErrorMessage.textContent='';
       }

       if (passWord === '') {
        passWordErrorMessage.textContent = 'Vui lòng nhập Pass của bạn';
        isValid = false;
        } else if (!validatePassword2(passWord)) {
        passWordErrorMessage.textContent = 'Password phải có ít nhất một chữ cái viết hoa.';
        isValid = false;
        } else {
        passWordErrorMessage.textContent = '';
        }

       if(Email===''){
        EmailErrorMessage.textContent= 'Vui lòng nhập Email của bạn';
        isValid =false;
       } else if (!validateEmail(Emailip.value)) {
        EmailErrorMessage.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
        isValid = false;
        } else {
        EmailErrorMessage.textContent = '';
        }
    
    if(nation===''){
        nationErrorMessage.textContent= 'Vui lòng nhập Quốc Gia của bạn';
        isValid =false;
       }else{
        nationErrorMessage.textContent='';
       }

       if(sex===''){
        SexErrorMessage.textContent= 'Vui lòng nhập Giới Tính của bạn';
        isValid =false;
       }else{
        SexErrorMessage.textContent='';
       }

       if(adresse===''){
        adresseErrorMessage.textContent= 'Vui lòng nhập Địa Chỉ của bạn';
        isValid =false;
       }else{
        adresseErrorMessage.textContent='';
       }
    
       if(num===''){
        numErrorMessage.textContent='Vui lòng nhập số điện thoại của bạn.'
        isValid=false;
    }else if(!validatePhoneNumber(sdt)){
        numErrorMessage.textContent='Vui lòng nhập Số Điện Thoại hợp lệ.'
        isValid=false;
    }
    else{
        sdtErrorMessage.textContent='';
    }

    if(country===''){
        countryErrorMessage.textContent= 'Vui lòng nhập Quê Quán của bạn';
        isValid =false;
       }else{
        countryErrorMessage.textContent='';
       }

       if (isValid) {
        alert('Đã Gửi!');
        window.location.href="index.html";
        }

     

}
function validatePassword2(passWord) {
    var passwordRegex = /(?=.*[A-Z])/;
    return passwordRegex.test(password);
}
function validateEmail(Emailip) {
    var emailRegex = /\S+@\S+\.\S+/;
return emailRegex.test(email);
}
function validatePhoneNumber(sdt) {
    var phonetest = /^\d{10}$/;
    return phonetest.test(sdt) && /^\d+$/.test(sdt);
}

     let isOrderButtonClicked1 = false;
     document.querySelector('.from-dangki').addEventListener('submit', function(event){
         if(isOrderButtonClicked1){
          isOrderButtonClicked1 =false;
       } else{
           event.preventDefault();
         }
     });
     document.querySelector('.btn.btn-outline-success').addEventListener('click',function(event){
        if(isValid==true){
            isOrderButtonClicked1 =true;
        } 
    });



    
