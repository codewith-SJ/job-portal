export default function Hero() {
  return (
    <section className="container mx-auto my-16">
      <h1 className="text-4xl font-bold text-center">
        Find your next <br />
        dream job
      </h1>
      {/* <p className="text-center text-gray-600"> */}
      {/*   Lorem Ipsum is simply dummy text of the printing and typesetting */}
      {/*   industry. Lorem Ipsum has been the industry's standard dummy text ever */}
      {/*   since the 1500s, when an unknown printer took a galley of type and of */}
      {/*   Lorem Ipsum. */}
      {/* </p> */}
      <form className="flex gap-2 mt-4 max-w-md mx-auto">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md"
          placeholder="Search Keywords..."
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
}
