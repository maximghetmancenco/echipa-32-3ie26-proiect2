function Articles() {
  const articles = [
    {
      title: "Top 5 Places to Visit in London",
      text: "Discover the most iconic landmarks and attractions in the city.",
    },
    {
      title: "How to Travel Around London",
      text: "Learn how to use the Underground, buses and travel cards.",
    },
    {
      title: "A Weekend in London",
      text: "A simple guide for spending two unforgettable days in London.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Travel Articles</h1>

      <div className="space-y-6">
        {articles.map((article) => (
          <div
            key={article.title}
            className="shadow rounded-xl p-6 border"
          >
            <h2 className="text-2xl font-bold mb-3">
              {article.title}
            </h2>

            <p>{article.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;