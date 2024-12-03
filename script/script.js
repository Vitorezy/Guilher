var card_character = document.getElementsByClassName("card-character");
var expanded_image = document.getElementById("expanded-image");
var container_info = document.getElementById("container-info");
var texto_personagem_info = document.getElementById("texto-personagem-info");
var nome_personagem_info = document.getElementById("nome-personagem-info");
for (let item of card_character) {
  item.addEventListener("click", () => {
    container_info.style.display = "flex";
    expanded_image.style.backgroundImage =
      item.style.backgroundImage.substring(0, 17) +
      item.style.backgroundImage.substring(17, 18) * 10 +
      item.style.backgroundImage.substring(18);
    document.getElementById("container-info-text").style.backgroundImage =
      item.style.backgroundImage.substring(0, 17) +
      item.style.backgroundImage.substring(17, 18) * 100 +
      item.style.backgroundImage.substring(18);
    nome_personagem_info.innerText = item.title;
    texto_personagem_info.textContent =
      nome_personagem_info.textContent +
      ` se inspira no Gui Pois, tal como o Gui, ` +
      nome_personagem_info.textContent +
      ` é `;
    if (item.title == "Monkey D. Luffy") {
      texto_personagem_info.textContent =
        texto_personagem_info.textContent +
        `alegre, engraçado e de muito bom coração`;
    } else if (item.title == "Naruto Uzumaki") {
      texto_personagem_info.textContent =
        texto_personagem_info.textContent +
        `Determinado, Guerreiro, Brincalhão, esforçado e de ótimo coração`;
    } else if (item.title == "Son Goku") {
      texto_personagem_info.textContent =
        texto_personagem_info.textContent +
        `Forte e sempre se esforça para ajudar as pessoas e seus amigos`;
    } else if (item.title == "Yuji Itadori") {
      texto_personagem_info.textContent =
        texto_personagem_info.textContent +
        `Forte e determinado em proteger os mais fracos`;
    } else if (item.title == "Shoyo Hinata") {
      texto_personagem_info.textContent =
        texto_personagem_info.textContent +
        `Determinado e sempre em busca de melhorar`;
    } else if (item.title == "Ash Ketchum") {
      texto_personagem_info.textContent =
        texto_personagem_info.textContent +
        `Bondoso e sempre capaz de melhorar o dia das pessoas em sua volta`;
    } else if (item.title == "Miguel Diaz") {
      texto_personagem_info.textContent =
        texto_personagem_info.textContent + `Forte e pronto para salvar o dia`;
    } else if (item.title == "Seishiro Nagi") {
      texto_personagem_info.textContent =
        texto_personagem_info.textContent +
        ` Corajoso e está sempre em busca de novas experiências e desafios`;
    }
  });
}
document.getElementById("fechar-info").addEventListener("click", () => {
  container_info.style.display = "none";
});
