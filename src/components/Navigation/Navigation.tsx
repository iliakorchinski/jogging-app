import classes from './Navigation.module.css';

export default function Navigation() {
  return (
    <ul className={classes.container}>
      <li>
        <button className={classes.button}>Jogs</button>
      </li>
      <li>
        <button className={classes.button}>Info</button>
      </li>
      <li>
        <button className={classes.button}>Contact us</button>
      </li>
      <li>
        <button className={classes.button}>Create a jog</button>
      </li>
    </ul>
  );
}
