import React, { Suspense } from 'react';
import './styles/tailwind.scss';
import useRoutes from 'routes';
import useConfig from 'config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import useModels from 'models';

function App() {
  const Router = useRoutes();

  /** Config */
  const { useStoreConfig, useInterceptor } = useConfig();
  const { persistor, store } = useStoreConfig();

  /** Interceptors */
  useInterceptor();
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Suspense fallback={<p>Cargando...!</p>}>
          {Router}
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
