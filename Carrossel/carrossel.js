// Criando as variaveis para fazer a seleção das imagens
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItens = items.length; 
// Fim Criando as variaveis para fazer a seleção das imagens

//Selecionando a imagem principal atraves das setas
controls.forEach((control) => {
    control.addEventListener("click", () =>{
        
        const isleft = control.classList.contains("arrow-left"); 
       //Criando um looping 
       if(isleft)
       {
         currentItem -= 1;
       }
       else
       {
         currentItem += 1;
       }
       if(currentItem >= maxItens)
       {
         currentItem = 0;
       }
       if(currentItem < 0)
       {
         currentItem = maxItens -1;
       }
       // Fim Criando um looping 
      
       //Definindo qual e a imagem selecionada
       items.forEach(item => item.classList.remove("atual"));
       //Suavizando e centralizando a imagem selecionada
       items[currentItem].scrollIntoView({
        
         inline: "center",
         behavior: "smooth"
       });
      // Fim Suavizando e centralizando a imagem selecionada
       items[currentItem].classList.add("atual");
       // Fim Definindo qual e a imagem selecionada
    });
});
// Fim Selecionando a imagem principal atraves das setas