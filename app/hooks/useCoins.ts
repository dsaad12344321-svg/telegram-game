// 3️⃣ Coin Hook (Frontend State)
'use client'

import { useEffect, useState } from 'react'

export function useCoins(userId: number | null) {
  const [coins, setCoins] = useState(0)

  useEffect(() => {
    if (!userId) return

    fetch(`/api/coins?userId=${userId}`)
      .then(res => res.json())
      .then(data => setCoins(data.coins))
  }, [userId])

  const addCoins = async (amount: number) => {
    if (!userId) return

    const res = await fetch('/api/coins', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, amount }),
    })

    const data = await res.json()
    setCoins(data.coins)
  }

  return { coins, addCoins }
}
