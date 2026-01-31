import { NextResponse } from 'next/server'
import { TASKS } from './data'

const completedTasks: Record<number, Set<string>> = {}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = Number(searchParams.get('userId'))

  const done = completedTasks[userId] || new Set()

  const tasks = TASKS.map(task => ({
    ...task,
    completed: done.has(task.id),
  }))

  return NextResponse.json(tasks)
}
