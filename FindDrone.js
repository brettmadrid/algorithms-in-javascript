function FindDrone(arr){
// Create a new Map object
    const map = new Map();

// Loop through the array and add each element to the Map
// with the key being the element and the value being the
// number of times it occurs in the array
    for (const num of arr) {
        const count = map.get(num) || 0;
        map.set(num, count + 1);
    }

// Loop through the Map and return the keys where the
// number of occurrences is 1
    for (const [key, value] of map.entries()) {
        if (value === 1) {
            return (key);
        }
    }
    return 0
}

console.log(FindDrone([1,2,3,1,2]))