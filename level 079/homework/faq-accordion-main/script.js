let img1 = document.getElementById('img1')
let p1 = document.getElementById('js1')
change1 = () => {
    if (img1.src.includes('icon-plus.svg')) {
        img1.src = 'icon-minus.svg';
        p1.style.display = 'block';
        p1.textContent = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    } else {
        img1.src = 'icon-plus.svg';
        p1.textContent = ''
    }
};


let img2 = document.getElementById('img2')
let p2 = document.getElementById('js2')
change2 = () => {
    if (img2.src.includes('icon-plus.svg')) {
        img2.src = 'icon-minus.svg';
        p2.style.display = 'block';
        p2.textContent = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    } else {
        img2.src = 'icon-plus.svg';
        p2.textContent = ''
    }
};



let img3 = document.getElementById('img3')
let p3 = document.getElementById('js3')
change3 = () => {
    if (img3.src.includes('icon-plus.svg')) {
        img3.src = 'icon-minus.svg';
        p3.style.display = 'block';
        p3.textContent = "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    } else {
        img3.src = 'icon-plus.svg';
        p3.textContent = ''
    }
};


let img4 = document.getElementById('img4')
let p4 = document.getElementById('js4')
change4 = () => {
    if (img4.src.includes('icon-plus.svg')) {
        img4.src = 'icon-minus.svg';
        p4.style.display = 'block';
        p4.textContent = "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    } else {
        img4.src = 'icon-plus.svg';
        p4.textContent = ''
    }
};



