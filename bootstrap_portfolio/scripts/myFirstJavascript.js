//alert("hello world!");
var s = "hello";
console.log("variable s is "+s);

function print3Ways() {
    alert("hello world!");
    console.log("in print3ways()");
    document.write("hello world!");
} 

const arr = [1,2,3,4,5];
function sumArray() {
    let tot=0;
    for (let i=0;i<arr.length;i++) {
        tot+=arr[i];
    }
    return tot;
}

function findMin() {
    min=arr[0];
    for (let i=0;i<arr.length;i++) {
        if (arr[i] < min) {
            min=arr[i];
        }
    }
    return min;
}

function findMax() {
    max=arr[0];
    for (let i=0;i<arr.length;i++) {
        if (arr[i] > max) {
            max=arr[i];
        }
    }
    return max;
}
 function average() {
    return sumArray()/arr.length;
 }

function funWithArrays() {
    console.log("inside funWithArrays "+ arr);
     document.write("The sum of the array is "+ sumArray());
    document.write("<br>The min of the array is "+ findMin());
    document.write("<br>The max of the array is "+ findMax());
    document.write("<br>The avg of the array is "+ average());
}

function plainOldFunction() {
    console.log("inside plain old function");
    function nestedFunction() {
        console.log("inside nested function");
    }
    nestedFunction();
}

function callback(name) {
    console.log("hello "+name);
}

function firstFunction(str, helloCallback) {
    helloCallback(str);
}

function soManyFunctions() {
    console.log("inside so many functions");
    plainOldFunction();
    firstFunction("Bob", callback);
}

const dog = {
    name: "Boomer",
    type: "labradoodle",
    age: 10,
    tricks: ["roll over", "sit", "paw"],
    speak: function() {console.log("woof!")}
};
console.log("My dog "+dog.name+" is "
    +dog.age+ " years old and can " + dog.tricks[1]);