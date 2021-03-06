import styles from './Card.module.css';

function Card({ props }) {
	return (
		<article className={styles.card}>
			<img className={styles.image} src={props.flags.png} alt={props.flag} />
			<div>
				<h2>{props.name.common}</h2>
				<p>Region: {props.region}</p>
				{/* Some countries do not have capitals, hence the following check: */}
				<p>Capital: {props.capital ? props.capital[0] : 'N/A'}</p>
				<p>Population: {props.population}</p>
			</div>
		</article>
	);
}

export default Card;
