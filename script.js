function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir img
  if (html.classList.contains("light")) {
    // se tiver ligth mode, adicionar imagem light
    img.setAttribute("scr", "./assets/avatar-light.png")
  } else {
    img.setAttribute("scr", "./assets/avatar.png")
  }
}
