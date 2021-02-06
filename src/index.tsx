import './index.css'

import { render } from 'solid-js/web'

const App = () => <div class="text-center m-16 text-4xl">Hello!</div>

const element = document.querySelector('main')

if (element) {
  const dispose = render(() => <App />, element)
  if (import.meta.hot) {
    import.meta.hot?.accept()
    import.meta.hot?.dispose(dispose)
  }
}
