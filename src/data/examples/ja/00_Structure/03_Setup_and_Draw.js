/*
 * @name Setup と Draw
 * @arialabel 黒背景上で白の水平線が画面の下から上へ移動するアニメーション
 * @description draw()関数内のコードは、プログラムが止まるまで
 * 上から下に連続して実行されます。
 * setup()内のコードはプログラムが開始したときに一度だけ実行されます。
 */
let y = 100;

// setup()関数内のステートメントは
// プログラム開始時に一度だけ実行されます。
function setup() {
  // createCanvasステートメントは必ず最初に
  createCanvas(720, 400);
  stroke(255); // 線の色を白に設定
  frameRate(30);
}
// draw()関数内のステートメントはプログラムが停止するまで実行されます。
// 各ステートメントはプログラムの最後の行が
// 読み込まれた後連続して実行され、
// その後最初の行が再度実行されます。
function draw() {
  background(0); // 背景色を黒に設定
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
