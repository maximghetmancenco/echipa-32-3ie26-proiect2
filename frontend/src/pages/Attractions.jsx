function Attractions() {
  const attractions = [
    {
      name: "Big Ben",
      text: "One of the most famous symbols of London, located near the Houses of Parliament.",
    },
    {
      name: "Tower Bridge",
      text: "A historic bridge over the River Thames and one of the most photographed places in London.",
    },
    {
      name: "London Eye",
      text: "A giant observation wheel offering panoramic views over the city.",
    },
    {
      name: "Buckingham Palace",
      text: "The official residence of the British monarch and a popular tourist attraction.",
    },
    {
      name: "British Museum",
      text: "A world-famous museum with collections from many cultures and historical periods.",
    },
    {
      name: "Hyde Park",
      text: "One of London’s largest parks, ideal for walking, relaxing and outdoor activities.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">London Attractions</h1>

      <p className="text-gray-700 mb-10">
        Here are some of the most popular places to visit in London.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {attractions.map((item) => (
          <div key={item.name} className="p-6 shadow rounded-xl">
            <h2 className="text-2xl font-bold mb-3">{item.name}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Attractions;