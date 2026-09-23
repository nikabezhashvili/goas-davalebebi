const par = document.getElementById('par')
const info =  async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos')
    let date = await res.json() 
    console.log(date);
    
    date.map(elem => {
        par.innerHTML += `
            <div class="card">
                <h2>Title: ${elem.title}</h2>
                <h2>Id: ${elem.id}</h2>
                <h2>User id: ${elem.userId}</h2>
                <h2>Completed: ${elem.completed}</h2>
            </div>
        `
    })
}
info()

// 2
// status: 200 ნიშნავს რომ კოდი შესრულდა ხოლო ok იგივე ბულიანი True-არის

// 3
// async გამოიყენება რომ კოდი გავხადოთ ასინქრონული ხოლო await რომ კოდს დაალოდინოს

// 4,5 
// done
