import React from "react";
import { FiPlus } from "react-icons/fi";

interface ICreateNewPlaylistProps {
  isTriggeredCreate: boolean;
  setIsTriggerCreate: (isTriggerCreate: boolean) => void;
}

const CreateNewPlaylist: React.FC<ICreateNewPlaylistProps> = ({
  isTriggeredCreate,
  setIsTriggerCreate,
}) => {
  return (
    <>
      {isTriggeredCreate ? (
        <div className="flex flex-col">
          <p>Name</p>
          <input type="text" className="border-b border-dark" />
          <p className="ml-auto text-sm font-medium">0/150</p>
          <button className="ml-auto pt-[35px] pb-[25px] text-primary">Create</button>
        </div>
      ) : (
        <div
          className="flex items-center pb-[35px]"
          onClick={() => {
            setIsTriggerCreate(true);
          }}
        >
          <FiPlus className="h-4 w-4 text-dark" />
          <p className="ml-auto whitespace-nowrap font-roboto text-base">
            Create a new <span className="text-primary">playlist</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CreateNewPlaylist;
