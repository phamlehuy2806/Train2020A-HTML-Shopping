function createTable(size, defaultValue) {
    let tb = [];
    for (let i = 0; i < size; i++) {
        let arr = [];
        for (let j = 0; j < size; j++) {
            arr.push(defaultValue);
        }
        tb.push(arr);
    }
    return tb;
}

let vector = {

  x: 1,
  y: 0,
};

function rotate(vector) {
  let result = {
    x: vector.y,
    y: -vector.x,
  };
  return result;
}


function checkCollision(current, size) {

  if (
    current.x < 0 ||
    current.x > size -1 ||
    current.y < 0 ||
    current.y > size -1
  ) {
    return false;
  }
  return true;
}

function canRotate(current, vector, matrix, size) {
    let rVect = rotate(vector);
    let rPos = move(current, rVect);
    if (checkCollision(rPos, size)) {
        if (matrix[rPos.x][rPos.y] == 0) {
            return true;
        }
    }

    return false;
}

function move(current, vector) {

  let rPos = {
    y: current.y + vector.y,
    x: current.x + vector.x,
  };
  return rPos;
}
function rotate(vector) {
  let result = {
    x: vector.y,
    y: -vector.x,
  };
  return result;
}
function spiral(size, vector) {

  let matrix = createTable(size, 0);
  let step = 1;
  let current = {

    x: Math.floor(size / 2) -1,
    y: Math.floor(size / 2) ,

  };
  console.log(current);
  while (checkCollision(current, size)) {
    if (canRotate(current, vector, matrix, size)) {
      vector = rotate(vector);
    }
    current = move(current, vector);
    if (checkCollision(current, size)) {
      matrix[current.x][current.y] = step;
      step++;

    }
    return matrix;
}

