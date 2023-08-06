import logo from "/images/logo.svg";
const Nav = () => {
  return (
    <>
      <nav className='nav  bg-Darkers flex justify-between items-center p-6'>
        <div className='brand'>
          <img src={logo} width={120} alt='sa' />
        </div>
        <div className='nav_list'>
          <ul className='flex items-center gap-6  text-arcticle  font-Railway '>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
