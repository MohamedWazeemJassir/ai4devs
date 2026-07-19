function Header() {
  return (
    <header>
      <div className="w-full flex py-12 font-mono text-center">
        <span className="w-full sm:w-fit sm:ml-25 text-3xl italic font-bold font-poppins tracking-tight">
          <span className="text-violet-500">AI</span>4Devs
        </span>
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
      </div>
      <hr className="block sm:hidden border-violet-500 opacity-50" />
    </header>
  );
}

export default Header;
