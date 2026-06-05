import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"

// Lazy load all the pages
const Home = lazy(() => import('./page/Index'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
