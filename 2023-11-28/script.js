const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

const output = document.getElementById("output");
output.publish = function (arg) {
    this.innerHTML = JSON.stringify(arg);
};

const button_push = document.getElementById("button_push");
button_push.addEventListener("click", push);

const button_indexof = document.getElementById("button_indexof");
button_indexof.addEventListener("click", indexof);

const button_includes = document.getElementById("button_includes");
button_includes.addEventListener("click", includes);

const button_slice = document.getElementById("button_slice");
button_slice.addEventListener("click", slice);

const button_of = document.getElementById("button_of");
button_of.addEventListener("click", of);

const button_map = document.getElementById("button_map");
button_map.addEventListener("click", map);

const button_filter = document.getElementById("button_filter");
button_filter.addEventListener("click", filter);

const button_split = document.getElementById("button_split");
button_split.addEventListener("click", split);

const button_join = document.getElementById("button_join");
button_join.addEventListener("click", join);

const button_some = document.getElementById("button_some");
button_some.addEventListener("click", some);

const button_reverse = document.getElementById("button_reverse");
button_reverse.addEventListener("click", reverse);

const button_spread = document.getElementById("button_spread");
button_spread.addEventListener("click", spread);

const button_reduce = document.getElementById("button_reduce");
button_reduce.addEventListener("click", reduce);

function hilfmir(i1){
    document.getElementById("output").innerHTML = i1;
};
function push() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    i1.push(i2);
    console.log(i1);
    hilfmir(i1);
}
function indexof() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.indexOf(i2); 
    hilfmir(result);
    console.log(result);
}
function includes() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.includes(i2);
    hilfmir(result);
    console.log(result);
}
function slice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.slice(i2);
    hilfmir(result);
    console.log(result);
}
function splice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    const result = i1.splice(i2, i3);
    hilfmir(result);
    console.log(result);
}
function of() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    const result = Array.of(i1, i2, i3);
    hilfmir(result);
    console.log(result);
}
function map() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.map(funktion);
    function funktion(number){
        return number * i2;
    };
    hilfmir(result);
    console.log(result);
}
function filter() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.filter(filterer);
    function filterer(zahl){
        return zahl >= i2;
    };
    hilfmir(result);
    console.log(result);
}
function split() {
    const i1 = input1.value.toString(); 
    const i2 = input2.value.toString();
    const result = i1.split(i2);
    hilfmir(result);
    console.log(result);
}
function join() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.join(i2);
    hilfmir(result);
    console.log(result);
}
function some() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.some(something);
    function something(somenumber){
        return somenumber > i2;
    };
    hilfmir(result);
    console.log(result);
}
function reverse() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.reverse(i2);
    hilfmir(result);
    console.log(result);
}
function spread() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    const result = [...i1, ...i2];
    hilfmir(result);
    console.log(result);
}
function reduce() {
    const i1 = eval(input1.value);
    const result = i1.reduce(reduce);
    function reduce(total, num){
        return total - num;
    };
    hilfmir(result);
    console.log(result);

}
