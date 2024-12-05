import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';
import Jogs from './components/Jogs/Jogs';
import Form from './components/Form/Form';
import { useState } from 'react';

function App() {
  const token = localStorage.getItem('token');
  const [form, setForm] = useState<boolean>(false);

  function handleForm() {
    setForm(true);
  }
  return (
    <main>
      <Header token={token} handleForm={handleForm} />
      {!token && <Entry />}
      {!form && token && <Jogs />}
      {form && token && <Form />}
    </main>
  );
}

export default App;
