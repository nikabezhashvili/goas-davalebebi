my_form = document.getElementById('my_form')

my_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const age = e.target.age.value;
    if (username.length < 7) {
        usernameErorText = document.getElementById('username_eror_text')
        usernameErorText.textContent = 'ტექსტის სიგრძე უნდა იყოს მინიმუმ 7 სიმბოლოიანი'
    } else {
        usernameErorText = document.getElementById('username_eror_text')
        usernameErorText.textContent = ''
    }
    if (!email.includes('@')) {
        emailErorText = document.getElementById('email_eror_text')
        emailErorText.textContent = 'ემაილი არ შეიცავს @-ის ნიშანს'
    } else {
        emailErorText = document.getElementById('email_eror_text')
        emailErorText.textContent = ''
    }
    if (password.length < 8 && password[0] !== password[0].toUpperCase()) {
        passwordErorText = document.getElementById('password_eror_text')
        passwordErorText.textContent = 'პაროლი უნდა იყოს მინიმუმ 8 სიმბოლოიანი და უნდა იწყებოდეს დიდი ასოთი'
    } else {
        passwordErorText = document.getElementById('password_eror_text')
        passwordErorText.textContent = ''
    }
    setTimeout(() => {
        window.location.reload()
    }, 3000);
})