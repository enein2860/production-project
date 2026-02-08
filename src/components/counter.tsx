import { useState } from 'react';
import * as styles from './counter.module.scss'



function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <button className={styles.soslo} onClick={increment}>Click me!</button>
      <p>You clicked {count} times</p>
    </>
  );
}

export default Counter;

