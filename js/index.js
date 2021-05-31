const conTxt=document.querySelectorAll('.con-txt p a');

conTxt.forEach(element => {
 const cutTxT=element.textContent.slice(0, 10)+"...";
 element.textContent =  cutTxT;
});

