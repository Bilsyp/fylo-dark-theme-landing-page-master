import { useContext } from "react";
import { theme } from "../utils";
import { FaMoon, FaSun } from "react-icons/fa";

const Buttons = ({ setToogle }) => {
  const themes = useContext(theme);
  const handleClick = () => {
    if (themes == "dark") {
      document.querySelector("html").classList.add("dark");
      setToogle(true);
    } else {
      document.querySelector("html").classList.remove("dark");
      setToogle(false);
    }
  };
  return (
    <button
      onClick={handleClick}
      className='text-black dark:text-white dark:bg-slate-900'
    >
      {themes == "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default Buttons;
