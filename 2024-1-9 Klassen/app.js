class Person{
    /* Gewicht in kg, Größe in m*/
    name;

    #gewicht;

    groesse;

    constructor(name, gewicht, groesse){
        this.name = name;
        this.gewicht = gewicht;
        this.groesse = groesse;

    }
    get bmi(){
        return this.#gewicht/(this.groesse*this.groesse);
    }
    
    set gewicht(gewichtPar){
        //gewicht in kg
        if(gewichtPar < 1 || gewichtPar > 500){
            throw new Error("ungültiges Gewicht")
        }
        this.#gewicht = gewichtPar;
    }
    get gewicht(){
        return this.#gewicht;
    }
}
p = new Person('Hans', 65, 1.75);
console.log(p.bmi);
console.log(p.gewicht);