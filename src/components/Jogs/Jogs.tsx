import { useEffect, useState } from 'react';

interface Jog {
  id: string;
  speed: number;
  distance: number;
  time: number;
}

export default function Jogs() {
  const [jogs, setJogs] = useState<Jog[]>([]);
  const token = localStorage.getItem('token');
  console.log(jogs);
  useEffect(() => {
    const getJogs = async () => {
      const responce = await fetch(
        'https://jogs-tracker-production.up.railway.app/jogs',
        {
          method: 'GET',
          headers: {
            accept: '*/*',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await responce.json();
      return data;
    };

    getJogs().then((data) => {
      const { jogs } = data;
      setJogs(jogs);
    });
  }, [token]);
  return (
    <ul>
      {jogs.map((jog: Jog) => {
        return (
          <li key={jog.id}>
            <p>Distance: {jog.distance}</p>
            <p>Speed: {jog.speed}</p>
            <p>Time: {jog.time}</p>
          </li>
        );
      })}
    </ul>
  );
}
