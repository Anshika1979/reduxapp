
//Redux works by maintaining a centralized, global state container called a store that serves as the single source of truth for your entire application. Instead of passing state down through multiple layers of components (prop drilling), any component in the application can directly read from or trigger updates to this central store.
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Shop />
      </div>
      </>
  );
}

export default App;
