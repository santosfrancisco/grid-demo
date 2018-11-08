import React, { Component } from 'react';
import { Container, Row, Col, ScreenBadge, config } from 'react-awesome-styled-grid'
import styled from 'styled-components'
import Grid from './grid'

class App extends Component {
  state = {
    grid: true
  }
  handleToggleGrid = e => this.setState({grid: e.target.checked})
  render() {
    return (
      <div className={this.props.className}>
      <div className='grid-toggle'>
        <input type="checkbox" checked={this.state.grid} onChange={this.handleToggleGrid} /> Exibir grid?
      </div>
      <div className='menu'>
        <h2 style={{textAlign: 'center'}}>MENU</h2>
      </div>
        <Container className='container'>
          {this.state.grid && <Grid className='grid' />}
          <ScreenBadge />
          <Row>
            <Col xs={2} sm={3} lg={4}>
              <div className='col'>Oi, sou um elemento</div>
            </Col>
            <Col xs={2} sm={5} lg={4}>
              <div className='col'>Oi, sou um elemento</div>
            </Col>
            <Col xs={4} sm={5} lg={6}>
              <div className='col'>Oi, sou um elemento</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default styled(App)`
  display: flex;
  .grid-toggle {
    position: absolute;
    padding: 3px;
    background-color: lightgrey;
    border: 1px solid #000;
    top: 5px;
    left: 5px;
    border-radius: 5px;
    box-shadow: 10px 10px 26px 1px rgba(0,0,0,0.75);
    z-index: 10;
  }
  .container {
    padding-top: 20px;
    position: relative;
  }
  .col {
    ${'' /* border: 1px solid black; */}
    background-color: rgb(243, 4, 242, .3);
    height: 100px;
    margin-bottom: 10px;
  }
  .menu {
    display: none;
    width: 224px;
    height: 100vh;
    background-color: lightgray;
    ${p=> config(p).media['sm']`
      display: block;
    `}
  }
`;
