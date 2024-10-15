import React from 'react';

const PokemonCard = ({ name, src, defaultAttack, level }) => {
  console.log(defaultAttack);
  return (
    <div className="p-3 text-center p-3 bg-[#D9D9D9] rounded">
      <img className="mx-auto bg-[#E2E2E2]" src={src} />
      <div className="text-left capitalize p-1 pr-0 mt-2 text-xs text-nowrap">
        <h2 className="font-bold">{name}</h2>
        <div className="text-[10px]">
          <p>
            {defaultAttack} ({Math.floor(Math.random() * 100)})
          </p>
          <p className="mt-3">Level {level}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
