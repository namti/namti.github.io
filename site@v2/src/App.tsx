import './App.scss';
import About from './pages/about';

function App() {

  return (
    <>
      <div className="flex align-middle justify-between px-3 py-3">
        <h3 className="my-0">NAMTI</h3>

        <div role="tablist" className="tabs">
          <a role="tab" className="tab">About Me</a>
          <a role="tab" className="tab tab-active border-b-2">Works</a>
          <a role="tab" className="tab">CV</a>
        </div>
      </div>

      <div className="container mx-auto">

        <div className="column-12">

          <About />

          <button className="btn">Hello</button>

        </div>

      </div>
    </>
  );
}

export default App;
