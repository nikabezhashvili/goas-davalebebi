const loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const allUsers = JSON.parse(localStorage.getItem('users')) || []
    console.log(allUsers);
    const emailValue = e.target.em.value
    const passValue = e.target.pass.value
    const finduser = allUsers.filter(user => user.email === emailValue)
    console.log(finduser);
    if (finduser[0].password !== passValue) {
        alert('no no my brother')
    }
    alert('all done you will go to main page ')
    setTimeout(() => {
        window.location.href = 'home.html'
    }, 1000);
})