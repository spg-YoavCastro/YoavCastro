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
p = new Person('Hans', 65, 1.75);
console.log(p.bmi);
console.log(p.gewicht);