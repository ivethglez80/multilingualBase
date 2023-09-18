import { Route, Routes } from 'react-router-dom';
import './App.css';
import home from './views/1home/home';
import NavBar from './components/navBar/NavBar';
import about from './views/2about/about';
import features from './views/3features/features';
import cuatro from './views/4/cuatro';
import cinco from './views/5/cinco';
import events from './views/6events/events';
import contact from './views/7contact/contact';
import {LangProvider} from './context/langContext'

function App() {
  return (
    <LangProvider>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" Component={home} />
        <Route exact path="/about" Component={about} />
        <Route exact path="/features" Component={features} />
        <Route exact path="/cuatro" Component={cuatro} />
        <Route exact path="/cinco" Component={cinco} />
        <Route exact path="/events" Component={events} />
        <Route exact path="/contact" Component={contact} />
      </Routes>
    </div>
    </LangProvider>
  );
}

export default App;
