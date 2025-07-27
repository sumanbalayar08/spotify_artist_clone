import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import Display from './components/Display';
import Player from './components/Player';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 gap-2 px-4 pb-2 overflow-hidden">
        <Sidebar />
        <main className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out`}>
          <Display />
        </main>
      </div>
      <Player />
    </div>
  );
}

export default App;
