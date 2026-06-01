function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>

      <p className="text-gray-700 mb-8">
        If you have questions about visiting London, you can send us a message.
      </p>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Your name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your email"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Your message"
          rows="5"
          className="w-full border p-3 rounded-lg"
        ></textarea>

        <button
          type="button"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg"
        >
          Send message
        </button>
      </form>
    </section>
  );
}

export default Contact;