import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  return (
    <>
      {/* Header Navigation — must live OUTSIDE overflow-x-hidden so sticky works */}
      <Header />
      <div className="flex flex-col min-h-screen bg-slate-50/30 overflow-x-hidden">
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
