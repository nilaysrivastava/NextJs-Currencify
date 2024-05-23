import {
  FaDollarSign,
  FaEuroSign,
  FaExchangeAlt,
  FaPoundSign,
  FaRupeeSign,
  FaYenSign,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" p-1 fixed rounded-lg  top-0 z-50  border border-white backdrop-blur bg-white/30 mt-5">
      <div
        className="container mx-auto flex items-center text-black"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        <div>Currencify </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            color: "#500000",
          }}
        >
          <FaDollarSign /> <FaExchangeAlt /> <FaRupeeSign /> <FaExchangeAlt />{" "}
          <FaEuroSign />
          <FaExchangeAlt /> <FaPoundSign /> <FaExchangeAlt /> <FaYenSign /> ...
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
