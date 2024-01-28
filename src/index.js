import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter basename="/image-finder-refactoring-react-hooks">
  <App />
</BrowserRouter>
);
