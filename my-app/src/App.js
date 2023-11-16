import css from './App.module.css';
// import Linkit from './components/Sidebar.js';
// import NavBarSimple from './components/NavBarSimple.js';
// import NavBarForm from './components/NavBarForm.js';
import RenderingLists from './components/RenderingLists';

function App() {
  return (
    <div className={css.App}>
      {/* <div><Linkit /></div> */}
      {/* <div><NavBarSimple /></div> */}
      {/* <NavBarForm /> */} 
      <RenderingLists />
    </div>
  );
}

export default App;
