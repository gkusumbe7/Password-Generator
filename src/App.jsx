import './App.css'
function App() {
  return (
    <>
      <main className="flex text-center justify-center p-20 ">

              <div className="bg-cyan-200 flex flex-col gap-5 border border-black p-5 shadow-xl"> 
                  <p className="text-center font-serif font-bold text-3xl">Password Generator</p>
                  

                  <div className="text-center">
                      <label className="font-semibold text-md">Enter Password Length :</label>
                      <input type="number" className="ml-2 w-14 rounded-sm border border-black" placeholder="Enter Length" name="password-length" />
                  </div>

                  <div className=" text-left ml-10">
                    <h2 className="text-md font-semibold mb-2">Choose Password Generate Types:</h2>
                    <div className="flex flex-col">
                    <label > <input type="checkbox" name="" id="" />&nbsp; Include upper case</label>
                    <label > <input type="checkbox" name="" id="" />&nbsp; Include lower case</label>
                    <label > <input type="checkbox" name="" id="" />&nbsp; Include numbers</label>
                    <label > <input type="checkbox" name="" id="" />&nbsp; Include symbols</label>
                    </div>
                    </div>
                  <div className="ml-2">
                    <input type="text" className="border border-black rounded-md "></input>
                    <button className="border border-black rounded-md px-2 ml-3">Copy</button>
                  </div>
                  <button className="ml-20 font-semibold border w-fit p-1 border-black rounded-xl ">Generate Password</button>
           </div>
      </main>
    </>
  )
}

export default App
