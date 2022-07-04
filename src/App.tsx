import Request from "./components/Request";
import Response from "./components/Response";

function App() {
  return (
    <div>
      <p className='font-bold text-2xl'>Kanso</p>
      <br></br>
      <main className="flex w-screen bg-slate-100">
        <Request />
        <Response />
      </main>
    </div>
  )
}

export default App
