export function getTelegramUser() {
  if (typeof window === 'undefined') return null

  const tg = (window as any).Telegram?.WebApp
  return tg?.initDataUnsafe?.user || null
}
