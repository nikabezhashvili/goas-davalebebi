myForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    const name = e.target.name.value
    const password = e.target.password.value
    const ConfirmPassword = e.target.ConfirmPassword.value
    const email = e.target.email.value
    const age = e.target.age.value
    const tel = e.target.tel.value
    const FirstName = e.target.FirstName.value
    const LastName = e.target.LastName.value
    // 2
    if (name.length < 5 || name.length > 15) {
        eror_text_name = document.getElementById('eror_text_name')
        eror_text_name.style.color = 'red'
        eror_text_name.textContent = 'user name-ის სიგრძე უნდა იყოს 5 სიმბოლოდან 15 სიმბოლომდე'
        return
    } else {
        eror_text_name.textContent = ''
    }
    // 3
    if (password !== ConfirmPassword) {
        eror_text_password = document.getElementById('eror_text_password')
        eror_text_password.style.color = 'red'
        eror_text_password.textContent = 'პაროლი არასწორად არის გამეორებული'
        return
    } else {
        eror_text_password.textContent = ''
    }
    // 4
    if (!email.includes('@')) {
        eror_text_email = document.getElementById('eror_text_email')
        eror_text_email.style.color = 'red'
        eror_text_email.textContent = 'შეიყვანეთ სწორი ემაილი'
        return
    } else {
        eror_text_email.textContent = ''
    }
    if (age < 18) {
        eror_text_age = document.getElementById('eror_text_age')
        eror_text_age.style.color = 'red'
        eror_text_age.textContent = 'თქვენი ასაკი 18-ის ან 18-ზე მეტი უნდა იყოს'
        return
    } else {
        eror_text_age.textContent = ''
    }
    if (tel[0] !== '5') {
        eror_text_tel = document.getElementById('eror_text_tel')
        eror_text_tel.style.color = 'red'
        eror_text_tel.textContent = 'შემოიყვანეთ სწორი ტელეფონის ნომერი'
        return
    } else {
        eror_text_tel.textContent = ''
    }
    if (FirstName[0] !== FirstName[0].toUpperCase && LastName[0] !== LastName[0].toUpperCase) {
        fname = document.getElementById('fname')
        fname.style.color = 'red'
        fname.textContent = 'სახელიც და გვარიც უნდა იწყებოდეს დიდი ასოთი'
        return
    } else {
        fname.textContent = ''
    }
})