let a = 0;
let b, sponge = [];
function setup() {
  createCanvas(400, 400, WEBGL);
  // normalMaterial();
  b = new Box(0, 0, 0, 200);
  sponge.push(b);

}

function mousePressed() {
  var next = [];
  for(var b of sponge){
    var newBoxes = b.generate();
    for(var i = 0; i < newBoxes.length; i++){
      next.push(newBoxes[i]);
    }
  }
  sponge = next;
}

function draw() {
  background(51);
  noStroke();
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);

  rotateX(a);
  rotateY(a * 0.4);
  rotateZ(a * 0.1);

  for(var box of sponge){
    box.show();
  }



  a += 0.005;
}
