// Mostrar la suma de los elementos donde el índice sea mayor al elemento

function sumelementindicemayor(list){
    let sum=0
    for(let i=0; i<list.length;i++){
        if (i>list[i]){
            sum=sum+list[i];
        }
    }
    return sum;

}
let nums = [0,2,1,1]
let result;
result= sumelementindicemayor(nums);
alert(result)
