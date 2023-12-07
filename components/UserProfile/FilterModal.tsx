import React, { useEffect } from 'react';
import styles from './styles.module.css';
import Button from '../ui/Button';

interface FilterItem {
  key: string;
  label: string;
  state: boolean;
}

interface Props {
  originalFilterList: string[];
  filterObject: string[];
  setFilterObject: React.Dispatch<React.SetStateAction<string[]>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const FilterModal: React.FC<Props> = ({
  originalFilterList,
  filterObject,
  setFilterObject,
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleCheckboxChange = (label: string, checked: boolean) => {
    if (checked) {
      setFilterObject([...filterObject, label]); // Add label to filterObject
    } else {
      setFilterObject(filterObject.filter((item) => item !== label)); // Remove label from filterObject
    }
  };

  useEffect(() => {
    // Uncheck all checkboxes when filterObject becomes empty
    if (filterObject.length === 0) {
      const checkBoxes = document.querySelectorAll('.checkbox') as NodeListOf<HTMLInputElement>;
      checkBoxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }

    // Update checkboxes based on filterObject values
    const checkBoxes = document.querySelectorAll('.checkbox') as NodeListOf<HTMLInputElement>;
    checkBoxes.forEach((checkbox) => {
      const label = checkbox.nextSibling?.nodeValue?.trim();
      checkbox.checked = filterObject.includes(label || '');
    });
  }, [filterObject]);

  return (
    <div
      className={` ${
        isModalOpen ? '' : '!hidden'
      } flex flex-col bg-white-100 rounded-lg p-6 gap-y-4 w-[264px] text-base font-semibold  absolute bottom-0 translate-y-[100%] shadow-2xl left-[100%]`}
      id="filterModal"
      onClick={(e) => {
        // console.log('modal clciked');
        // console.log(e);
      }}
    >
      {originalFilterList.map((item, index) => (
        <label className={styles.formControl} key={index} onClick={() => console.log('stop')}>
          <input
            type="checkbox"
            className={`${styles.checkboxChecked} checkbox`}
            onChange={(e) => handleCheckboxChange(item, e.target.checked)}
          />
          {item}
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

          setFilterObject([]);
        }}
      >
        Clear all
      </Button>
    </div>
  );
};

export default FilterModal;
