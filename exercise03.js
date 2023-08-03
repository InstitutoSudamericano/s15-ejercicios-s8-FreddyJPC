//  Mostrar la suma elementos mayores a 10
function sumelement(list){
    let MULT=10;
    let sum=0
    for(let i=0; i<list.length;i++){
        if ((list[i] > MULT)){
            sum=sum+list[i];
        }
    }
    return sum;

}
let nums = [10,50,8,4]
let result;
result= sumelement(nums);
alert(result)
