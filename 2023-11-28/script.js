const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

const output = document.getElementById("output");
output.publish = function (arg) {
    this.innerHTML = JSON.stringify(arg);
};

const button_push = document.getElementById("button_push");
button_push.addEventListener("click", push);
button_push.addEventListener("mouseover", push_untertext);

const button_indexof = document.getElementById("button_indexof");
button_indexof.addEventListener("click", indexof);
button_indexof.addEventListener("mouseover", indexof_untertext);

const button_includes = document.getElementById("button_includes");
button_includes.addEventListener("click", includes);
button_includes.addEventListener("mouseover", includes_untertext);

const button_slice = document.getElementById("button_slice");
button_slice.addEventListener("click", slice);
button_slice.addEventListener("mouseover", slice_untertext);

const button_of = document.getElementById("button_of");
button_of.addEventListener("click", of);
button_of.addEventListener("mouseover", of_untertext);

const button_map = document.getElementById("button_map");
button_map.addEventListener("click", map);
button_map.addEventListener("mouseover", map_untertext);

const button_filter = document.getElementById("button_filter");
button_filter.addEventListener("click", filter);
button_filter.addEventListener("mouseover", filter_untertext);

const button_split = document.getElementById("button_split");
button_split.addEventListener("click", split);
button_split.addEventListener("mouseover", split_untertext);

const button_join = document.getElementById("button_join");
button_join.addEventListener("click", join);
button_join.addEventListener("mouseover", join_untertext);

const button_some = document.getElementById("button_some");
button_some.addEventListener("click", some);
button_some.addEventListener("mouseover", some_untertext);

const button_reverse = document.getElementById("button_reverse");
button_reverse.addEventListener("click", reverse);
button_reverse.addEventListener("mouseover", reverse_untertext);

const button_spread = document.getElementById("button_spread");
button_spread.addEventListener("click", spread);
button_spread.addEventListener("mouseover", spread_untertext);

const button_reduce = document.getElementById("button_reduce");
button_reduce.addEventListener("click", reduce);
button_reduce.addEventListener("mouseover", reduce_untertext);

function ausgabe(i1){
    document.getElementById("output").innerHTML = i1;
}
function untertext(text){
    document.getElementById("untertext").innerHTML = text;
    console.log(text);
}
function push() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    i1.push(i2);
    console.log(i1);
    ausgabe(i1);
}
function push_untertext(){
    untertext("</br>Durch Push wird Array 2 mit Array 1 zusammengefügt");
}
function indexof() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.indexOf(i2); 
    ausgabe(result);
    console.log(result);
}
function indexof_untertext(){
    untertext("</br>IndexOf() gibt wieder, an welcher Position ein bestimmter Wert aus den Arrays ist");
}
function includes() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.includes(i2);
    ausgabe(result);
    console.log(result);
}
function includes_untertext(){
    untertext("</br>Includes(), gibt mit true oder false an, ob ein bestimmter Wert im Array vorhanden ist");
}
function slice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.slice(i2);
    ausgabe(result);
    console.log(result);
}
function slice_untertext(){
    untertext("</br>Slice(), gibt ausgewählte Arraywerte wieder. z.B.: 1 Array mit [Glas, Tasse, Krug, Teller] das andere Array mit Zahlenwerten [2,3]. Dann wird Krug, Teller ausgegeben.");
}
function splice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    const result = i1.splice(i2, i3);
    ausgabe(result);
    console.log(result);
}
function splice_untertext(){
    untertext("</br>Splice(), fügt oder entfernt Werte von Array 2 zu Array 1 hinzu an Stelle, die man angibt, z.B.: [2,0]. Also werden Werte an Stelle 2 hinzugefügt und keine entfernt.");
}
function of() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    const result = Array.of(i1, i2, i3);
    ausgabe(result);
    console.log(result);
}
function of_untertext(){
    untertext("</br>Of() erstellt ein neues Array mit allen Werten, welche in den Inputs waren");
}
function map() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.map(funktion);
    function funktion(number){
        return number * i2;
    };
    ausgabe(result);
    console.log(result);
}
function map_untertext(){
    untertext("</br>Map() erstelltfür jedes Element ein neues Array aus der Berechnung die man angegeben hat.");
}
function filter() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.filter(filterer);
    function filterer(zahl){
        return zahl >= i2;
    };
    ausgabe(result);
    console.log(result);
}
function filter_untertext(){
    untertext("</br>FIlter(), filtert Werte bestimmt, wie festgelegt aus.");
}
function split() {
    const i1 = input1.value.toString(); 
    const i2 = input2.value.toString();
    const result = i1.split(i2);
    ausgabe(result);
    console.log(result);
}
function split_untertext(){
    untertext("</br>Split(), teilt NUR Strings an den Werten von Array 2.");
}
function join() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.join(i2);
    ausgabe(result);
    console.log(result);
}
function join_untertext(){
    untertext("</br>Join(), konvertiert alle Arraywerte zu einem String.");
}
function some() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.some(something);
    function something(somenumber){
        return somenumber > i2;
    };
    ausgabe(result);
    console.log(result);
}
function some_untertext(){
    untertext("</br>Some() kontrolliert, ob alle Werte in Array richtig überprüft werden, gibt dies mit true und false an.");
}
function reverse() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.reverse(i2);
    ausgabe(result);
    console.log(result);
}
function reverse_untertext(){
    untertext("</br>Reverse(), dreht die Reihenfolge alle Werte im Array um.");
}
function spread() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    const result = [...i1, ...i2];
    ausgabe(result);
    console.log(result);
}
function spread_untertext(){
    untertext("</br>Spread(), vereinfacht die Ausgabe, sie muss nicht ausgeschrieben werden");
}
function reduce() {
    const i1 = eval(input1.value);
    const result = i1.reduce(reduce);
    function reduce(total, num){
        return total - num;
    };
    ausgabe(result);
    console.log(result);
}
function reduce_untertext(){
    untertext("</br>Reduce(), übergibt Werte aus Eingabe an Funktion und rechnet aus.");
}
