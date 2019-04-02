var x = 0;
var result;

function findMax(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[x] < array[i]) {
			       x = i
        }
    }
return array[x];
}
