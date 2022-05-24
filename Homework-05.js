


// 2.)Write a JavaScript function to get all possible subsets of given length of the given
// array.

function reverseArr (arr){
    let result = [];
    for (let i = arr.length-1;  i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}


function subArrays(arr , n , newArr = [] , i = 0){ debugger;
    if (arr.length === n) {
        return arr
    }
    for (; i <arr.length; i++) {
        let myArr = [].concat(arr);
        myArr.splice(i,1);
        if(myArr.length === n){
            newArr.push(myArr)
        } else {
            subArrays(myArr,n,newArr,i)
        }
    }

    return reverseArr(newArr)
}

console.log(subArrays([1,2,3,4],3))


// 3.)Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.


function delayDecor(fn,ms){
    return function () {
         setTimeout(() => fn(),ms)
    }
}



// 4.) Implement Debounce decorator
function debounce(func, ms) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this), ms);
    };
}