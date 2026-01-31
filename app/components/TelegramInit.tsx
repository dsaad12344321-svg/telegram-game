'use client'

import { useEffect } from 'react'

export default function TelegramInit() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Telegram) {
      const tg = (window as any).Telegram.WebApp
      tg.ready()
      tg.expand()
    }
  }, [])

  return null
}
