import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          {'VAISHNAV'}
        </Link>
        <div className="flex gap-6">
          <Link 
            href="/" 
            className="px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-all"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-all"
          >
            About
          </Link>
          <Link 
            href="/links" 
            className="px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-all"
          >
            Links
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 