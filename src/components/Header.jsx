function Header() {
  return (
    <header className="w-full flex py-12 font-mono text-center">
      <a
        href="/"
        className="top-10 ml-25 text-2xl font-medium tracking-tight hover:text-violet-500"
      >
        ai4devs
      </a>

      <form action="" className="w-1/3 top-10 mr-15 flex ml-auto">
        <input
          type="email"
          name="email"
          id="email"
          className="rounded border px-5 h-10 w-full"
          placeholder="Get weekly AI tools updates"
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
