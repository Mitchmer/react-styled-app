import React, { Component } from 'react';
import { Header, Button, Segment, Card, Icon, Grid, } from 'semantic-ui-react'
import styled from 'styled-components'
import HeaderText from './HeaderText'

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, lightgoldenrodyellow, black);
`

const Transparent = styled.div`
  background: transparent !important;
`

class App extends React.Component {
  state = { repos: [] }

  componentDidMount() {
    axios.get('https://api.github.com/users/Mitchmer/repos?sort=created')
  }

  render() {
    return (
      <AppContainer>
        <Header fSize="large" as={HeaderText}>
          My Portfolio
        </Header>
        <Segment as={Transparent}>
          <Header as={HeaderText}>
            My Projects
          </Header>
        </Segment>
        <Segment as={Transparent}>
          <Header as={HeaderText}>
            Contact
          </Header>
        </Segment>
      </AppContainer>
    )
  }
}

export default App;
