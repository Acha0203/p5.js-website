/*
 * @name width と Height
 * @arialabel 灰色と緑色の水平線のパターン。左半分は白の垂直線も含む。左半分は２つの三角形に分けられ、片方は緑の縞模様、もう一方は白の縞模様が多い
 * @description 変数 'width' と 'height' には、
 * createCanvas()関数で定義された表示ウィンドウの幅と高さが格納されます。
 */
function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(127);
  noStroke();
  for (let i = 0; i < height; i += 20) {
    fill(129, 206, 15);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}
