import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/features/store';
import Form1 from './component/First';
import Form2 from './component/Second';
import Main from './component/List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (


    <Provider store={store}>
      <div>
      </div>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element ={<Main/>}/>
            <Route exact path="/first" element={<Form1/>} />
            <Route path="/second" element={<Form2/>} />
          </Routes>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
