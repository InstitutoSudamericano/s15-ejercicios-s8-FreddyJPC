// Mostrar la suma elementos múltiplos de 3
function sumOnlymultres(list){
    let MULT=3;
    let sum=0
    for(let i=0; i<list.length;i++){
        if ((list[i] % MULT)===0){
            sum=sum+list[i];
        }
    }
    return sum;

}
let nums = [12,3,5,7]
let result;
result= sumOnlymultres(nums);
alert(result)
