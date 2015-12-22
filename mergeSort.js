/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var merge = function (leftData, rightData) {
    for (i=0; i<leftData.length + rightData.length; i++) {
        if (leftData[i] == null) {
           
        } else if() {
            
        } esle if() {
            
        } else {
            
        }
    }
};

var mergeSort = function (data) {
    // terminate 
    var leftData = new array();
    var rightData = new array();
    var resultData = new array();
    if (data.length > 1) {
        var firstIndex = 0;
        var lastIndex = data.length - 1;
        var middleIndex = (firstIndex + lastIndex)/2;
        for (i = 0; i<= middleIndex; i++) {
            leftData.push(a[i]);
        }
        for (j = middleIndex + 1; j< data.length; j++) {
            rightData.push(a[j]);
        }
        leftData = mergeSort(leftData);
        rightData = mergeSort(rightData);
        resultData = merge(leftData, rightData);
        return resultData;
    } else {
        return data;
    }
    
};


var data = [9,8, 7, 6, 5, 4, 3, 2, 1];
mergeSort(data);
console.log(data);
