import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import * as ReactDOM from "react-dom";
import App from '../components/App';
import { Router, RouteComponentProps } from "@reach/router"
// import { BrowserRouter as Router, Route } from "";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import Main from "../components/Main";
import rootReducer from '../modules';
import './index.css';

const store = createStore(rootReducer);

const IndexPage = () => (
  <Provider store={store}>
    <Router>
    <RouterPage path="/" pageComponent={<Main />} />
    </Router>
        {/* <App /> */}
    </Provider>
)

export default IndexPage


const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
