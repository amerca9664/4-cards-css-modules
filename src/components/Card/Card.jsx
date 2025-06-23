import styles from './card.module.css';
const Card = ({ title, iconPath, children, classSelector }) => {
	const contentDiv = styles.content;
	const titleH2 = styles.titleH2;
	const parag = styles.parag;
	const imageIco = styles.imageIco;
	const cardsType = styles[`content${classSelector}`];
	return (
		<div className={`${contentDiv} ${cardsType}`}>
			<h2 className={titleH2}>{title}</h2>
			<p className={parag}>{children}</p>
			<img className={imageIco} src={iconPath} alt='' />
		</div>
	);
};

export default Card;
