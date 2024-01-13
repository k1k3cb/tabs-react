import { v4 } from 'uuid';
import { StyledList, StyledTab, StyledTabContainer } from './styles';
import { useState } from 'react';

const tabs = [
	{ id: v4(), name: 'Tab1' },
	{ id: v4(), name: 'Tab2' },
	{ id: v4(), name: 'Tab3' }
];
const tabsInfo = ['Info1', 'Info2', 'Info3'];

const Tabs = () => {
	const [tabActive, setTabActive] = useState(0);
	return (
		<>
			<StyledTabContainer>
				<StyledList>
					{tabs.map((tab, index) => (
						<StyledTab
							key={tab.id}
							onClick={() => handleTabActive(index, setTabActive)}
							$active={index === tabActive}
						>
							{tab.name}
						</StyledTab>
					))}
				</StyledList>
			</StyledTabContainer>
			<p>{tabsInfo[tabActive]}</p>
		</>
	);
};

const handleTabActive = (tabIndex, setTabActive) => {
	setTabActive(tabIndex);
	console.log('valor index: ' + tabIndex);
};

export default Tabs;
