export function merge(collection_1 : number[], collection_2 : number[]) : number[] {
    let result : number[] = [] ;
    let pointer = 0;
    for (let i=0; i<collection_1.length; i++) {
        for (let j=pointer; j<collection_2.length; j++) {
            if (collection_1[i] >= collection_2[j]) {
                result.push(collection_2[j]);
                pointer++  
            }
        }
        // if all numbers in collection_2 has been push, push all the rest numbers in collection_1 into result.
        if (pointer == collection_2.length) {
            for (let n=i; n<collection_1.length; n++) {
                result.push(collection_1[n]);
            }
            return result;
        }
        result.push(collection_1[i]);
    }
    // push remainning numbers in collection_2
    for (let i=pointer; i<collection_2.length; i++) {
            result.push(collection_2[i]);
        }
        
    return result;
}