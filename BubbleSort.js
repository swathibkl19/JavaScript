let arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

function bubble_Sort(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }
    return arr;
}

console.log(bubble_Sort(arr));
