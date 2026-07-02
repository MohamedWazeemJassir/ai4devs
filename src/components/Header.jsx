function Header() {
  return (
    <header className="flex h-15 mb-18 pt-5 font-mono ">
      <a href="/" className="text-2xl ml-15 mt-5">
        ai4devs 
        </a>
      <nav className="pl-20 pt-5 pb-3 text-xl">
        <a className="mr-5" href="">
          About
        </a>
        <a className="mr-5" href="">
          Sign Up
        </a>
      </nav>
    </header>
  );
}

export default Header;
