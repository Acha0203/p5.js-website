/*
 * @name 画像を作成する
 * @arialabel 黒い背景の左側に青色のグラデーションがかかった正方形。マウスに従って移動するもう1つの青色のグラデーションがかかった正方形があります。
 * @description createImage()関数は、ピクセルの新しいバッファを提供します。この例では、画像のグラデーションを作成します。
 */
let img; // 'img'変数を宣言する。

function setup() {
  createCanvas(720, 400);
  img = createImage(230, 230);
  img.loadPixels();
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let a = map(y, 0, img.height, 255, 0);
      img.set(x, y, [0, 153, 204, a]);
    }
  }
  img.updatePixels();
}

function draw() {
  background(0);
  image(img, 90, 80);
  image(img, mouseX - img.width / 2, mouseY - img.height / 2);
}
