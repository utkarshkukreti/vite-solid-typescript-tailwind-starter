import './index.css'

import { createSignal, onCleanup } from 'solid-js'
import { render } from 'solid-js/web'

const App = () => {
  const [counter, setCounter] = createSignal(0)
  const [increment, setIncrement] = createSignal(1)
  const interval = setInterval(
    () => setCounter(counter() + increment()),
    1000 / 60,
  )
  onCleanup(() => clearInterval(interval))
  return (
    <div class="m-16 flex flex-col justify-center items-center">
      <div className="text-5xl">Counter: {counter}</div>
      <div className="mb-8"></div>
      <button
        className="rounded-none text-xl border-b border-dashed border-black"
        onClick={() => setIncrement(increment() * 2)}
      >
        Click here to speed up!
      </button>
    </div>
  )
}

const element = document.querySelector('main')

if (element) {
  const dispose = render(() => <App />, element)
  if (import.meta.hot) {
    import.meta.hot?.accept()
    import.meta.hot?.dispose(dispose)
  }
}
