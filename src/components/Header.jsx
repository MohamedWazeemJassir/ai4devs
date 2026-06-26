function Header() {
  return (
    <header className="flex h-15 mb-18 pt-5 font-mono ">
      <h1 className="pl-20 pt-5 pb-3 text-2xl">ai4devs</h1>
      <nav className="float-end whitespace-pre-wrap pl-20 pt-5 pb-3 text-xl">
        <a className="pr-5" href="">
          About
        </a>
        <a className="pr-5" href="">
          Sign Up
        </a>
      </nav>
    </header>
  );
}

export default Header;
