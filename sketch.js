let points = [[1,-3],[5,-4],[4,-3],[9,1],[7,2],[8,5],[5,4],[5,5],[3,4],[4,9],[2,7],[0,10],[-2,7],[-4,8],[-3,3],[-5,6],[-5,4],[-8,5],[-7,2],[-9,1],[-4,-3],[-5,-4],[0,-3],[2,-7],[2,-6],[1,-3]]
let ctx;


function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
  

}

function draw() {
  background(255);
  textSize(32);
  fill('#fb8500');
  text('maple', width/2,height/2); // 在 (width/2,height/2) 的位置添加 "maple" 文字
  translate(width/2, height/2);
  let zoom = map(mouseX, 0, width, 0.5, 2); // 設定縮放比例
  scale(zoom); // 縮放畫布
  for (let k = 5; k >= 1; k--) {
    push();
    scale(k/5.0, -k/5.0);
    strokeWeight(k/2.0);
    for (let i = 0; i < points.length-1; i++) {
      let from = color("#d00000");
      let to = color("#e9c46a");
      stroke(gradient(from, to, i/(points.length-2)));
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    }
    let from = color("#d00000");
    let to = color("#e9c46a");
    stroke(gradient(from, to, 1));
    line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
    pop();
  }
}



// 定義gradient函數
function gradient(from, to, percent) {
  let r = red(from) + percent * (red(to) - red(from)); //根據percent值計算紅色通道的值
  let g = green(from) + percent * (green(to) - green(from)); //根據percent值計算綠色通道的值
  let b = blue(from) + percent * (blue(to) - blue(from)); //根據percent值計算藍色通道的值
  return color(r, g, b); //返回最終的漸層顏色
}