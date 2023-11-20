const icon=document.querySelector('i');
icon.addEventListener('click', function(){
    icon.classList.toggle('fa-birthday-cake');
    icon.classList.toggle('cake');
});

const btn=document.querySelector('.btn');
btn.addEventListener('click', function(){
    btn.classList.toggle('abonne');
    if(btn.textContent==="Abonné"){
      btn.textContent="S'abonner";
      }
      else{
        btn.textContent="Abonné";
      }
    });