import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layouts/styles.css'
import 'semantic-ui-css/semantic.min.css'
import App from './app/layouts/App'
import { store, StoreContext } from './app/stores/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </StrictMode>,
)
