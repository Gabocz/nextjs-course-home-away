const url = "https://www.course-api.com/react-tours-project";
import Link from "next/link";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

async function ToursPage() {
  const data = await fetchTours();
  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      {data.map((tour) => {
        return (
          <Link
            key={tour.id}
            href={`/tours/${tour.id}`}
            className="hover:text-blue-500"
          >
            <h2>{tour.name}</h2>
          </Link>
        );
      })}
    </section>
  );
}

export default ToursPage;
