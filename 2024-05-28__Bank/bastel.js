const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fakerDE } = require('@faker-js/faker');
const bankAnzahl = 10;
const Customers = 30;
const AccountsAnzahl = 10;
const TransactionsAnzahl = 50;

async function seed() {
    console.log("seeding bank");
    for (i = 0; i < bankAnzahl; i++){
        bank = {
            bic: fakerDE.finance.bic(),
        }
        await prisma.bank.create({data:bank});
    }  
    console.log("seeding Accounts");
    const findbanks = await prisma.bank.findMany ({select: {id:true}})
    for (i=0; i < AccountsAnzahl; i++){
        accounts= {
            iban: fakerDE.finance.iban(),
            amount: parseFloat(fakerDE.finance.amount()), 
            bankId: findbanks[Math.floor(Math.random()*findbanks.length)].id,
        }
        await prisma.account.create({data:accounts})
    }
    console.log("seeding Customers");
    const findaccount = await prisma.account.findMany ({select: {id:true}})
    for (i = 0; i < Customers; i++){
        customers= {
            name: fakerDE.person.fullName(),
            email: fakerDE.internet.email(),
            account:{
                connect:[
                    {id: findaccount[Math.floor(Math.random()*findaccount.length)].id},
                ]
            }
        }
        await prisma.customer.create({data:customers});
        let findcustomer = await prisma.customer.findMany({select:{id:true}})
        let rndnumb = Math.floor(Math.random()*5);
        for (d = 0 ; d < rndnumb; d++){
            await prisma.customer.update({
                where:{id: findcustomer.length},
                data: {
                    account:{
                        connect:[
                            {id: findaccount[Math.floor(Math.random()*findaccount.length)].id},
                        ]
                    }
                }
            })
        }
    }
    console.log("seeding Transactions");
    let IdCorrect = await prisma.account.findMany({
        select: {id: true},
    })
    for (i=0; i < TransactionsAnzahl; i++){
        let newrandomaccount = IdCorrect[Math.floor(Math.random()* IdCorrect.length)];
        let newrandomaccount2 = IdCorrect[Math.floor(Math.random()* IdCorrect.length)];


        let accountAmount = await prisma.account.findUnique({
            select: {amount:true},
            where:{id: newrandomaccount.id},
        })

        let c = parseFloat([Math.floor(Math.random()* accountAmount.amount)]); 


        transactions= {
            verwendungszweck: fakerDE.finance.transactionDescription(),
            date: fakerDE.date.recent(),
            amount: c,
            fromAcctId: newrandomaccount.id, 
            toAcctId: newrandomaccount2.id, 
        }
        await prisma.transaction.create({data:transactions})

        await prisma.account.update({
            where:{id: newrandomaccount.id},
            data: {amount: accountAmount.amount-c},
        })
        await prisma.account.update({
            where:{id: newrandomaccount2.id},
            data: {amount: accountAmount.amount+c},
        })
    }
}

seed()