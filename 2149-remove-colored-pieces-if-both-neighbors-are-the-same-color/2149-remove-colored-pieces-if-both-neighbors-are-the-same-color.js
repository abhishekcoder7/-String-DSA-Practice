/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let obj ={
        "A":0,
        "B":0
    };
    let arr = colors.split("");
    for(let i=1;i<arr.length-1;i++){
        if(arr[i]==arr[i-1] && arr[i]==arr[i+1]){
            obj[arr[i]]=obj[arr[i]]+1;
        }
    }
    if(obj.A>obj.B) return true;
    else return false;
   
};