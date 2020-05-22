window.addEventListener('load', start);

function start() {
  console.log('app.js is fully load');
  const button = document.querySelector('button');
  button.addEventListener('click', cal);
}

function cal() {
  const arr = [[], [], []];
  let index = 1;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      arr[i][j] = document.getElementById(`index${index}`).value;
      index++;
    }
  }

  console.log(arr);
  // arr[0][0] = document.getElementById('input1').value;
  // arr[0][1] = document.getElementById('input2').value;
  // arr[0][2] = document.getElementById('input3').value;
  // arr[1][0] = document.getElementById('input4').value;
  // arr[1][1] = document.getElementById('input5').value;
  // arr[1][2] = document.getElementById('input6').value;
  // arr[2][0] = document.getElementById('input7').value;
  // arr[2][1] = document.getElementById('input8').value;
  // arr[2][2] = document.getElementById('input9').value;
  diagonalDifference(arr);
}

function diagonalDifference(arr) {
  // Write your code here
  let lrd = 0;
  let rld = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        lrd += arr[i][j];
      }
      if (i === arr.length - 1 && j === 0) {
        for (let x = 0; x < arr.length; x++) {
          rld += arr[i - x][j + x];
        }
      }
    }
  }
  return Math.abs(lrd - rld);
}
