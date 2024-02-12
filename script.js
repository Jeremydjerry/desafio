const bottao = document.querySelector ('.bottao');

bottao.addEventListener ("click", ()=>{
  const icons = [...document.querySelectorAll (".bt")]
  icons.map ((ele)=>{
    ele.classList.toggle ("remove");
  })
  
})