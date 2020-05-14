import React from 'react';
import { Divider, Container } from "semantic-ui-react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from './Menu';
import UserListSort from "./UserListSort";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
const Content = styled(Container)`
  margin-top: 6em
  flex: 1;
`;
const App = () => (
  <Router>
    <Wrapper>
      <Menu />
      <Content>
        <Switch>
          <Route path="/" exact component={UserListSort} />
          <Route path="/userList" component={UserListSort} />
        </Switch>
      </Content>
    </Wrapper>
  </Router>
);

export default App;
