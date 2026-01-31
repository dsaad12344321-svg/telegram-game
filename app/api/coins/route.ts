import { NextResponse } from 'next/server'

const users: Record<number, number> = {} // TEMP (replace with DB later)

export async function POST(req: Request) {
  const { userId, amount } = await req.json()

  if (!userId || typeof amount !== 'number') {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }

  users[userId] = (users[userId] || 0) + amount

  return NextResponse.json({
    coins: users[userId],
  })
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = Number(searchParams.get('userId'))

  return NextResponse.json({
    coins: users[userId] || 0,
  })
}
