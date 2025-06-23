import { v4 } from 'uuid';
import Card from '../Card/Card';
import Titles from '../Titles/Titles';
import { INFOCARDS } from '../data';
import { content, cardsContent } from './content.module.css';

const Content = () => {
	return (
		<div className={content}>
			<Titles></Titles>
			<div className={cardsContent}>
				{INFOCARDS.map(item => (
					<Card
						key={v4()}
						title={item.title}
						iconPath={item.iconPath}
						classSelector={item.classSelector}
					>
						{item.text}
					</Card>
				))}
			</div>
		</div>
	);
};

export default Content;
