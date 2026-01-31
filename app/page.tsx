// 5️⃣ Plug Game into Main Page
import Game from './components/Game'
import TelegramInit from './components/TelegramInit'

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <TelegramInit />
      <h1>🎮 Tap & Earn</h1>
      <Game />
    </main>
  )
}
