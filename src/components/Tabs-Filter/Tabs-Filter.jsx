import './Tabs-Filter.scss';
import { useSelector } from 'react-redux';
import Tab from '../Tab/Tab';

const TabsFilter = () => {
  const tabsState = useSelector((state) => state.tabsSlicer.tabs);
  const tabs = tabsState.map((tab) => {
    return (
      <li key={tab.name}>
        <Tab name={tab.name} label={tab.label} isActive={tab.isActive} />
      </li>
    );
  });
  return <ul className='buttons-bar'>{tabs}</ul>;
};

export default TabsFilter;
