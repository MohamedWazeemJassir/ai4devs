function Header() {
  return (
    <header className="w-full py-12 font-mono text-center">
      <a
        href="/"
        className="absolute top-10 left-20 text-2xl font-medium tracking-tight hover:text-violet-500"
      >
        ai4devs
      </a>

      <form action="" className="absolute top-10 right-20">
        <input
          type="email"
          name="email"
          id="email"
          className="rounded px-5 h-10 focus:border-sky-500 disabled:border-gray-200"
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
