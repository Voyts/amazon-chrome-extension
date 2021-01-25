const container = document.body;
const tabOne = document.querySelector('.link1');
const tabTwo = document.querySelector('.link2');
const tabThree = document.querySelector('.link3');
const tabs = document.querySelectorAll('.link');
tabOne.classList.add('activTab');
tabOne.addEventListener('click', () => {
  tabOne.classList.add('activTab');
  tabThree.classList.remove('activTab');
  tabTwo.classList.remove('activTab');
});
tabTwo.addEventListener('click', () => {
  tabTwo.classList.add('activTab');
  tabThree.classList.remove('activTab');
  tabOne.classList.remove('activTab');
});
tabThree.addEventListener('click', () => {
  tabThree.classList.add('activTab');
  tabOne.classList.remove('activTab');
  tabTwo.classList.remove('activTab');
});
