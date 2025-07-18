export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          Welcome to MERN Auth App!
        </h1>
        <p className="mb-8 text-gray-700 text-lg">
          Your one-stop solution for secure authentication and modern web
          services.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">
          Our Services
        </h2>
        <ul className="mb-6 text-left text-gray-800 list-disc list-inside">
          <li>User Registration & Login</li>
          <li>JWT-based Authentication</li>
          <li>Protected User Dashboard</li>
          <li>Modern UI with Tailwind CSS</li>
          <li>RESTful API Integration</li>
        </ul>
        <div className="flex justify-center gap-4">
          <a
            href="/register"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-blue-50 transition"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
