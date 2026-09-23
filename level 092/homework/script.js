// 1
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data))

// 2
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => console.log(data))

// 3
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(res => res.json())
    .then(data => console.log(data))
