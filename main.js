const addBtn = document.querySelector('#addBtn');
const txt = document.querySelector('.txt')
const ul = document.querySelector('ul')
let deleteBtn = document.createElement('button');
let i = 0;

const removeLi = function(){
    event.target.parentNode.remove();
}

const addLi = function(){
    const li = document.createElement('li');
    const newLi = ul.appendChild(li);
    li.textContent =  txt.value + '  ';
    txt.value = "";
    deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Usuń";
    deleteBtn.classList.add('delete');
    li.appendChild(deleteBtn);
    console.log(deleteBtn.classList);
    i++;
    deleteBtn.addEventListener('click', removeLi);
}

addBtn.addEventListener('click', addLi);