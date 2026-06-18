import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <p className="text-8xl font-black text-slate-100 select-none leading-none">404</p>
      <h1 className="text-xl font-bold text-slate-800 mt-4">Page not found</h1>
      <p className="text-sm text-slate-400 mt-1">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="mt-6 text-sm font-semibold text-brand-600 hover:underline">
        Back to Dashboard
      </Link>
    </div>
  )
}
