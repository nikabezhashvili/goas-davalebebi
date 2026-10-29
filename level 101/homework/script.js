const myForm = document.getElementById('myForm')
console.log(myForm);

const see = document.getElementById('see')
see.addEventListener('click',()=>{
    pass = document.getElementById('password')
    if (pass.type === 'password') {
        pass.type = 'text'
    } else {
        pass.type = 'password'
    }
})

myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const fnameValue = e.target.fname.value
    const emailValue = e.target.email.value
    const passwordValue = e.target.password.value
    const subpasswordValue = e.target.subpassword.value

    if (fnameValue.length <= 2) {
        const fnameEror = document.getElementById('fnameEror')
        fnameEror.textContent = 'Full name length should be more then 2 simbolo'
        fnameEror.style.color = 'red'
        return
    }else{
        const fnameEror = document.getElementById('fnameEror')
        fnameEror.textContent = ''
    }
    
    if (!emailValue.includes('@')) {
        const emailEror = document.getElementById('emailEror')
        emailEror.textContent = 'enter corect email'
        emailEror.style.color = 'red'
        return
    } else {
        const emailEror = document.getElementById('emailEror')
        emailEror.textContent = ''
    }

    if (passwordValue.length <= 8) {
        const passwordEror = document.getElementById('passwordEror')
        passwordEror.textContent = 'passwork length should be more then 8 simbolo'
        passwordEror.style.color = 'red'
        return
    } else {
        const passwordEror = document.getElementById('passwordEror')
        passwordEror.textContent = ''
    }
    if (subpasswordValue !== passwordValue) {
        const subpasswordEror = document.getElementById('subpasswordEror')
        subpasswordEror.textContent = 'wrong password'
        subpasswordEror.style.color = 'red'
        return
    } else {
        const subpasswordEror = document.getElementById('subpasswordEror')
        subpasswordEror.textContent = ''
    }
    const users = JSON.parse(localStorage.getItem('users')) || []

    const newUser = {
        fullName: fnameValue,
        email: emailValue,
        password: passwordValue
    }
    users.push(newUser)
    localStorage.setItem('users',JSON.stringify(users))
    console.log(newUser);
    
    alert('you are register')
    setTimeout(() => {
        window.location.href = 'login.html'
    }, 1500);
})

