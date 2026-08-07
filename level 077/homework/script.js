// 1
document.body.innerHTML = '<p>This is a paragraph.</p>'

// 2
document.body.innerHTML = '<h2>Subheading</h2>'
let h2 = document.getElementsByTagName('h2')[0]
h2.textContent = 'Updated Subheading'

// 3
document.body.innerHTML = '<div>This is a div.</div>'
let div = document.getElementsByTagName('div')[0]
div.remove()

// 4
document.body.innerHTML = '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>'
let li1 = document.getElementsByTagName('li')[0]
let li3 = document.getElementsByTagName('li')[2]
console.log(li1,li3);

// 5
document.body.innerHTML = '<h3>Inserted Heading.</h3>'

// 6
document.body.innerHTML = '<div id="container"></div>';
let div = document.getElementById('container')
div.innerHTML = '<span>This is a span.</span>';
let span = document.getElementsByTagName('span')[0];
console.log(div);
