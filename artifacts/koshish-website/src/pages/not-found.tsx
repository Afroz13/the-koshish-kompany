import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 pt-20">
      <img src="/images/logo.png" alt="Logo" className="h-20 w-20 mb-6 opacity-60" />
      <h1 className="text-6xl font-bold text-[#1E3A8A] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Page Not Found</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist. But don't give up — every Koshish counts!
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#1E3A8A] text-white rounded-lg font-semibold hover:bg-[#1a3070] transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
