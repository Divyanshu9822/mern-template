import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Routes>
        {/* <Route path="/" element={</>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
