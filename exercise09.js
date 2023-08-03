//Mostrar la suma de los índices donde el índice sea menor al elemento
function sumelementindicemenor(list){
    let sum=0
    for(let i=0; i<list.length;i++){
        if (i<list[i]){
            sum=sum+list[i];
        }
    }
    return sum;

}
let nums = [0,2,1,4]
let result;
result= sumelementindicemenor(nums);
alert(result)
