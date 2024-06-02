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
        console.log(`Land: ${d.land}, Stadt: ${d.stadt}, Adresse: ${d.adresse}, Baujahr: ${d.baujahr}`)
    }
    
    let alleAbteilungen = await prisma.abteilung.findMany({
        select:{name: true},
        where:{zooId: ids[0].id}
    })

    console.log("seeding...")
    for (d of alleAbteilungen){
        console.log(d.name)
    }

    let alleTiere = await prisma.abteilung.findMany({
        select:{name:true, tiere: true},
        where:{zooId: ids[0].id}
    })

    console.log("seeding...")
    for (d of alleTiere){
        console.log(`Abteilung: ${d.name}, ${d.tiere.length}`)
    }
    
}


query()