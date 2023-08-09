
export function add(numbers:string){
    if(numbers==="")
    return 0;
    let regex=/[0-9]/g;
    const arrayOfNum=numbers.match(regex)?.map(Number) || [];;
    return arrayOfNum.reduce((sum, num) => sum + num, 0);
}