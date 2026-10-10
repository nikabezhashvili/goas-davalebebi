my_form = document.getElementById('my_form')

my_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const age = e.target.age.value;
    const phone_number = e.target.phone_number.value;
    if(username.length < 4){
        alert('სახელი უნდა იყოს 3 სიმბოლოზე მეტი')
        return
    }
    if(!email.includes('@')){
        alert('ემაილი უნდა შეიცავდეს @ ნიშანს')
        return
    }
    if (password.length < 8) {
        alert('პაროლის სიგრძე უნდა იყოს მინიმუმ 8 სიმბოლო')
        return
    }
    if (phone_number.length === 0) {
        alert('ტელეფონის ნომრის ადგილი არის ცარიელი')
        return
    }
    console.log("Form Submitted Succesfully!");

})