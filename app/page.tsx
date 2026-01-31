import Tasks from './components/Tasks'
import Game from './components/Game'
import TelegramInit from './components/TelegramInit'

export default function Home() {
  return (
    <main>
      <TelegramInit />
      <Game />
      <Tasks />
    </main>
  )
}
