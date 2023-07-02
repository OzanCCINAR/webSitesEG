

let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit',calculate)

let alertDOM = document.querySelector('#alert')
let alertFunction = (title,message,color) => `<div class="alert alert-${color} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`





function calculate(event){
    event.preventDefault();

    let score1DOM = document.querySelector('#score1');
    let score2DOM = document.querySelector('#score2');
    


    totalNote = (score1DOM.value * 0.3) + (score2DOM.value * 0.7)
    let resultDOM = document.querySelector('#result');
    


    if(totalNote >= 50 && totalNote <= 60) {
        resultDOM.innerHTML = totalNote
        alertDOM.innerHTML = alertFunction("CC ile geçtiniz!!!","bravo","success");
    } else if(totalNote >= 61 && totalNote <= 75) {
        resultDOM.innerHTML = totalNote
        alertDOM.innerHTML = alertFunction("BB ile geçtiniz!!!!","harika","success")
    } else if(totalNote >= 76 && totalNote <=85) {
        resultDOM.innerHTML = totalNote
        alertDOM.innerHTML = alertFunction("BA ile geçtiniz!!!","wow","success")
    } else if(totalNote >= 86 && totalNote <= 100) {
        resultDOM.innerHTML = totalNote
        alertDOM.innerHTML = alertFunction("AA ile gectiniz","tebrikler","success")
    } else if(totalNote <= 0 || totalNote >100) {
        alertDOM.innerHTML = alertFunction("notunuz geçersiz.","notunuz 0'dan veya 100'den fazla olamaz","danger")
    } else if(totalNote <=49){
        resultDOM.innerHTML = totalNote
        alertDOM.innerHTML = alertFunction("DD ile kaldınız!!!","sıçtın","danger")
    } else {
        alertDOM.innerHTML = alertFunction("geçersiz bilgi","tekrar dene","secondary")
    }
    

    score1DOM.value = '';
    score2DOM.value = '';

}


