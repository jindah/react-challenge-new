import css from './App.module.css';
// import Linkit from './components/Sidebar.js';
// import NavBarSimple from './components/NavBarSimple.js';
// import NavBarForm from './components/NavBarForm.js';
// import RenderingLists from './components/RenderingLists';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      {/* <div><Linkit /></div> */}
      {/* <div><NavBarSimple /></div> */}
      {/* <NavBarForm /> */} 
      {/* <RenderingLists /> */}
      <Content />
    </div>
  );
}

export default App;
