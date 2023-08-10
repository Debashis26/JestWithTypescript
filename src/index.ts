
export function add(numbers:string){
    if(numbers==="")
    return 0;
    const negativeRegex=/-\d+/g;
    let arrayOfNum:number[]=[]
    arrayOfNum=numbers.match(negativeRegex)?.map(Number) || [];
    if(arrayOfNum.length==1){
        throw new Error('negatives not allowed')
    }else if(arrayOfNum.length>1){
        throw new Error(`negatives not allowed. The nnegative numbers are ${arrayOfNum}`)
    }else{
        let regex=/-?\d+/g;
        arrayOfNum=numbers.match(regex)?.map(Number) || [];
        return arrayOfNum.reduce((sum, num) => sum + num, 0);
    }
    
}