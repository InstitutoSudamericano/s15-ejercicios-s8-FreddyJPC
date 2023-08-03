// Mostrar la suma de los índices donde el elemento es 0
function sumindicecero(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  let nums = [1, 1, 0, 0];
  let result;
  result = sumindicecero(nums);
  alert(result);
  
