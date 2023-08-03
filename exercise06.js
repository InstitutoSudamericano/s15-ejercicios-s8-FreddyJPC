// Mostrar la suma elementos que no sean múltiplos de 7
function sumelemt(list){
    let MULT=7;
    let sum=0
    for(let i=0; i<list.length;i++){
        if ((list[i] % MULT)!==0){
            sum=sum+list[i];
        }
    }
    return sum;

}
let nums = [12,14,5,7]
let result;
result= sumelemt(nums);
alert(result)
