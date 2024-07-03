import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link className="text-xl text-blue-500 inline-block mt-8" href="about">
        about page
      </Link>
    </div>
  );
}

export default HomePage;
