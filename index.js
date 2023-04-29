// modal window avto open and close on click 'Close'



// const overlay = document.querySelector('.overlay');
// const closeBtn = document.querySelector('.close');

// const showModal = () => {
//     overlay.classList.remove('hide');//delete class hide

// };

// const hideModal = () => {
//     overlay.classList.add('hide');//add class hide

// };

// addEventListener('DOMContentLoaded', showModal);
// closeBtn.addEventListener('click', hideModal);

//or


const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');

const toggleModal = () => {
overlay.classList.toggle('hide');//if is class hide => delete, if is not class hide => add
}

addEventListener('DOMContentLoaded', toggleModal);
closeBtn.addEventListener('click', toggleModal);