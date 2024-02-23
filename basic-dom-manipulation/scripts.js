const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.classList.add('red-text');
para.style['color'] = 'red';

container.appendChild(para);

const heading = document.createElement('h3');
heading.textContent = "I'm a blue h3";
heading.style['color'] = 'blue';

document.body.appendChild(heading);

const div = document.createElement('div');
div.style['backgroundColor'] = 'pink';
div.style['borderColor'] = 'black';

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";
div.appendChild(heading1);

const anotherPara = document.createElement("p");
anotherPara.textContent = "ME TOO!";
div.appendChild(anotherPara);

document.body.appendChild(div);

const btn = document.querySelector("#btn");

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

btn.addEventListener('click', (e) =>{
    console.log(e.target);
});