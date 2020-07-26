import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, Row, Col, Container, StyleReset, ThemeProvider} from 'atomize';
import NotFound from './components/NotFound'
import About from './components/About'
import HomePage from './components/HomePage'
import bubbleground from './double-bubble-outline/double-bubble-outline.png'
/*Background image from Toptal Subtle Patterns*/

const Display = props => <h1>{props.displayHP}</h1>;

class App extends Component {

  render() {
    return(
      <HomePage/>
    );
  }
}
export default App;
