function anagrams(A, B) {
    if(sorter(A) === sorter(B)){
    	console.log("Anagram");
    }else{
    	console.log("Not an Anagram");
    }
}

function sorter(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}   

anagrams('abc','cbaad')