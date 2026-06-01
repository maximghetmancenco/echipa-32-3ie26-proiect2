function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <h3 className="text-xl font-bold mb-2">
          London Explorer
        </h3>

        <p className="text-gray-300 mb-4">
          Discover the best attractions, travel tips and experiences in London.
        </p>

        <hr className="border-gray-700 mb-4" />

        <p className="text-sm text-gray-400">
          © 2025 London Explorer. All rights reserved.
        </p>

        <p className="text-sm text-gray-400 mt-1">
          Built with React, Tailwind CSS and Strapi CMS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;