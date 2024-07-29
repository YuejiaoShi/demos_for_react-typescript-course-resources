var userName;
userName = "Yuejiao";
var user;
user = {
    name: "Yuejiao",
    age: 25,
    isAdmin: true,
    id: "abc12",
};
// array type
var hobbies;
hobbies = ["badminton", "swimming", "cycling"];
// type in function
function add(a, b) {
    var result = a + b;
    //   console.log(result);
    return result;
}
// create a function to receive another function as parameter
function calculate(a, b, calFunc) {
    return calFunc(a, b);
}
console.log(calculate(1, 2, add));
