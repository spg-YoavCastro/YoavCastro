import { PrismaClient } from "generated_client";
import { z } from "zod";
import { new_token } from "./api.ts";
const prisma = new PrismaClient();

interface OpenTDBResponse {
    response_code: number;
    results: {
        category: string;
        type: string;
        difficulty: string;
        question: string;
        correct_answer: string;
        incorrect_answers: string[];
    }[];
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
var alleFragen =0;

async function main() {
    console.log("📥 Fetching questions from OpenTDB...");
    const api_token = await new_token();
    const res = await fetch(`https://opentdb.com/api.php?amount=50&token=${api_token}`);
    const raw = await res.json();

    // zod schema for OpenTDB response
    const OpenTDBSchema = z.object({
        results: z.array(z.object({
            category: z.string(),
            type: z.string(),
            difficulty: z.string(),
            question: z.string(),
            correct_answer: z.string(),
            incorrect_answers: z.array(z.string()),
        }))
    });

    const parsed = OpenTDBSchema.safeParse(raw);
    if (!parsed.success) {
        console.error("OpenTDB response validation failed:", parsed.error.format());
        throw new Error("Invalid response from OpenTDB (see log)");
    }
    const data = parsed.data as OpenTDBResponse;

    let added = 0;
    for (const q of data.results) {
        const type = await prisma.type.upsert({
            where: { type: q.type },
            update: {},
            create: { type: q.type },
        });

        const difficulty = await prisma.difficulty.upsert({
            where: { level: q.difficulty },
            update: {},
            create: { level: q.difficulty },
        });

        const category = await prisma.category.upsert({
            where: { name: q.category },
            update: {},
            create: { name: q.category, opentdb_id: Math.floor(Math.random() * 10000) },
        });

        const correctAnswer = await prisma.answer.create({
            data: { answer: q.correct_answer },
        });

        const incorrectAnswers = await Promise.all(
            q.incorrect_answers.map((ans) =>
                prisma.answer.create({
                    data: { answer: ans },
                })
            )
        );

        await prisma.question.create({
            data: {
                question: q.question,
                correct_answer_id: correctAnswer.id,
                categoryId: category.id,
                difficultyId: difficulty.id,
                typeId: type.id,
                incorrect_answers: {
                    connect: incorrectAnswers.map((a) => ({ id: a.id })),
                },
            },
        });

        added++;
    }
    alleFragen += added;
    console.log(`Added ${added}/${alleFragen}`);
}


const api_token = await new_token();
while(api_token != 4) {
    await main().catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
    await wait(5000);
}

