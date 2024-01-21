// So liegt der Normalwert bei Männern laut Deutscher Gesellschaft für Ernährung
// im Intervall von 20 bis 25 kg / m², während er sich
// bei Frauen im Intervall von 19 bis 24 kg / m² befindet.

class Person {
    /* Gewicht in kg, Größe in m */
    #name;
    #gewicht;
    #groesse;
    #geschlecht;
    constructor(namePar, gewichtPar, groessePar, geschlechtPar) {
        this.name = namePar;
        this.gewicht = gewichtPar;
        this.groesse = groessePar;
        this.geschlecht = geschlechtPar;
    }


    set name(namePar) {
        if (typeof namePar !== 'string') {
            throw new Error('ungültiger Name');
        }
        if (namePar.length < 1) {
            throw new Error('Name zu kurz');
        }
        this.#name = namePar;
    }

    set gewicht(gewichtPar) {
        // gewicht in kg
        if (gewichtPar < 10 || gewichtPar > 500) {
            throw new Error('ungültiges Gewicht');
        }
        this.#gewicht = gewichtPar;
    }
    get gewicht() {
        return this.#gewicht;
    }
    set groesse(groessePar) {
        if (groessePar < 0.5 || groessePar > 3.0) {
            throw new Error('ungültige Groesse');
        }
        this.#groesse = groessePar;
    }
    get groesse(){
        return this.#groesse;
    }
    set geschlecht(geschlechtPar) {
        if (geschlechtPar !== 'm' && geschlechtPar !== 'w') {
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
    get bmi_m_w(){
        if(this.#geschlecht == 'm' && this.bmi >=20 && this.bmi <=25)
        {
            return "Normalbereich";
        }
        if(this.#geschlecht == 'm' && this.bmi > 25 )
        {
            return "Übergewicht";
        }
        if(this.#geschlecht == 'm' && this.bmi <20)
        {
            return "Untergewicht";
        }
        if(this.#geschlecht == 'w' && this.bmi >=19 && this.bmi <=24)
        {
            return "Normalbereich";
        }
        if(this.#geschlecht == 'w' && this.bmi >24)
        {
            return "Übergewicht";
        }
        if(this.#geschlecht == 'w' && this.bmi <19)
        {
            return "Untergewicht";
        }
    }
    toString() {
        return (
            ' BMI: ' +
            this.bmi +
            ' BMI Bereich: ' +
            this.bmi_m_w
        );
    }
}
/*a = [
    ['Peta', 90, 1.7, 'w'],
    ['Lisa', 50, 3, 'w'], //Wie schaffe ich es, dass hier ein Fehler geworfen wird?
    ['Roland', 70, 1.7, 'w'],
    ['Hans', 80, 1.8, 'w'],
];*/
function BMIOutput(){

    
/*b = a.map((arr) => {
    try {
        return new Person(...arr);
    } catch (e) {
        console.log(e.message);
        return null;
    }
});*/ // jetzt ist b ein Personen-Array
b = new Person(document.getElementById("namePar").value,document.getElementById("gewichtPar").value,document.getElementById("groessePar").value,document.getElementById("geschlechtPar").value);
//b.forEach((p) => console.log(p + ''));
console.log(b.toString());
document.getElementById("output").value = b.toString();
}

