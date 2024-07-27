import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContentGenerator from './components/ContentGenerator';
import ImageProcessor from './components/ImageProcessor';
import SocialMediaShare from './components/SocialMediaShare';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ContentGenerator} />
        <Route path="/process-image" component={ImageProcessor} />
        <Route path="/share" component={SocialMediaShare} />
      </Switch>
    </Router>
  );
}

export default App;