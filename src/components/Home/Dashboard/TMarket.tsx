import { useState } from "react";
import Button from "../../ui/Buttons";
import HeartIcon from "../../icons/HeartIcon";
import { TalentData } from "../../../utils/constant";

const TMarket = () => {
  const [items, setItems] = useState(TalentData);
  const styles = [
    "left-0",
    "left-[7rem] h-[23rem] top-[-15px]",
    "left-[14rem] z-20 h-[25rem] top-[-2rem]",
    "left-[22rem] h-[23rem] top-[-15px] z-10",
    "left-[30rem]",
  ];

  const handleSwap = (clickedId: number) => {
    const indexClicked = items.findIndex((item) => item.id === clickedId);
    const indexTarget = items.findIndex((item) => item.id === 3);

    if (
      indexClicked !== -1 &&
      indexTarget !== -1 &&
      indexClicked !== indexTarget
    ) {
      const updatedItems = [...items];
      [updatedItems[indexClicked], updatedItems[indexTarget]] = [
        updatedItems[indexTarget],
        updatedItems[indexClicked],
      ];
      setItems(updatedItems);
    }
  };

  return (
    <div className="max-w-6xl mx-auto md:px-6 py-10 ">
      {/* Header */}
      <h2 className="text-center md:text-3xl font-semibold mb-10 lg:w-[65%] m-auto">
        Leverage AI to enable better talent acquisition. You can post shifts and
        save time in acquiring talents. Talents get the flexibility to choose
        their schedule.
      </h2>

      {/* Card Section */}

      <div className="relative mt-[5rem] m-auto md:ml-0 lg:ml-[11rem]">
        {items.map((item, index) => (
          <div
            className={`md:absolute transition-all duration-300 cursor-pointer rounded-lg shadow-lg 
            border border-y-[#D2E7FF] border-x-[#FF6250] bg-white 
            flex flex-col justify-between ${styles[index]}`}
            onClick={() => handleSwap(item.id)}>
            {/* Profile Image */}
            <div className="w-24 h-24 mx-auto mt-6 rounded-full ">
              <img
                src={"/images/user-3.png"}
                alt={"card.name"}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 flex-grow">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium text-left">{item.name}.</h3>
                <div className="  text-gray-400">
                  <HeartIcon />
                </div>
              </div>

              <p className="text-sm text-gray-600 text-left">{item.location}</p>
              <p className="text-sm text-gray-800 text-left mt-2">
                {item.role}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 text-left mt-1">
                  {item.rate}
                </p>
                <div className="flex items-center justify-start mt-2">
                  <span className="text-[#344054]">★ {item.rating}</span>
                </div>
              </div>
            </div>

            {/* Post a Job Shift Button */}
            <div className="px-4 mb-4">
              <Button
                text={"Post a Job Shift"}
                background={"bg-transparent"}
                color="text-[#CC400C]"
                shadow="shadow-0"
                styles=" border border-[#CC400C] bg-transparent py-2 rounded-lg"
                // type={""}
                position={""}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TMarket;
