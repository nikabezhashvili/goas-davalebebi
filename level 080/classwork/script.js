// გააკეთეთ 1 მაგალით bubling ზე და capturing - ზე
document.getElementById("d1").addEventListener("click", function() {
    console.log("Div d1 clicked (bubbling)");
});

document.getElementById("d2").addEventListener("click", function() {
    console.log("Button btn2 clicked (capturing)");
},{capture:true});