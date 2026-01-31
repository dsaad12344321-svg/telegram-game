'use client'

import { useEffect, useState } from 'react'

export function useTasks(userId: number | null) {
  const [tasks, setTasks] = useState<any[]>([])

  const loadTasks = async () => {
    if (!userId) return
    const res = await fetch(`/api/tasks?userId=${userId}`)
    setTasks(await res.json())
  }

  useEffect(() => {
    loadTasks()
  }, [userId])

  return { tasks, reload: loadTasks }
}

