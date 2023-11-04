import React from "react";

type CardsProps = {
  src: string;
};

const Cards: React.FC<CardsProps> = ({ src }) => {
  return (
    <div className="w-[350px] py-6">
      <img
        src={src}
        alt="Event"
        className="w-full h-40 object-cover rounded-xl"
      />
      <div>
        <h2 className="text-xl font-semibold pt-1">SUMMER EVENT</h2>
        <div className="flex text-sm gap-1">
          <p>IET DAVV</p>
          <span>-</span>
          <span className="text-green-400 font-semibold">available</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
