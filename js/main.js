


// Function to delay page redirection
function delayPageLoad() {
    setTimeout(function() {
      // window.location.href = "index.html"; // Replace with your target URL
      document.querySelector(".ads").style.display = "none";
      document.querySelector(".header").style.display = "block";
    document.querySelector(".banner").style.display = "block";
    document.querySelector(".content").style.display = "block";
    document.querySelector("footer").style.display = "block";
    
      
      
    }, 3000); // 3000 milliseconds = 3 seconds
    document.querySelector(".ads").style.display = "block";
    document.querySelector(".header").style.display = "none";
    document.querySelector(".banner").style.display = "none";
    document.querySelector(".content").style.display = "none";
    document.querySelector("footer").style.display = "none";
  }


  
// ---validate
function validateForm() {
    var ten = tenip.value.trim();
    var email = emailip.value.trim();
    var pass = passip.value.trim();
    var sdt = sdtip.value.trim();
    var isValid = true;
   if(ten===''){
    tenErrorMessage.textContent= 'Vui lòng nhập Tên của bạn';
    isValid =false;
   }else{
    tenErrorMessage.textContent='';
   }

//    ----email---
   if(email===''){
    emailErrorMessage.textContent= 'Vui lòng nhập Email của bạn';
    isValid =false;
   }
   else if (!validateEmail(emailip.value)) {
    emailErrorMessage.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
    isValid = false;
} else {
    emailErrorMessage.textContent = '';
}
// ---sdt---
if(sdt===''){
    sdtErrorMessage.textContent='Vui lòng nhập số điện thoại của bạn.'
    isValid=false;
}else if(!validatePhoneNumber(sdt)){
    sdtErrorMessage.textContent='Vui lòng nhập số điện thoại hợp lệ.'
    isValid=false;
}
else{
    sdtErrorMessage.textContent='';
}

// ---pass---
if (pass === '') {
    passErrorMessage.textContent = 'Vui lòng nhập Pass của bạn';
    isValid = false;
} else if (!validatePassword(pass)) {
    passErrorMessage.textContent = 'Password phải có ít nhất một chữ cái viết hoa.';
    isValid = false;
} else {
    passErrorMessage.textContent = '';
}

   if (isValid) {
    alert('Đã Gửi!');
    window.location.href="index.html";
    }

}

function validateEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
function validatePhoneNumber(sdt) {
    var phonetest = /^\d{10}$/;
    return phonetest.test(sdt) && /^\d+$/.test(sdt);
}
function validatePassword(password) {
    var passwordRegex = /(?=.*[A-Z])/;
    return passwordRegex.test(password);
}

let isOrderButtonClicked = false;
document.querySelector('.from-lienhe').addEventListener('submit', function(event){
    if(isOrderButtonClicked){
        isOrderButtonClicked =false;
    } else{
        event.preventDefault();
    }
});
document.querySelector('.btn.btn-outline-success').addEventListener('click',function(event){
    if(isValid==true){
        isOrderButtonClicked =true;
    }
});





// ---fromdangki---

// function validateForm2() {
//     var firstName = firstNameInput.value.trim();
//     var lastName = lastNameInput.value.trim();
//     var passWord = passWordInput.value.trim();
//     var Email = EmailInput.value.trim();
//     var nation = nationInput.value.trim();
//     var sex = SexInput.value.trim();s
//     var adresse = adresseInput.value.trim();
//     var num = numInput.value.trim();
//     var country = countryInput.value.trim();

//     var isValid = true;

//        if(firstName===''){
//         firstNameErrorMessage.textContent= 'Vui lòng nhập Tên của bạn';
//         isValid =false;
//        }else{
//         firstNameErrorMessage.textContent='';
//        }
    
//        if(lastName===''){
//         lastNameErrorMessage.textContent= 'Vui lòng nhập Họ của bạn';
//         isValid =false;
//        }else{
//         lastNameErrorMessage.textContent='';
//        }

//        if (passWord === '') {
//         passWordErrorMessage.textContent = 'Vui lòng nhập Pass của bạn';
//         isValid = false;
//         } else if (!validatePassword2(passWord)) {
//         passWordErrorMessage.textContent = 'Password phải có ít nhất một chữ cái viết hoa.';
//         isValid = false;
//         } else {
//         passWordErrorMessage.textContent = '';
//         }

//        if(Email===''){
//         EmailErrorMessage.textContent= 'Vui lòng nhập Email của bạn';
//         isValid =false;
//        } else if (!validateEmail(Emailip.value)) {
//         EmailErrorMessage.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
//         isValid = false;
//         } else {
//         EmailErrorMessage.textContent = '';
//         }
    
//     if(nation===''){
//         nationErrorMessage.textContent= 'Vui lòng nhập Quốc Gia của bạn';
//         isValid =false;
//        }else{
//         nationErrorMessage.textContent='';
//        }

//        if(sex===''){
//         SexErrorMessage.textContent= 'Vui lòng nhập Giới Tính của bạn';
//         isValid =false;
//        }else{
//         SexErrorMessage.textContent='';
//        }

//        if(adresse===''){
//         adresseErrorMessage.textContent= 'Vui lòng nhập Địa Chỉ của bạn';
//         isValid =false;
//        }else{
//         adresseErrorMessage.textContent='';
//        }
    
//        if(num===''){
//         numErrorMessage.textContent='Vui lòng nhập số điện thoại của bạn.'
//         isValid=false;
//     }else if(!validatePhoneNumber(sdt)){
//         numErrorMessage.textContent='Vui lòng nhập Số Điện Thoại hợp lệ.'
//         isValid=false;
//     }
//     else{
//         sdtErrorMessage.textContent='';
//     }

//     if(country===''){
//         countryErrorMessage.textContent= 'Vui lòng nhập Quê Quán của bạn';
//         isValid =false;
//        }else{
//         countryErrorMessage.textContent='';
//        }

//        if (isValid) {
//         alert('Đã Gửi!');
//         }
// }
    
//     function validatePassword2(passWord) {
//         var passWordRegex = /(?=.*[A-Z])/;
//         return passWordRegex.test(passWord);
//     }

    

    // 

