import RequestPanel from "./components/RequestPanel";
import ResponsePanel from "./components/ResponsePanel";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex h-full w-screen bg-slate-100 overflow-hidden flex-col sm:flex-row p-5 rounded">
        <RequestPanel />
        <ResponsePanel />
      </main>
    </div>
  )
}

export default App
