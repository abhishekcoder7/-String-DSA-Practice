/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ");
    let n_arr=[];
    arr.forEach((item)=>{
        let x = item.split("");
        let rev_x = x.reverse();
        item = rev_x.join("");
        n_arr.push(item);
    })
    let str =  n_arr.join(" ");
    return str;
};