import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import * as ReactDOM from "react-dom";
import App from '../components/App';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from '../modules';
import './index.css';

const store = createStore(rootReducer);

const IndexPage = () => (
  <Provider store={store}>
        <App />
    </Provider>
)

export default IndexPage
