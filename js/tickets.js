const butt = document.querySelector(".buy-button");
const wrap = document.querySelector(".form-main-wrapper");
// const close = document.querySelector(".close");
var zone = document.querySelector('.Tickets');
var totalPrice = document.querySelector('.total-span');
var bas_plus =document.querySelector('.bas-button-plus');
var bas_minus =document.querySelector('.bas-button-minus');
var bas_input =document.querySelector('.bas-input');
var sen_plus = document.querySelector('.sen-button-plus');
var sen_minus =document.querySelector('.sen-button-minus');
var sen_input =document.querySelector('.sen-input');
var radios = zone.querySelectorAll('.input-tickets');
var inputs = zone.querySelectorAll('input');
// var ticketType = document.querySelector('#tickets-type');
// var basic_id = document.querySelector('#input-basic-id');
// var senior_id = document.querySelector('#input-senior-id');
// var priceBasic = document.querySelector('#priceTicketBasic');
// var priceSenior = document.querySelector('#priceTicketSenior');
// var totalPriceBas = document.querySelector('#totalPriceBasic');
// var totalPriceSen = document.querySelector('#totalPriceSenior');
// var finalTotalPrice = document.querySelector('#finalTotalPrice');
// var basBottom = document.querySelector('.entry-value');
// var senBottom = document.querySelector('.entry-value2');
// var totalPriceNum = 0;
// var entryButPl = document.querySelector('.entry-button-plus');
// var entryButPl2 = document.querySelector('.entry-button-plus2');
// var entryButMin = document.querySelector('.enry-button-minus');
// var entryButMin2 = document.querySelector('.enry-button-minus2');

calc();

// entryButMin2.addEventListener('click', senMinusentry);
// function senMinusentry(){
//     senBottom.value == 0 ? senBottom.value = senBottom.value : senBottom.value--;
//     localStorage.setItem('entrySen', senBottom.value);
//     // calc();
// }

// entryButMin.addEventListener('click', basMinusentry);
// function basMinusentry(){
//     basBottom.value == 0 ? basBottom.value = basBottom.value : basBottom.value--;
//     localStorage.setItem('entryBas', basBottom.value);
//     // calc();
// }

// entryButPl.addEventListener('click', basPlusentry);
// function basPlusentry(){
//     if(basBottom.value == 20){
//         basBottom.value = basBottom.value;
//     } else{
//         basBottom.value ++;
//     }   
//     localStorage.setItem('entryBas', basBottom.value);
//     // calc();
// }

// entryButPl2.addEventListener('click', senPlusentry);
// function senPlusentry(){
//     if(senBottom.value == 20){
//         senBottom.value = senBottom.value;
//     } else{
//         senBottom.value ++;
//     }   
//     localStorage.setItem('entrySen', senBottom.value);
//     // calc();
// }


bas_plus.addEventListener('click', basPlus);
function basPlus(){
    if(bas_input.value == 20){
        bas_input.value = bas_input.value;
    } else{
        bas_input.value ++;
    }   
    localStorage.setItem('bas', bas_input.value);
    calc();
}
bas_minus.addEventListener('click', basMinus);
function basMinus(){
    bas_input.value == 0 ? bas_input.value = bas_input.value : bas_input.value--;   
    localStorage.setItem('bas', bas_input.value);
    calc(); 
}
sen_plus.addEventListener('click', senPlus);
function senPlus(){
    if(sen_input.value == 20){
        sen_input.value = sen_input.value;
    } else{
        sen_input.value ++;
    }
    localStorage.setItem('sen', sen_input.value);
    calc();
}
sen_minus.addEventListener('click', senMinus);
function senMinus(){
    sen_input.value == 0 ? sen_input.value = sen_input.value : sen_input.value--;  
    localStorage.setItem('sen', sen_input.value);
    calc();   
}

for (const input of inputs){
    input.addEventListener('input', calc);
}


function calc(){      
    if (radios[0].checked) {
        localStorage.setItem('radio', 20);
        // ticketType.value = "Permanent exhibition";
    } else if (radios[1].checked){
        localStorage.setItem('radio', 25);
        // ticketType.value = "Temporary exhibition";
    } else if (radios[2].checked){
        localStorage.setItem('radio', 45);
        // ticketType.value = "Combined Admission";
    }          
    let radio = localStorage.getItem('radio');
    bas_input.value = localStorage.getItem('bas') || 0;
    sen_input.value = localStorage.getItem('sen') || 0;    
    // basic_id.value = bas_input.value;
    // senior_id.value = sen_input.value;
    // basBottom.value = bas_input.value;
    // senBottom.value = sen_input.value;    
    // priceBasic.value = radio;
    // priceSenior.value = radio / 2;
    // sen_input.value = senBottom.value;
    // console.log(basic_id.value);
    totalPriceNum = bas_input.value * radio + (sen_input.value * radio / 2);
    totalPrice.innerText = totalPriceNum;
    // totalPriceBas.value = radio * bas_input.value;
    // totalPriceSen.value = radio / 2 * sen_input.value;
    // finalTotalPrice.value = totalPriceNum;
}    

// butt.addEventListener("click", function(){
//     wrap.classList.add('active');
// });

// close.addEventListener("click", function(){
//     wrap.classList.remove('active');
// });

// let date_id = document.querySelector('#date-id');
// let time_id = document.querySelector('#time-id');
// let input_date_id = document.querySelector('#input-date-id');
// let input_time_id = document.querySelector('#input-time-id');
// let date_label = document.querySelector('.label-date');
// let time_label = document.querySelector('.label-time');

// date_id.addEventListener('change', changeDate);
// function changeDate(){
//     input_date_id.value = date_id.value;
// }

// time_id.addEventListener('change', changeTime);
// function changeTime(){
//     input_time_id.value = time_id.value;
//     // console.log(time_id.value);
// }

// var phone_test = /^[0-9|\s-{2,3}]{0,10}$/;
// var email_test =  /([0-9a-z_-]{3,15})+(@)+([a-z]{4,20}\.[a-z]{2,4}$)/;
// var name_test = /^[a-zA-Zа-яА-я\s]{3,15}$/;
// var nameInput = document.querySelector(".nameInput");
// var emailInput = document.querySelector(".emailInput");
// var phoneInput = document.querySelector(".phoneInput");
// var name_wrapper = document.querySelector('.name-wrapper');
// var phone_wrapper = document.querySelector('.phone-wrapper');
// var email_wrapper = document.querySelector('.e-mail-wrapper');


// nameInput.addEventListener('input', () =>{
//     if(!name_test.test(nameInput.value)){
//         name_wrapper.classList.add("error");
//         nameInput.setCustomValidity("Invalid name");
//         // console.log('no');
//     }else {
//         name_wrapper.classList.remove("error");
//         nameInput.setCustomValidity("");
// }
// }
// );

// emailInput.addEventListener('input', () =>{
//     if(!email_test.test(emailInput.value)){
//         email_wrapper.classList.add("error");
//         emailInput.setCustomValidity("Invalid name");
//         // console.log('no');
//     } else {
//         email_wrapper.classList.remove("error");
//         emailInput.setCustomValidity("");
//         // console.log('yes');
//     }
// });

// phoneInput.addEventListener('input', () =>{
//     if(!phone_test.test(phoneInput.value)){
//         phone_wrapper.classList.add("error");
//         phoneInput.setCustomValidity("Invalid name");
//     } else {
//         phone_wrapper.classList.remove("error");
//         phoneInput.setCustomValidity("");
//     }
// });