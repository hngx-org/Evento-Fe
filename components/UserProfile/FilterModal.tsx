import React from 'react';
import styles from './styles.module.css';
import Button from '../ui/Button';

interface FilterItem {
  key: string;
  label: string;
  state: boolean;
}

interface Props {
  filterObject: FilterItem[];
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const FilterModal: React.FC<Props> = ({ filterObject, isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={` ${
        isModalOpen ? '' : '!hidden'
      } flex flex-col bg-white-100 rounded-lg p-6 gap-y-4 w-[264px] text-base font-semibold  absolute bottom-0 translate-y-[100%] shadow-2xl left-[100%]`}
      id="filterModal"
      onClick={(e) => {
        console.log('modal clciked');

        console.log(e);
      }}
    >
      {filterObject.map((item) => (
        <label className={styles.formControl} key={item.key}>
          <input type="checkbox" className={`${styles.checkboxChecked} checkbox`} />
          {item.label}
        </label>
      ))}

      <Button
        styles={'border-none bg-transparent text-primary-100 !p-0 relative left-[100%] translate-x-[-100%] w-fit '}
        title={'clear filter'}
        disabled={false}
        type="reset"
        handleClick={() => {
          const checkBox = document.querySelectorAll('.checkbox');

          Array.from(checkBox).map((item) => ((item as HTMLInputElement).checked = false));
        }}
      >
        Clear all
      </Button>
    </div>
  );
};

export default FilterModal;
