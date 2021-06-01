//Cutting Contents Text
const conTxt=document.querySelectorAll('.con-txt p a');

conTxt.forEach(element => {
 const cutTxT=element.textContent.slice(0, 10)+"...";
 element.textContent =  cutTxT;
});

//Mobile Menu Activate
const mobileMenu =document.querySelector('.mobile-menu');
mobileMenu.onclick = ()=> {
mobileMenu.classList.toggle('active');}