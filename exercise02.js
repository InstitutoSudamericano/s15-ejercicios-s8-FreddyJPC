// Mostrar suma donde los indices sean pares
function sumindicepares(list){
    let MULT=2;
    let sum=0
    for(let i=0; i<list.length;i++){
        if ((i % MULT)===0){
            sum=sum+list[i];
        }
    }
    return sum;

}
let nums = [10,50,8,4]
let result;
result= sumindicepares(nums);
alert(result)