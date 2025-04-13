import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react';
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from "./redux/store.js";
import { persistor } from "./redux/store.js";
//<StrictMode> — інструмент React для перевірки потенційних проблем.
//<Provider> — робить Redux store доступним для всіх компонентів.
//для збереження даних  в локальному сховищі браузера використ PersistGate persistor={persistor}
//блокує рендеринг <App />, поки не буде завантажено стан з локального сховища.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
      <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
  </StrictMode>
);
