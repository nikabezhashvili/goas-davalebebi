const myForm = document.getElementById('myForm')

myForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    const nameValue = e.target.name.value
    const lastNameValue = e.target.last_name.value
    const emailValue = e.target.email.value
    const radioValue = e.target.r1.value
    const checkboxValue = e.target.checkbox.checked
    const textareaValue = e.target.mes.value
    if (nameValue.length < 3 || nameValue.includes(' ')) {
        eror_text_name = document.getElementById('eror_text_name')
        eror_text_name.textContent = 'This field is required'
        eror_text_name.style.color = 'hsl(0, 66%, 54%)'
        e.target.name.style.borderColor = 'hsl(0, 66%, 54%)'
        return
    } else {
        eror_text_name = document.getElementById('eror_text_name')
        eror_text_name.textContent = ''
        e.target.name.style.borderColor = 'hsl(169, 82%, 27%)'
    }
//! -------------------------------------------
    if (lastNameValue.length < 3 || lastNameValue.includes(' ')) {
        eror_text_surname = document.getElementById('eror_text_surname')
        eror_text_surname.textContent = 'This field is required'
        eror_text_surname.style.color = 'hsl(0, 66%, 54%)'
        e.target.last_name.style.borderColor = 'hsl(0, 66%, 54%)'
        return
    } else {
        eror_text_surname = document.getElementById('eror_text_surname')
        eror_text_surname.textContent = ''
        e.target.last_name.style.borderColor = 'hsl(169, 82%, 27%)'
    }
//! -------------------------------------------
    if (!emailValue.includes('@')) {
        eror_text_email = document.getElementById('eror_text_email')
        eror_text_email.textContent = 'Please enter a valid email address'
        eror_text_email.style.color = 'hsl(0, 66%, 54%)'
        e.target.email.style.borderColor = 'hsl(0, 66%, 54%)'
        return
    } else {
        eror_text_email = document.getElementById('eror_text_email')
        eror_text_email.textContent = ''
        e.target.email.style.borderColor = 'hsl(169, 82%, 27%)'
    }
//! -------------------------------------------
    if (radioValue === '') {
        eror_text_radio = document.getElementById('eror_text_radio')
        eror_text_radio.textContent = 'Please select a query type'
        eror_text_radio.style.color = 'hsl(0, 66%, 54%)'
        return
    } else {
        eror_text_radio = document.getElementById('eror_text_radio')
        eror_text_radio.textContent = ''
    }

//! -------------------------------------------
    if (textareaValue === '') {
        eror_text_mes = document.getElementById('eror_text_mes')
        eror_text_mes.textContent = 'This field is required'
        eror_text_mes.style.color = 'hsl(0, 66%, 54%)'
        e.target.mes.style.borderColor = 'hsl(0, 66%, 54%)'
        return
    } else {
        eror_text_mes = document.getElementById('eror_text_mes')
        eror_text_mes.textContent = ''
        e.target.mes.style.borderColor = 'hsl(169, 82%, 27%)'
    }

//! -------------------------------------------

    if (!checkboxValue) {
        eror_text_checkbox = document.getElementById('eror_text_checkbox')
        eror_text_checkbox.textContent = 'To submit this form, please consent to being contacted'
        eror_text_checkbox.style.color = 'hsl(0, 66%, 54%)'
        e.target.checkbox.style.borderColor = 'hsl(0, 66%, 54%)'
        return
    } else {
        eror_text_checkbox = document.getElementById('eror_text_checkbox')
        eror_text_checkbox.textContent = ''
        e.target.checkbox.style.borderColor = 'hsl(169, 82%, 27%)'
    }



    setTimeout(() => {
        window.location.reload()
    }, 3000);
})