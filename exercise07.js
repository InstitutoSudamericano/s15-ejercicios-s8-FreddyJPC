// Mostrar la suma de los elementos donde y el índice sean iguales

function sumelementindice(list){
    let sum=0
    for(let i=0; i<list.length;i++){
        if (list[i]==i){
            sum=sum+list[i];
        }
    }
    return sum;

}
let nums = [2,1,4,3]
let result;
result= sumelementindice(nums);
alert(result)
