const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fakerDE } = require('@faker-js/faker');

let Kundenanzahl = 10;
let ServiceAnzahl = 10;

async function main(){
    console.log("Seeding Kunden")
    for (let i= 0; i< Kundenanzahl; i++){

        const kunden = {
            name: fakerDE.person.fullName(),
            strasse: fakerDE.location.streetAddress(),
            plz: fakerDE.location.zipCode(),
            ort: fakerDE.location.city(),
            telefonnummer: fakerDE.phone.number(),
            email: fakerDE.internet.email(),
        }
        await prisma.kunden.create({data:kunden});
    }
    console.log("Seeding Service")
    for (let i=0; i<ServiceAnzahl;i++){
        let randomKunde = await prisma.kunden.findMany({select:{kundennummer: true}});
        services = {
            auftrag: fakerDE.finance.transactionDescription(),
            auftragsdatum: fakerDE.date.recent(),
            faelligkeitsdatum: fakerDE.date.future(),
            kosten: parseFloat(fakerDE.finance.amount()),
            kundenId: randomKunde[Math.floor(Math.random()*randomKunde.length)].kundennummer,
        }
        await prisma.service.create({data:services});
    }
}
main()