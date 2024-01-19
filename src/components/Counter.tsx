import { useState} from "react";
import './Counter.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount(count + 1);
	return (
		<div onClick={increment} className='counter_container'>
			<p className='counter_container__count'>Count: {count}</p>
		</div>
	);
}
