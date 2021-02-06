import './index.css'

import { render } from 'solid-js/web'

const App = () => <div class="text-center m-16 text-4xl">Hello!</div>

const main = document.querySelector('main')

if (main) {
  const dispose = render(() => <App />, main)
  if (import.meta.hot) {
    import.meta.hot?.accept()
    import.meta.hot?.dispose(dispose)
  }
}
