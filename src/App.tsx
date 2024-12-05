import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';
import Jogs from './components/Jogs/Jogs';

function App() {
  const token = localStorage.getItem('token');

  return (
    <main>
      <Header token={token} />
      {!token && <Entry />}
      {token && <Jogs />}
    </main>
  );
}

export default App;
