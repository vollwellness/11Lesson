const header = document.createElement('h1');
header.textContent = 'Заголовок страницы';
const headerSpan = document.createElement('span');
headerSpan.textContent = 'more';
header.appendChild(headerSpan);
document.body.appendChild(header);

const paragraph = document.createElement('p');
paragraph.textContent = 'Это текстовый абзац.';
const paragraphSpan = document.createElement('span');
paragraphSpan.textContent = 'more';
paragraph.appendChild(paragraphSpan);
document.body.appendChild(paragraph);

const button = document.createElement('button');
button.textContent = 'Кнопка';
const buttonSpan = document.createElement('span');
buttonSpan.textContent = 'more';
button.appendChild(buttonSpan);
document.body.appendChild(button);