import React from 'react';
import './styles/tailwind.scss';
import useRoutes from 'routes';

function App() {
  const Router = useRoutes();

  return (
    <React.Suspense fallback={<p>Cargando...!</p>}>
      {Router}    
    </React.Suspense>
  );
}

export default App;
