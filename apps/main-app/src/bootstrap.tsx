import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
);

export default App;
