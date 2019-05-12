class Box{
  constructor(x, y, z, r){
    this.pos = createVector(x, y, z);
    this.r = r; // Size
  }

  generate(){
    var boxes = [];
    var newR = this.r/3;
    for(var x = -1; x < 2; x++){
      for(var y = -1; y < 2; y++ ){
        for(var z = -1; z < 2; z++){
          var sum = abs(x) + abs(y) + abs(z);
          if(sum > 1){
            var b = new Box(this.pos.x + x * newR, this.pos.y + y * newR, this.pos.z + z * newR, newR);
            boxes.push(b);
          }
        }
      }
    }
    return boxes;
  }

  show(){
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    fill(color(200, 100, 100));
    box(this.r);
    pop();
  }

}
