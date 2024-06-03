
let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
  
}
function palavraAleatoria() {
  let palavras = ["Top Gear Melhor Jogo", "Top Gear super nintendo", "Top Gun ?"];
  return random(palavras);
  
}

function inicialifzaCores(){
   background("whte");
  fill (0);
  textSize (34);
  textAlign (CENTER, CENTER);
}

function palavraParcial(minemo, maximo) {
  let quantidade = map(mouseX, minemo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicialifzaCores();
  
  let texto = palavraParcial(0, width)
  text(texto, 200, 200);
  
}
