import React, { FunctionComponent } from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import App from "../components/App";
import { Router, RouteComponentProps } from "@reach/router";
// import { BrowserRouter as Router, Route } from "";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Main from "../components/Main";
import rootReducer from "../modules";
import "./index.css";

const store = createStore(rootReducer)

type Props = { component: FunctionComponent } & RouteComponentProps;

const Route = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

const Home = () => <div> Home 부분</div>

const IndexPage = () => (
  <Provider store={store}>
    <StyledLiarButtonWrapper>aaaaaaa</StyledLiarButtonWrapper>
    <Router>
      <Main path="/" />
    </Router>
    {/* <App /> */}
  </Provider>
)

export default IndexPage;


const StyledLiarButtonWrapper = styled.div`
  background-color: red;
`;