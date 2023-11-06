
document.getElementById('hamburguerIco').addEventListener('click', () =>{
  document.querySelector('.menumobile').classList.toggle('hidden');

});

document.querySelector('.listProduct').addEventListener('mouseenter', () => {
  document.querySelector('.submenuProduct').classList.toggle('hidden');
  document.querySelector('.arrowIco').style.transform = 'rotate(90deg)';
   
});
document.querySelector('.listProduct').addEventListener('mouseleave', () =>{
  document.querySelector('.submenuProduct').classList.add('hidden');
  document.querySelector('.arrowIco').style.transform = 'rotate(0deg)';
});


document.querySelector('.listCompany').addEventListener('mouseenter', () => {
  document.querySelector('.submenuCompany').classList.toggle('hidden');  
  document.querySelector('.arrowIco1').style.transform = 'rotate(90deg)';
});
document.querySelector('.listCompany').addEventListener('mouseleave', () => {
document.querySelector('.submenuCompany').classList.add('hidden');
document.querySelector('.arrowIco1').style.transform = 'rotate(0deg)';
});  


document.querySelector('.listConnect').addEventListener('mouseenter', () =>{
  document.querySelector('.submenuConnect').classList.toggle('hidden');
  document.querySelector('.arrowIco2').style.transform = 'rotate(90deg)';
});
document.querySelector('.listConnect').addEventListener('mouseleave', () =>{
  document.querySelector('.submenuConnect').classList.add('hidden');
  document.querySelector('.arrowIco2').style.transform = 'rotate(0deg)';
});

window.addEventListener('scroll', function() {
  const sectionTop = infra.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight) {
    this.document.getElementById('hamburguerico').classList.add('animated');
  }
});
