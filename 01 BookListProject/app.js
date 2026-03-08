const add = document.querySelector('.addBtn');
const form = document.querySelector('form');
const container = document.querySelector('.container');
const formBtns = document.querySelector('.form-btns');
const bookTitle = document.querySelector('#book-title')
const bookAuthor = document.querySelector('#book-author')
const bookMode = document.querySelector('#category')
const save = document.querySelector('#save');
const cancel = document.querySelector('#cancel')

window.addEventListener('DOMContentLoaded', ()=>{
    form.classList.remove('hidden');
    container.classList.add('hidden');
})

add.addEventListener('click', (e)=>{
    form.classList.remove('hidden');
    container.classList.add('hidden');
})

formBtns.addEventListener('click',(e)=>{
    e.preventDefault();
    form.classList.add('hidden');
    container.classList.remove('hidden');
})

save.addEventListener('click', ()=>{
    const card = document.createElement('div');
    card.className = "card border w-[500px] mx-auto mb-2";

    const bookDetailsContainer = document.createElement('div');
    bookDetailsContainer.className = "flex justify-between";

    const bookDetails = document.createElement('div');
    bookDetails.className = "relative left-5 mb-2";

    const h2 = document.createElement('h2');
    h2.textContent = bookTitle.value;

    const h3 = document.createElement('h3');
    h3.textContent = bookAuthor.value;
    bookDetails.append(h2,h3);

    bookDetailsContainer.appendChild(bookDetails);

    const span = document.createElement('span');
    span.className = "relative right-5 top-2 h-8 w-11 p-1 rounded-xl";
    span.textContent = bookMode.value;
    if(bookMode.value === 'Read'){
        span.classList.add('bg-green-500') 
    }else{
        span.className = "relative right-5 top-2 h-8 w-15 p-1 rounded-xl bg-red-500 w-15"; 
    } 
    bookDetailsContainer.appendChild(span);

    const hr = document.createElement('hr');
    hr.className = "w-[95%] m-auto";

    const bookDetailsBtns = document.createElement('div');
    bookDetailsBtns.className = "mt-2 flex justify-around m-2";

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = "bg-orange-400 rounded-xl w-20 p-1 text-white"
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = "bg-orange-400 rounded-xl w-20 p-1 text-white";

    bookDetailsBtns.append(editBtn, deleteBtn);

    card.append(bookDetailsContainer, hr, bookDetailsBtns);
    container.appendChild(card);
})