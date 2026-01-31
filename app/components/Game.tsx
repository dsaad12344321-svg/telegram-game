// 4️⃣ The Actual Game Logic 🎯
'use client'

import { useEffect, useState } from 'react'
import { getTelegramUser } from '../lib/getTelegramUser'
import { useCoins } from '../hooks/useCoins'

declare global {
  interface Window {
    show_10544894: any
  }
}

export default function Game() {
  const user = getTelegramUser()
  const userId = user?.id || null
  const { coins, addCoins } = useCoins(userId)

  const [targetVisible, setTargetVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetVisible(true)

      //setTimeout(() => setTargetVisible(false), 800)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const hitTarget = () => {
    setTargetVisible(false)
    addCoins(1)
  }

  const watchAdForCoins = async () => {
    await window.show_10544894()
    addCoins(10)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>👤 {user?.first_name}</h2>
      <h3>💰 Coins: {coins}</h3>

      {targetVisible && (
        <div
          onClick={hitTarget}
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'gold',
            margin: '30px auto',
            cursor: 'pointer',
          }}
        />
      )}

      <button onClick={watchAdForCoins}>
        📺 Watch Ad (+10 coins)
      </button>
    </div>
  )
}

