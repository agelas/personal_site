import React, {Component} from 'react';
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
