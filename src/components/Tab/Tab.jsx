import './Tab.scss';
import { useDispatch } from 'react-redux';
import { changeTab } from '../redux/TabsSlicer/TabsSlicer';

const Tab = ({ label, name, isActive }) => {
  const dispatch = useDispatch();
  const handleChangeTab = (id) => dispatch(changeTab(id));

  return (
    <div>
      <button
        type='button'
        className={`tab-filter-button-${isActive ? 'active' : 'disable'}`}
        onClick={() => {
          handleChangeTab(name);
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Tab;
