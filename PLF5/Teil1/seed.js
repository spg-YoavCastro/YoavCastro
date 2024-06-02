const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fakerDE } = require('@faker-js/faker');
async function main() {
    let i = 0;
    let zooCount = 5;
    let MitarbeiterCount = 100;
    const minAbteilungen = 2;
    const maxAbteilungen = 7;
    const minTiere = 5;
    const maxTiere = 20;
    const MitarbeiterAbteilung = 100; 

    for (i = 0; i < zooCount; i++) {
        const zoo = {
            land: fakerDE.location.country(),
            stadt: fakerDE.location.city(),
            adresse: fakerDE.location.streetAddress(),
            baujahr: fakerDE.date.past().getFullYear(),
            abteilungen: { 
                create: Array.from({length:fakerDE.number.int({min:minAbteilungen, max:maxAbteilungen})}).map(() => ({
                    name: fakerDE.animal.type() + " Abteilung", 
                    tiere:{
                    create: Array.from({length:fakerDE.number.int({min:minTiere, max:maxTiere})}).map(() => ({
                        name: fakerDE.person.firstName(), art: fakerDE.animal.type(),
                        })),
                    },
                }),
            )},
        };
        await prisma.zoo.create({ data: zoo });
    }
    /*for (i = 0; i < MitarbeiterCount; i++) {
        const mitarbeiter = {
            name: fakerDE.person.fullName(),
            //zoo: zoo,
            abteilungen: { 
                create: Array.from({length:fakerDE.number.int({min:1, max:4})}).map(() => ({
                    name: fakerDE.animal.type(), 
                })),
            },
        };
        await prisma.mitarbeiter.create({ data: mitarbeiter });
    }*/
    return 'Alles ist gut';
}
main().then((rw) => console.log('seeding done: ', rw)).catch((e) => console.log('Es gab Fehler', e.message));