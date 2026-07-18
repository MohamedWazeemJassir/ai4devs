function Header() {
  return (
    <header className="w-full flex py-12 font-mono text-center">
      <a
        href="/"
        className="w-full sm:w-fit sm:ml-25 text-2xl font-medium tracking-tight hover:text-violet-500"
      >
        ai4devs
      </a>

      <form action="" className="hidden w-1/3 h-1/2 mr-15 sm:flex ml-auto">
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="on"
          className="border px-5 h-10 w-full"
          placeholder="Your email address"  
        />
        <button
          type="submit"
          className="rounded font-semibold bg-violet-500 ml-3 p-2 hover:bg-violet-800"
        >
          Subscribe
        </button>
      </form>
    </header>
  );
}

export default Header;
