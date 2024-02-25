import { CategoryProps, EventDataProps } from '@/@types';
import { getCategories } from '@/http/createeventapi';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface Props {
  setState: Dispatch<SetStateAction<EventDataProps>>;
  data: EventDataProps;
  otherCategory: string;
  setOtherCategory: Dispatch<SetStateAction<string>>;
}

function CategoryDropDown({ data, setState, otherCategory, setOtherCategory }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    categoryData();
  }, []);

  const categoryData = async () => {
    const cats = await getCategories(setCategories);
    if (cats) {
      setCategories([...cats, { name: 'Other', categoryID: 'other' }]);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEventTypeSelect = (eventType: string) => {
    setState((prevState) => {
      return { ...prevState, categoryName: eventType };
    });
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="w-full flex flex-col content-center mb-6 ">
        <h2 className=" font-semibold text-xl mb-2 leading-6 text-[#303030]">Select Event Category</h2>
        <div className="relative inline-block w-full">
          <input
            className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] placeholder:font-semibold p-4 text-base font-bold cursor-pointer"
            placeholder="Choose Event type"
            type="text"
            readOnly
            value={data.categoryName}
            onClick={handleDropdownToggle}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
            {/* Toggle between the down and up arrow based on the isDropdownOpen state */}
            {isDropdownOpen ? <ArrowUp2 size={16} /> : <ArrowDown2 size={16} />}
          </div>

          {/* Dropdown Modal */}
          {isDropdownOpen && (
            <div className="absolute w-full top-full max-h-56 overflow-scroll p-2 z-50 left-0 mt-2 bg-[#fefefe] border border-[#d7d7d7]  rounded-lg">
              {categories.map((item) => (
                <div
                  key={item.categoryID}
                  className=" px-4 py-2 hover:bg-[#dedede] rounded-lg  cursor-pointer"
                  onClick={() => handleEventTypeSelect(item.name)}
                >
                  <div className="mb-1 font-bold text-base text-[#020202]">{item.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {data.categoryName === 'Other' && (
        <div className="w-full relative flex flex-col mb-10 content-center">
          <label htmlFor="entranceFee" className="font-semibold text-xl mb-2 leading-6 text-[#303030]">
            Other Event Category
          </label>
          <input
            id="entranceFee"
            className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] placeholder:font-semibold p-4 text-base font-bold"
            placeholder=""
            type="text"
            onChange={(e) => setOtherCategory(e.target.value)}
            value={otherCategory}
          />
        </div>
      )}
    </>
  );
}

export default CategoryDropDown;
