// --- EFEITO LOOP PARA O ELEMENTO COM ID "typing" ---
const texts = [
    "Bem-vindo ao meu site!",
    "Aqui você encontra meus projetos!",
    "Sinta-se à vontade para explorar!"
];

let textIndex = 0;
let charIndex = 0;
const loopSpeed = 80;
const delayBetweenTexts = 1000;

function typeEffectLoop() {
    const currentText = texts[textIndex];
    const typingElement = document.getElementById("typing");

    if (typingElement) {
        if (charIndex < currentText.length) {
            typingElement.innerHTML += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffectLoop, loopSpeed);
        } else {
            setTimeout(() => {
                typingElement.innerHTML = "";
                charIndex = 0;
                textIndex++;

                if (textIndex >= texts.length) {
                    textIndex = 0;
                }

                typeEffectLoop();
            }, delayBetweenTexts);
        }
    }
}

// --- EFEITO ÚNICO PARA ELEMENTOS COM A CLASSE .typing ---
const singleSpeed = 80;

function typeOnce(element) {
    const text = element.textContent.trim();
    element.textContent = "";
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, singleSpeed);
        }
    }

    type();
}

// --- INICIAR TUDO ---
window.onload = () => {
    // inicia o loop do id="typing"
    typeEffectLoop();

    // inicia o efeito único nos .typing
    const elements = document.querySelectorAll(".typing");
    elements.forEach(el => typeOnce(el));
};

 const openCircle = document.getElementById("openCircle");
    const circleBox = document.getElementById("circleBox");

    openCircle.addEventListener("click", () => {
        circleBox.classList.toggle("hidden"); // mostra / esconde
    });