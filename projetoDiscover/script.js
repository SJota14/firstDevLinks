function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a img

  if (html.classList.contains('light')) {
  // se tiver light mode, adc a img light
  img.setAttribute("src", "imagens/gabigordo dread.png")
  
  } else{
  //  html.classList.add('light')
    img.setAttribute("src", "imagens/gabigordo cassino.png")
  }
}
