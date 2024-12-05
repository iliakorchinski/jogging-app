import classes from './Navigation.module.css';

type NavProps = {
  handleForm: () => void;
};

export default function Navigation({ handleForm }: NavProps) {
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
        <button className={classes.button} onClick={handleForm}>
          Create a jog
        </button>
      </li>
    </ul>
  );
}
