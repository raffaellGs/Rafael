//Função para o menu subir quando um item for clicado
$(document).ready(function () {
  $(".navbar-nav ").click(function (event) {
    $(".navbar-collapse").collapse('hide');
  });
});

const scrollUp = document.getElementById('arrow')

window.addEventListener('scroll', () =>{
  if(window.pageYOffset > 100){
    scrollUp.classList.add('up')
  }else{
    scrollUp.classList.remove('up')
  }

})