import LinkItem from "./link-item";

const menuItems = [
  { name: "HOME", href: "/" },
  { name: "PAGES", href: "/pages" },
  { name: "PROJECTS", href: "/projects" },
  { name: "SERVICES", href: "/services" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT US", href: "/contact" },
];

export default function NavBar() {
  return (
    <header className="container mx-auto px-16 py-8 flex justify-between items-center text-white">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 bg-white rounded-full"></div>
        <h1 className="text-3xl font-bold">
          <span className="text-red-500">Gaa</span>
          <span className="text-white">Ga</span>
          <span className="text-red-500 ml-1">•</span>
        </h1>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <LinkItem key={item.name} href={item.href} name={item.name} />
        ))}
      </nav>

      <button className="border border-gray-700 px-6 py-2 rounded flex items-center">
        <span className="text-red-500 mr-2">•</span>
        Lets start
      </button>
    </header>
  );
}
