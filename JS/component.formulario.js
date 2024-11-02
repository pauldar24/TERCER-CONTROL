const Formulario = () => {
  return (
    <form className="p-6 bg-yellow shadow-md rounded-lg space-y-4">
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
      Nombre:
    </label>
    <input
      type="text"
      id="name"
      placeholder="Anthony Mondalgo"
      className="w-full p-2 border border-gray-300 rounded"
    />

    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-700"
    >
      Email:
    </label>
    <input
      type="text"
      id="email"
      placeholder="futsite@gmail.com"
      className="w-full p-2 border border-gray-300 rounded"
    />

    <label
      htmlFor="message"
      className="block text-sm font-medium text-gray-700"
    >
      Mensaje:
    </label>
    <textarea
      id="message"
      placeholder="Escríbenos..."
      className="w-full p-2 border border-gray-300 rounded"
    ></textarea>

    <input
      type="button"
      value="ENVIAR"
      className="w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
    />
  </form>
  );
};