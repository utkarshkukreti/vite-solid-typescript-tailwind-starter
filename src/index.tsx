import './index.css'

import type { Component } from 'solid-js'
import { render } from 'solid-js/web'

const App: Component = () => <div class="text-center m-16 text-4xl">Hello!</div>

const main = document.querySelector('main')

if (main) {
  const dispose = render(() => <App />, main)
  if (import.meta.hot) {
    import.meta.hot?.accept()
    import.meta.hot?.dispose(dispose)
  }
}
