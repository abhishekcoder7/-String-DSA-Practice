/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false
    const obj={}
    let count=0;
    for(let i =0;i<s.length;i++){
        if(s.charAt(i) in obj){
            obj[s.charAt(i)]=obj[s.charAt(i)]+1;
            count++;
        }else{
            obj[s.charAt(i)]=1;
            count++;
        }
    }
    for(let i=0;i<t.length;i++){
        if(t.charAt(i) in obj){
            obj[t.charAt(i)]-=1;
            count--;
            if(obj[t.charAt(i)]===0){
                delete obj[t.charAt(i)];
            }
        }
    }
    if(count==0) return true;
    else return false;
};