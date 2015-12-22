/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var selectionSort = function (n) {
    for (var i = 0; i < n.length; i++){
        var min = n[i];
        var minIndex = i;
        for (var j = i+1; j < n.length; j++) {            
            if (n[j] < n[i]) {
                min = n[j];
                minIndex = j;
            }
        }
        exchange(n, i, minIndex);
    }
};

var exchange = function (data, i, j) {
    var tmp = data[i];
    data[i] = data[j];
    data[j] = tmp;
};

var data = [5, 4, 3, 2, 1];
selectionSort(data);
console.log(data);
