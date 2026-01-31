'use client'

import { useTasks } from '../hooks/useTasks'
import { getTelegramUser } from '../lib/getTelegramUser'

declare global {
  interface Window {
    show_10544894: any
  }
}

export default function Tasks() {
  const user = getTelegramUser()
  const { tasks, reload } = useTasks(user?.id || null)

  const startAdTask = async () => {
    await window.show_10544894({
      userId: user?.id,
    })

    // لا نعطي مكافأة هنا ❌
    setTimeout(reload, 2000) // ننتظر postback
  }

  return (
    <div>
      <h2>📝 Tasks</h2>

      {tasks.map(task => (
        <div key={task.id} style={{ marginBottom: 10 }}>
          <span>{task.title}</span>

          {task.completed ? (
            <strong> ✅ Done</strong>
          ) : (
            <button onClick={startAdTask}>
              Start (+{task.reward})
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
