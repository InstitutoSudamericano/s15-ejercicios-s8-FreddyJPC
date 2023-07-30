// Mostrar la suma elementos impares
function sumImpares(list){
    let MULT=2;
    let sum=0
    for(let i=0; i<list.length;i++){
        if ((list[i] % MULT)!=0){
            sum=sum+list[i];
        }
    }
    return sum;

}
let nums = [3,5,8,4]
let result;
result= sumImpares(nums);
alert(result)