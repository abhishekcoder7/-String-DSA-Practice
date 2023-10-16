/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res=[1]
    for(let i =1;i<=rowIndex;i++){
        let arr=[1];
        for(let j =1;j<i;j++){
          arr.push(res[j-1]+res[j]);
        }
        arr.push(1);
        res=arr;
    }
    return res;
};