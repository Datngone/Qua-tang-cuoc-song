const button1 = document.getElementById("movebtn1");
const button2 = document.getElementById("movebtn2");
const button3 = document.getElementById("movebtn3");

const openbutton1 = document.getElementById("btn1");
const openbutton2 = document.getElementById("btn2");
const openbutton3 = document.getElementById("btn3");

const answerbutton1 = document.getElementById("answerbutton1");
const answerbutton2 = document.getElementById("answerbutton2");
const answerbutton3 = document.getElementById("answerbutton3");

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");

const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const no3 = document.getElementById("no3");

const noans1 = document.getElementById("nomovebtn1");
const noans2 = document.getElementById("nomovebtn2");
const noans3 = document.getElementById("nomovebtn3");

const distantbetween = (p1x, p1y, p2x, p2y) =>{
    const dx = p1x - p2x;
    const dy = p1y - p2y;
    return Math.sqrt(dx * dx + dy * dy);
}

let bx1, by1, bx2, by2, bx3, by3;

function updateButtonPosition() {
    const buttonRect1 = button1.getBoundingClientRect();

    bx1 = buttonRect1.left + buttonRect1.width / 2;
    by1 = buttonRect1.top + buttonRect1.height / 2;

    const buttonRect2 = button2.getBoundingClientRect();

    bx2 = buttonRect2.left + buttonRect2.width / 2;
    by2 = buttonRect2.top + buttonRect2.height / 2;

    const buttonRect3 = button3.getBoundingClientRect();

    bx3 = buttonRect3.left + buttonRect3.width / 2;
    by3 = buttonRect3.top + buttonRect3.height / 2;
}

updateButtonPosition();

window.addEventListener('resize', updateButtonPosition);

document.addEventListener('mousemove', (event) =>{
    const radius = Math.max(
        button1.offsetHeight * 0.75, 
        button1.offsetWidth * 0.75, 
        100);

    const dist = distantbetween(event.clientX, event.clientY, bx1, by1);
    const angle = Math.atan2(event.clientY - by1, event.clientX - bx1);

    const ox1 = -1 * Math.cos(angle) * Math.max(radius - dist, 0);
    const oy1 = -1 * Math.sin(angle) * Math.max(radius - dist, 0);

    const rx1 = oy1 / 2;
    const ry1 = -ox1 / 2;

    button1.style.transform = `translate(${ox1}px, ${oy1}px) rotateX(${rx1}deg) rotateY(${ry1}deg)`
    button1.style.boxShadow = `0px ${Math.abs(oy1)}px ${Math.abs(oy1) / radius * 40}px rgba(0,0,0,.15)`
})

document.addEventListener('mousemove', (event) =>{
    const radius = Math.max(
        button2.offsetHeight * 0.75, 
        button2.offsetWidth * 0.75, 
        100);

    const dist = distantbetween(event.clientX, event.clientY, bx2, by2);
    const angle = Math.atan2(event.clientY - by2, event.clientX - bx2);

    const ox2 = -1 * Math.cos(angle) * Math.max(radius - dist, 0);
    const oy2 = -1 * Math.sin(angle) * Math.max(radius - dist, 0);

    const rx2 = oy2 / 2;
    const ry2 = -ox2 / 2;

    button2.style.transform = `translate(${ox2}px, ${oy2}px) rotateX(${rx2}deg) rotateY(${ry2}deg)`
    button2.style.boxShadow = `0px ${Math.abs(oy2)}px ${Math.abs(oy2) / radius * 40}px rgba(0,0,0,.15)`
})

document.addEventListener('mousemove', (event) =>{
    const radius = Math.max(
        button3.offsetHeight * 0.75, 
        button3.offsetWidth * 0.75, 
        100);

    const dist = distantbetween(event.clientX, event.clientY, bx3, by3);
    const angle = Math.atan2(event.clientY - by3, event.clientX - bx3);

    const ox3 = -1 * Math.cos(angle) * Math.max(radius - dist, 0);
    const oy3 = -1 * Math.sin(angle) * Math.max(radius - dist, 0);

    const rx3 = oy3 / 2;
    const ry3 = -ox3 / 2;

    button3.style.transform = `translate(${ox3}px, ${oy3}px) rotateX(${rx3}deg) rotateY(${ry3}deg)`
    button3.style.boxShadow = `0px ${Math.abs(oy3)}px ${Math.abs(oy3) / radius * 40}px rgba(0,0,0,.15)`
})

openbutton1.addEventListener('click', () => {
    answerbutton1.style.visibility = "visible";
    q1.style.visibility = "visible";
})

openbutton2.addEventListener('click', () => {
    answerbutton2.style.visibility = "visible";
    q2.style.visibility = "visible";
})

openbutton3.addEventListener('click', () => {
    answerbutton3.style.visibility = "visible";
    q3.style.visibility = "visible";
})

noans1.addEventListener('click', () => {
    no1.style.visibility = "visible";
})

noans2.addEventListener('click', () => {
    no2.style.visibility = "visible";
})

noans3.addEventListener('click', () => {
    no3.style.visibility = "visible";
})