
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {return response.json()})
    .then(date => console.log(date));