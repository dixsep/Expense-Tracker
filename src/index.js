import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from './context/context';
import { SpeechProvider } from '@speechly/react-client';
import './index.css';
ReactDOM.render(
<SpeechProvider appId="cc0d661e-2e75-4fec-b586-8420b50bccd5" language="en-US">
<Provider>
<App />
</Provider>
</SpeechProvider>,
document.getElementById('root'));
