const txt = document.querySelector('.txt')
const ul = document.querySelector('ul')
let deleteBtn = document.createElement('button');
const addBtn = document.querySelector('#addBtn');
let doneBtn = document.createElement('button');
let i = 0;

const removeLi = function () {
    event.target.parentNode.remove();
}
const doneLi = function () {
    event.target.parentNode.classList.add('done');
}

const addLi = function () {
    if (txt.value != "") {
        const li = document.createElement('li');
        const newLi = ul.appendChild(li);
        li.textContent = txt.value + '  ';
        txt.value = "";
        deleteBtn = document.createElement('button');
        doneBtn = document.createElement('button');
        deleteBtn.textContent = "Usuń";
        doneBtn.textContent = "Gotowe";
        li.appendChild(deleteBtn);
        li.appendChild(doneBtn);
        i++;

        deleteBtn.addEventListener('click', removeLi);
        doneBtn.addEventListener('click', doneLi);
    } else {
        alert("Nieprawidłowy format")
    }
}

addBtn.addEventListener('click', addLi);