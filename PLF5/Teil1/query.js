const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function query(){
    let city = await prisma.zoo.findMany({
            select:{stadt: true}
    })
    console.log("seeding...")
    for(d of city){
        console.log(d.stadt)
    }

    let ids = await prisma.zoo.findMany({select: {id: true}});
    let zooinfo = await prisma.zoo.findMany({
        where:{ id:  ids[0].id}
    })
    console.log("seeding...")
    for(d of zooinfo){
        console.log(`Land: ${d.land}, Stadt: ${d.stadt}, Adresse: ${d.adresse}, Baujahr: ${d.baujahr}, Abteilung: ${d.abteilungen}`)
    }
    
    
}

query()