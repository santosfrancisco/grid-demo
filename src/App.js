import React, { Component } from 'react';
import { Container, Row, Col, ScreenBadge, config } from 'react-awesome-styled-grid'
import styled, { ThemeProvider } from 'styled-components'
import Grid from './grid'

const customConf = {
  mediaQuery: 'only screen',
  columns: {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12,
    xl: 12
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90 // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120 // 1920px
  }
}
class App extends Component {
  state = {
    grid: true
  }
  handleToggleGrid = e => this.setState({grid: e.target.checked})
  render() {
    return (
      <ThemeProvider theme={{awesomegrid: customConf}}>
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
              <Col xs={2} sm={3} md={4} lg={3} xl={6}>
                <div className='col'>Oi, sou um elemento</div>
              </Col>
              <Col xs={2} sm={5} md={4} lg={3} xl={6}>
                <div className='col'>Oi, sou um elemento</div>
              </Col>
              <Col xs={4} sm={5} md={4} lg={6} xl={6}>
                <div className='col'>Oi, sou um elemento</div>
              </Col>
              <Col xs={4} sm={3} md={4} lg={12} xl={6}>
                <div className='col'>Oi, sou um elemento</div>
              </Col>
            </Row>
          </Container>
        </div>
      </ThemeProvider>
    )
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
    width: 100%;
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
