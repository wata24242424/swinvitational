import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const created = await prisma.application.create({
      data: {
        name: body.name,
        score: parseInt(body.score),
        car: body.car,
        pickup: body.pickup || '',
        comment: body.comment || '',
      },
    })

    return NextResponse.json(created)
  } catch (error) {
    console.error('応募エラー:', error)
    return new NextResponse('エラーが発生しました', { status: 500 })
  }
}
