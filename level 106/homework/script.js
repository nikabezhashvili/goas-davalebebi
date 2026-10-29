// 1
const par = document.getElementById('par')
const apiInfo = async () => {
    const data1 = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data2 = await data1.json()
    console.log(data2);
    data2.map(i => {
        par.innerHTML += `
            <h2>body: ${i.body}</h2>
            <h3>id: ${i.id}</h3>
            <h3>title: ${i.title}</h3>
            <p>userId: ${i.userId}</p>
        `
    })
}

apiInfo()

// 2 მოკლედ ასინქრონიზაცია პრინციპია როდესაც ერთი რაღაცა რომ კეთდება მას არ ელოდება და სხვა რამესაც აკეთებს


// 3 status: 200 - როცა მოთხოვნა შესრულდა
// Response: OK - სერვერმა სერვერმა მოთხოვნა მიიღო და სწორად დაგიბრუნა 

// 4
// async - ფუნქციას ასინქრონულს ხდის.
// await - ელოდება Promise-ის შედეგს.

// 5 დონე

// 6 დონე

