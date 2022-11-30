import './styles/App.css';
import { Player } from './components/Player/Player';
import { Song } from './components/Song/Song';

function App() {
  return (
    <div className='container'>
      <Song />
      <Player />
    </div>
  );
}

export default App;
