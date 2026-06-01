import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="bg-gray-100 px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6 tracking-wide">
          Discover London
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
          Explore London's iconic landmarks, museums, parks and hidden gems
          through our simple travel guide.
        </p>

        <Link
          to="/attractions"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg"
        >
          Explore Attractions
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          What you can find here
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 shadow rounded-xl border">
            <h3 className="text-xl font-bold mb-2">
              Famous Landmarks
            </h3>
            <p>
              Visit Big Ben, Tower Bridge, Buckingham Palace and other iconic
              places in London.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl border">
            <h3 className="text-xl font-bold mb-2">
              Travel Tips
            </h3>
            <p>
              Find simple information about transport, tickets, museums and
              planning your trip.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl border">
            <h3 className="text-xl font-bold mb-2">
              Short Articles
            </h3>
            <p>
              Read quick guides about what to visit during a weekend or a short
              city break.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Why visit London?
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            London is one of the most visited cities in the world. It combines
            history, culture, architecture, shopping and entertainment. From
            royal palaces and museums to modern attractions and beautiful parks,
            the city offers something interesting for every visitor.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;