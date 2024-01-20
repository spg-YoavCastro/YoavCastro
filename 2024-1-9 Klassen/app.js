// So liegt der Normalwert bei Männern laut Deutscher Gesellschaft für Ernährung
// im Intervall von 20 bis 25 kg / m², während er sich
// bei Frauen im Intervall von 19 bis 24 kg / m² befindet.

class Person {
    /* Gewicht in kg, Größe in m */
    #name;
    #gewicht;
    #groesse;
    #geschlecht;
    constructor(namePar, gewichtPar, groessePar, GeschlechtPar) {
        this.name = namePar;
        this.gewicht = gewichtPar;
        this.groesse = groessePar;
        this.#geschlecht = geschlechtPar;
    }


    set name(namePar) {
        if (typeof namePar !== 'string') {
            throw new Error('ungültiger Name');
        }
        if (namePar.length < 3) {
            throw new Error('Name zu kurz');
        }
        this.#name = namePar;
        document.getElementById(namePar);
    }

    set gewicht(gewichtPar) {
        // gewicht in kg
        if (gewichtPar < 10 || gewichtPar > 500) {
            throw new Error('ungültiges Gewicht');
        }
        this.#gewicht = gewichtPar;
        document.getElementById(gewichtPar);
    }
    get gewicht() {
        return this.#gewicht;
    }
    set groesse(groessePar) {
        if (groessePar < 0.5 || groessePar > 3.0) {
            throw new Error('ungültige Groesse');
        }
        this.#groesse = groessePar;
        document.getElementById(groessePar);
    }
    get groesse(){
        return this.#groesse;
    }
    set geschlecht(geschlechtPar) {
        if (geschlechtPar !== 'Männlich' && geschlechtPar !== 'Weiblich') {
            throw new Error('Ungültiges Geschlecht');
        }
        this.#geschlecht = geschlechtPar;
    }

    get geschlecht() {
        return this.#geschlecht;
    }

    get bmi() {
        const nmbr = this.#gewicht / (this.#groesse * this.#groesse);
        return Math.round(nmbr * 10) / 10;
    }
    
    toString() {
        return (
            'Name: ' +
            this.#name +
            ' Gewicht: ' +
            this.#gewicht +
            ' Größe: ' +
            this.#groesse +
            ' BMI: ' +
            this.bmi
        );
    }
}
