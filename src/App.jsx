
import React from 'react'; 
import { Provider } from 'react-redux'; 
import store from './store'; 
import AppRouter from './AppRouter'; 

function App() { 

  return ( 

    <div> 

      <Provider store={store}> 

      <AppRouter /> 

      </Provider> 

    </div> 

  ); 

} 

export default App; 