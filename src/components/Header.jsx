function Header() {
  return (
    <header className="flex h-15 mb-18 pt-5 font-mono ">
      <a href="/" className="text-2xl ml-15 mt-5">
        ai4devs
      </a>
      <nav className="pl-20 pt-5 pb-3 text-xl">
        <input
          type="text"
          name=""
          id=""
          className="border rounded border-amber-50 p-2 h-8 mr-3 ml-200"
          placeholder="john@expample.com"
        />
        <button type="submit" className="">Subscribe</button>
      </nav>
    </header>
  );
}

export default Header;
