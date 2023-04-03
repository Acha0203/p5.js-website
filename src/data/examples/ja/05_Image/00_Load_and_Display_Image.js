/*
 * @name 画像の読み込みと表示
 * @arialabel 画面左下に宇宙飛行士の画像を半分の大きさで表示する。
 * @description 画像は実際の大きさ、もしくは任意の大きさで表示することができます。
 * <p><em><span class="small"> この例をローカル環境で実行するには画像ファイルと実行中の
 * <a href="https://github.com/processing/p5.js/wiki/Local-server">ローカルサーバー</a>が必要です。</span></em></p>
 */
let img; // 変数imgを宣言する。

function setup() {
  createCanvas(720, 400);
  img = loadImage('assets/moonwalk.jpg'); // 画像ファイルをロードする。
}

function draw() {
  // 画像を実際の大きさで位置(0,0)に表示します。
  image(img, 0, 0);
  // 画像を半分の大きさで位置(0, height/2)に表示します。
  image(img, 0, height / 2, img.width / 2, img.height / 2);
}