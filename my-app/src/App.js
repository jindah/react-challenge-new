import css from './App.module.css';
// import Linkit from './components/Sidebar.js';
// import NavBarSimple from './components/NavBarSimple.js';
// import NavBarForm from './components/NavBarForm.js';
// import RenderingLists from './components/RenderingLists';
// import ControlledForm from './components/ControlledForm';
import Content from './components/Content';
// import LifeCyclesCWU from './components/LifeCyclesCWU';
// import UnControlledForm from './components/UnControlledForm';
// import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className={css.App}>
      {/* <div><Linkit /></div> */}
      {/* <div><NavBarSimple /></div> */}
      {/* <NavBarForm /> */} 
      {/* <RenderingLists /> */}
      <Content />
      {/* <LifeCyclesCWU /> */}
      {/* <ControlledForm /> */}
      {/* <UnControlledForm /> */}
      {/* <SearchBar /> */}
    </div>
  );
}

export default App;
