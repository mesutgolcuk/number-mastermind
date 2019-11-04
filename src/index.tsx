import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider } from 'react-intl';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducer/reducer';

import messages_en from './translations/en.json';
import messages_tr from './translations/tr.json';

const messages = {
    'en': messages_en,
    'tr': messages_tr
} as { [key: string]: any };
const language = navigator.language.split(/[-_]/)[0];  // language without region code

const store = createStore(rootReducer)
ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={language} messages={messages[language]}>
            <App />
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
