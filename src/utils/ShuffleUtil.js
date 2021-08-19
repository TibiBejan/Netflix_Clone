const Shuffle = (arr) => {
    let length = arr.length, temp, index;
    
    while(length) {
        index = Math.floor(Math.random() * length--);
        temp = arr[length];
        arr[length] = arr[index];
        arr[index] = temp;
    }

    return arr;
}

export default Shuffle;