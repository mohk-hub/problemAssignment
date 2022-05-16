function getMissingNo(a)
{
    let n = a.length;
    let sortA = a.sort;
    let output;
     
    for (i = 0; i<n; i++){
		if(sortA[i]!=i){
    		output = i;
		}
    }
    return output;
}
 
//Driver Program
    let arr = [3,0,1];
    document.write(getMissingNo(arr));
