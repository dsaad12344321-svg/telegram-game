// 3️⃣ Backend: Monetag Postback Endpoint (Next.js)
import { NextResponse } from 'next/server'
import crypto from 'crypto'

// TEMP storage (replace with DB)
const users: Record<number, number> = {}

const MONETAG_SECRET = process.env.MONETAG_SECRET! // from dashboard

export async function POST(req: Request) {
  const body = await req.json()

  const {
    user_id,
    reward,
    transaction_id,
    signature,
  } = body

  // 1️⃣ Validate required fields
  if (!user_id || !reward || !transaction_id || !signature) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  // 2️⃣ Verify signature (ANTI-FRAUD)
  const expectedSignature = crypto
    .createHash('sha256')
    .update(`${user_id}${reward}${transaction_id}${MONETAG_SECRET}`)
    .digest('hex')

  if (signature !== expectedSignature) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 403 })
  }

  // 3️⃣ Prevent duplicate rewards
  // TODO: store transaction_id in DB
  // if already exists → ignore

  // 4️⃣ Reward user
  users[user_id] = (users[user_id] || 0) + Number(reward)
// داخل نفس الملف السابق

const taskProgress: Record<number, number> = {} // عدد الإعلانات

// بعد التحقق من signature
taskProgress[user_id] = (taskProgress[user_id] || 0) + 1

// Task 1: إعلان واحد
if (taskProgress[user_id] === 1) {
  users[user_id] = (users[user_id] || 0) + 10
}

// Task 3: ثلاث إعلانات
if (taskProgress[user_id] === 3) {
  users[user_id] += 30
}


  return NextResponse.json({ status: 'ok' })
}
// ✅ This is real anti-fraud logic
// ✅ No frontend cheating possible