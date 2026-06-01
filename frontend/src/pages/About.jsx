import { useEffect, useState } from "react";

function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/about")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAbout(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!about) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-4">
        {about.Title}
      </h1>

      <h2 className="text-2xl text-gray-600 mb-8">
        {about.Subtitle}
      </h2>

      <div className="space-y-5 text-lg leading-8">
        {about.Description?.map((block, index) => (
          <p key={index}>
            {block.children?.map((child) => child.text).join("")}
          </p>
        ))}
      </div>
    </section>
  );
}

export default About;