import RequestPanel from "./components/RequestPanel";
import ResponsePanel from "./components/ResponsePanel";

function App() {
  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      <p className='font-bold text-2xl text-white'>Kanso</p>
      <br></br>
      <main className="flex h-full w-screen bg-slate-100 flex-col sm:flex-row">
        <RequestPanel />
        <ResponsePanel />
      </main>
    </div>
  )
}

export default App
