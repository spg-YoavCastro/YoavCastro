const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fakerDE } = require('@faker-js/faker');
const bankAnzahl = 10;
const Customers = 300;
const AccountsAnzahl = 100;
const TransactionsAnzahl = 50;

async function seed() {

    for (i = 0; i < bankAnzahl; i++){
        bank = {
            bic: fakerDE.finance.bic(),
            }
            await prisma.bank.create({data:bank});
        }  
    
    const findbanks = await prisma.bank.findMany ({select: {id:true}})
    for (i=0; i < AccountsAnzahl; i++){
        accounts= {
            iban: fakerDE.finance.iban(),
            bankId: findbanks[Math.floor(Math.random()*10)].id,
        }
        console.log(findbanks[Math.floor(Math.random()*10)].id)
        await prisma.account.create({data:accounts})
    }

    for (i=0; i < Customers; i++){
        customers= {
            name: fakerDE.person.fullName(),
            email: fakerDE.internet.email(),
        }
        await prisma.customer.create({data:customers})
    }


    /*for (i=0; i < TransactionsAnzahl; i++){
        transactions= {
            verwendungszweck: fakerDE.,
            email: fakerDE.internet.email,
        }
        await prisma.costumer.create({data:customers})
    }*/
}

seed()