const Navbar = () => {
    return (
      <nav className="bg-yellow shadow fixed w-full top-0 left-0 right-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              {/* Your logo goes here */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out">
                  Home
                </span>
                <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out">
                  Features
                </span>
                <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out">
                  Documentation
                </span>
                <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out">
                  Contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  