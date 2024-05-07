const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fakerDE } = require("@faker-js/faker");

async function main() {
    let i = 0;
    let zoo = 5;

    for (i = 0; i < zoo; z++) {
        zoo = {
            land: fakerDE.Land(),
            stadt: fakerDE.Location(),
            adresse: fakerDE.location.streetAdress(),
            baujahr: fakerDE.date.past(),
        };
    }
    const createMany = prisma.zoo.createMany({ data: zoo });

}

