// src/app/api/score/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const created = await prisma.score.create({
      data: {
        name: body.name,
        hole: body.hole,
        strokes: body.strokes,
      },
    });

    return NextResponse.json(created);
  } catch (err) {
    console.error('スコア保存エラー:', err);
    return NextResponse.json({ error: 'スコア保存に失敗しました' }, { status: 500 });
  }
}
