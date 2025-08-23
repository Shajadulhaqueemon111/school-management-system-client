import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center mx-auto ">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="btn btn-active" href="/">
        Return Home
      </Link>
    </div>
  );
}
