const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fakerDE } = require('@faker-js/faker');
async function main() {
    // throw new Error('XY');
    let i = 0;
    let zooCount = 5;
    const minAbteilungen = 2;
    const maxAbteilungen = 7;
    const minTiere = 5;
    const maxTiere = 20;

    for (i = 0; i < zooCount; i++) {
        const zoo = {
            land: fakerDE.location.country(),
            stadt: fakerDE.location.city(),
            adresse: fakerDE.location.streetAddress(),
            baujahr: fakerDE.date.past().getFullYear(),
            abteilungen: { 
                create: Array.from({length:fakerDE.datatype.number({min:minAbteilungen, max:maxAbteilungen})}).map(() => ({
                    name: fakerDE.animal.type(), 
                    tiere:{
                    create: Array.from({length:fakerDE.datatype.number({min:minTiere, max:maxTiere})}).map(() => ({name: fakerDE.name.firstName(), art: fakerDE.animal.type(),
    
                    })),
                },
            })),
            }
        };
        await prisma.zoo.create({ data: zoo });
    }
    return 'Alles ist gut';

}
main()
    .then((rw) => console.log('seeding done: ', rw))
    .catch((e) => console.log('Es gab Fehler', e.message));
