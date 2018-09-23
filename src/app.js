import React from 'react';
import {TestComponent, Button} from 'styleguide';

class App extends React.Component{
    render(){
        return(
            <div>
              <h1>Hello React</h1>
              <TestComponent />
              <Button>Click this button!</Button>
            </div>
        )
    }
}
export default App;