import { contentTitl, titlBlack, titlGray, parag } from './titles.module.css';

const Titles = () => {
	return (
		<div className={contentTitl}>
			<span className={titlBlack}>Realible, efficient delivery</span>
			<span className={titlGray}>Powered by Technology</span>
			<p className={parag}>
				Our Artificial Intelligence powered tools use millions of project data
				points to ensure that your project is successful
			</p>
		</div>
	);
};

export default Titles;
