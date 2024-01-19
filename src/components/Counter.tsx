import { useState} from "react";
import classes from './counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount(count + 1);
	return (
		<div onClick={increment} className={classes.counter_container}>
			<p className={classes.counter_container__count}>Count: {count}</p>
		</div>
	);
}
