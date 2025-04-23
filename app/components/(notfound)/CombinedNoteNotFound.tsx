import React from "react";
import NoteOne from "./NoteOne";
import NoteTwo from "./NoteTwo";

const CombinedNoteNotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className=" absolute z-20 mb-[240px] mr-[200px]">
        <NoteOne label="Error 404" index={20} />
      </div>
      <div className="absolute z-10 mt-[300px] ml-[300px]">
        <NoteTwo
          label="The page you are looking for has not been correctly sorted.
(it does not exist)"
          index={10}
        />
      </div>
    </div>
  );
};

export default CombinedNoteNotFound;
