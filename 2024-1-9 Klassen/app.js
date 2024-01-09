class Person{
    /* Gewicht in kg, Größe in m*/
    name;

    #gewicht;

    #groesse;

    constructor(name, gewicht, groesse){
        this.name = name;
        this.gewicht = gewicht;
        this.groesse = groesse;

    }
    get bmi(){
        return Math.round(this.#gewicht/(this.#groesse*this.#groesse)).toFixed(1);

    }
    
    set gewicht(gewichtPar){
        //gewicht in kg
        if(gewichtPar < 1 || gewichtPar > 500){
            throw new Error("ungültiges Gewicht")
        }
        this.#gewicht = gewichtPar;
    }
    set groesse(groessePar){
        //gewicht in kg
        if(groessePar < 0,5 || groessePar > 3){
            throw new Error("ungültige Größe")
        }
        this.#groesse = groessePar;
    }
    get gewicht(){
        return this.#gewicht;
    }
    get groesse(){
        return this.#groesse;
    }
}
p1 = new Person('Hans', 65, 1.75);
p2 = new Person('Michi', 80, 1.70);
p3 = new Person('Sepp', 120, 2.1);
p4 = new Person('Felix', 40, 1.2);
console.log("Person 1:"p1.bmi);
console.log(p2.bmi);
console.log(p3.bmi);
console.log(p4.bmi);

