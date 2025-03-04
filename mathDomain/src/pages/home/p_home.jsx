
export default function Home() {
  return (
    <>
      <div className="">
        <div
          id="hero"
          className="m-4 bg-brand200 rounded-md flex flex-col py-48 px-10 text-white"
        >
          <h1 className="text-4xl font-Montserrat font-bold">
            Learning Math, <br /> Made Easy
          </h1>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a topic"
            className="w-1/2 p-2 my-4 rounded-md"
          />
        </div>
        <div id="mission" className="m-4 text-center p-4">
            <h2 className="text-5xl font-Montserrat font-bold">Our Mission</h2>
            <p className="text-xl font-Montserrat pt-20">To make learning math easy and fun for everyone.</p>
            </div>
        <div id="lessons">

        </div>
      </div>
    </>
  );
}
