import { FaSquareFull } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="p-2 bg-[#5A5A5A] mx-auto mb-10">
      <div className="flex text-white items-center space-x-2">
        <FaSquareFull className="w-7 h-7 text-[#D9D9D9]" />
        <h1 className="font-bold text-xl">Pokeverse</h1>
        <div className="self-start text-2xl font-bold">|</div>
        <p className="text-xl">All Pokemon</p>
      </div>
    </nav>
  );
};

export default Navbar;
