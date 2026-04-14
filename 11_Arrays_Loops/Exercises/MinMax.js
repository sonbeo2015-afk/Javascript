function minMax(arr) {
    const result = {
        min: arr[0],
        max: arr[0]
    };
    arr.forEach(element => {
        element < result.min && (result.min = element);
        element > result.max && (result.max = element);
    });
    return result;
}