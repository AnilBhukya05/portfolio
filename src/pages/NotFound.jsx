import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section text-center py-40">
      <p className="font-serif italic text-7xl text-clay/40">404</p>
      <h1 className="font-serif text-3xl mt-4">This page wandered off.</h1>
      <p className="text-ink2 mt-3">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary mt-8 inline-flex">Back to home →</Link>
    </section>
  );
}