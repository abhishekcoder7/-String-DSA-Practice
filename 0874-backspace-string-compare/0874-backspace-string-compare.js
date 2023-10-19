/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Can also be solved using stack approach
var backspaceCompare = function(s, t) {
    function compareStr(str){
        let erase=0;
        let ans="";
        for(let i=str.length-1;i>=0;i--){
            if(str[i]=='#'){
                erase++;
            }else if(erase>0){
                erase--;
            }else{
                ans+=str[i];
            }
        }
        return ans;
    }
    return compareStr(s)===compareStr(t);
};