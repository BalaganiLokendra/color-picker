let text1 = document.getElementById("button1");
let text2 = document.getElementById("button2");
let text3 = document.getElementById("button3");
let text4 = document.getElementById("button4");
let back = document.getElementById("colorPickerContainer");
let para = document.getElementById("para");


function work() {
    let tex = text1.textContent;
    document.getElementById("selectedColorHexCode").textContent = tex;
    back.style.backgroundColor = tex;
    para.style.backgroundColor = "#222222";
    para.style.color = "#e0e0e0";
}

function work1() {
    let tex = text2.textContent;
    document.getElementById("selectedColorHexCode").textContent = tex;
    document.getElementById("selectedColorHexCode").textContent = tex;
    back.style.backgroundColor = tex;
    para.style.backgroundColor = "#222222";
    para.style.color = "#e0e0e0";
}

function work2() {
    let tex = text3.textContent;
    document.getElementById("selectedColorHexCode").textContent = tex;
    document.getElementById("selectedColorHexCode").textContent = tex;
    back.style.backgroundColor = tex;
    para.style.backgroundColor = "#222222";
    para.style.color = "#e0e0e0";
}

function work3() {
    let tex = text4.textContent;
    document.getElementById("selectedColorHexCode").textContent = tex;
    document.getElementById("selectedColorHexCode").textContent = tex;
    back.style.backgroundColor = tex;
    para.style.backgroundColor = "#222222";
    para.style.color = "#e0e0e0";
}