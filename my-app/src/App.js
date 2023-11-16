import css from './App.module.css';
import Linkit from './components/Sidebar.js';
// import NavBarSimple from './components/NavBarSimple.js';
import NavBarForm from './components/NavBarForm.js';

function App() {
  return (
    <div className={css.App}>
      <div><Linkit /></div>
      {/* <div><NavBarSimple /></div> */}
      <NavBarForm />
    </div>
  );
}

export default App;
