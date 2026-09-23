const par = document.getElementById('par')

const info =  async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let userInfo = await res.json() 
    userInfo.map(elem => {
        par.innerHTML += `
            <div class="card">
                <h2>title: ${elem.title}</h2>
                <h2>body: ${elem.body}</h2>
            </div>
        `
    })
    console.log(userInfo);
}

info()