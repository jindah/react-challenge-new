import css from './App.module.css';
import Linkit from './components/Sidebar.js';
import NavBarSimple from './components/NavBarSimple.js';

function App() {
  return (
    <div className={css.App}>
      <div><Linkit /></div>
      <div><NavBarSimple /></div>
    </div>
  );
}

export default App;
