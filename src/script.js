const product = document.querySelector('.product');
const company = document.querySelector('.company');
const connect = document.querySelector('.connect');
const submenuProduct = document.querySelector('.submenu-product');
const submenuCompany = document.querySelector('.submenu-company');
const submenuConnect = document.querySelector('.submenu-connect');
const hamburguerIco = document.getElementById('hamburguerico');
const menuDialog = document.querySelector('.menumobile');
const btnClose = document.querySelector('.btnclose');

btnClose.addEventListener("click", () => {
  product.classList.toggle('flex')
});

hamburguerIco.addEventListener("click", () => {
  
});



product.addEventListener('mouseenter', () => {
  submenuProduct.classList.remove('hidden');
});

product.addEventListener('mouseleave', () => {
  submenuProduct.classList.add('hidden');
});

company.addEventListener('mouseenter', () => {
  submenuCompany.classList.remove('hidden');
});

company.addEventListener('mouseleave', () => {
  submenuCompany.classList.add('hidden');
});

connect.addEventListener('mouseenter', () => {
  submenuConnect.classList.remove('hidden');
});

connect.addEventListener('mouseleave', () => {
  submenuConnect.classList.add('hidden');
});