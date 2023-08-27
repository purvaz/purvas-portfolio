import Link from 'next/link';

const Navigation = () => {
    return (
      <nav className="bg-gray-800 py-5 text-white text-center">
        <div className="container mx-auto space-x-12 text-lg">
          <Link href="/">
            <button className="btn-nav">About Me</button>
          </Link>
          <Link href="/experience">
            <button className="btn-nav">Experience</button>
          </Link>
          <Link href="/projects">
            <button className="btn-nav">Projects</button>
          </Link>
          <Link href="/contact">
            <button className="btn-nav">Contact Me</button>
          </Link>
        </div>
      </nav>
    );
  };

export default Navigation;
