require('dotenv').config();

const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();



// Config: Anzahl der zu erstellenden Einträge
const FLIGHT_COUNT = 50;    // 50 Flights
const PASSENGER_COUNT = 100; // 100 Passengers

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function createFlights() {
  console.log(`Erstelle ${FLIGHT_COUNT} Flights...`);
  const flightsData = Array.from({ length: FLIGHT_COUNT }, () => ({
    flightName: faker.vehicle.manufacturer() + ' ' + faker.vehicle.model(),
    departureTime: faker.date.between({ from: '2023-10-01T00:00:00.000Z', to: '2023-11-01T00:00:00.000Z' }),
    arrivalTime: faker.date.between({ from: '2023-10-01T00:00:00.000Z', to: '2023-11-01T00:00:00.000Z' }),
    departureCity: faker.location.city(),
    arrivalCity: faker.location.city(),
  }));

  await prisma.flight.createMany({ data: flightsData });
  const flights = await prisma.flight.findMany({ select: { id: true } });
  console.log(`${flights.length} Flights erstellt`);
  return flights.map((f) => f.id);
}

async function createPassengers(flightIds) {
  console.log(`Erstelle ${PASSENGER_COUNT} Passengers...`);

  const passengersData = Array.from({ length: PASSENGER_COUNT }, () => ({
    name: faker.person.fullName(),
    ticketPrice: randInt(100, 500),
    flightId: flightIds[randInt(0, flightIds.length - 1)],
  }));

  await prisma.passenger.createMany({ data: passengersData });
  const passengers = await prisma.passenger.findMany({ select: { id: true } });
  console.log(`${passengers.length} Passengers erstellt`);
}

async function main() {
  try {
    console.log("Starte Seeding...");
    console.time("Seeding abgeschlossen");

    const flightIds = await createFlights();
    await createPassengers(flightIds);

    console.timeEnd("Seeding abgeschlossen");
    console.log("Fertig! Starte 'npx prisma studio' um die Daten zu sehen.");
  } finally {
    await prisma.$disconnect();
  }
}

main();
