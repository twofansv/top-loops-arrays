

const output = document.querySelector(".output");
output.textContent = "";

let i = 10;

while (i >= 0){
    const para = createElement(`p`);

    if (i === 10) {
        para.textContent(`Countdown to ${i}`);
    }
    else if (i === 0) {
        para.textContent(`Blast Off!`);
    }
    else {
        para.textContent(i);
    }

    output.appendChild(para);

    i--;
}













