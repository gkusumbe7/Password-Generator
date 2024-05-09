import "./App.css";
function App() {
  return (
    <>
      <main className="flex text-center justify-center p-20 ">
        <div className="bg-blue-200 flex flex-col gap-5  p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <p className="text-center font-serif font-bold text-4xl">
            Password Generator
          </p>

          <div className="text-center">
            <label className="font-semibold text-xl">
              Enter Password Length :
            </label>
            <input
              type="text"
              className="px-1 ml-2 w-14 rounded-sm border border-black"
              name="password-length"
            />
          </div>

          <div className=" text-left ml-10">
            <h2 className="font-semibold text-xl mb-2">
              Choose Password Generate Types:
            </h2>
            <div className="flex flex-col m-2">
              <label className="text-md font-semibold">
                {" "}
                <input type="checkbox" name="" id="" />
                &nbsp; Include upper case{" "}
              </label>
              <label className="text-md font-semibold">
                {" "}
                <input type="checkbox" name="" id="" />
                &nbsp; Include lower case
              </label>
              <label className="text-md font-semibold">
                {" "}
                <input type="checkbox" name="" id="" />
                &nbsp; Include numbers
              </label>
              <label className="text-md font-semibold">
                {" "}
                <input type="checkbox" name="" id="" />
                &nbsp; Include symbols
              </label>
            </div>
          </div>
          <div className="ml-2">
            <input
              type="text"
              className="py-1 px-1 border border-black rounded-md "
            ></input>
            <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg mx-2 text-sm px-5 py-2 text-center me-2 mb-2">Copy </button>

          </div>
         
          <button
            type="button"
            class="ml-24 w-fit  text-white bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-black dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-md px-3 py-2.5 text-center me-2 mb-2"
          >
            Generate Password
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
