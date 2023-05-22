import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound"
import OrderOnline from "./pages/OrderOnline/OrderOnline"

const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/order-online" element={<OrderOnline />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </Layout>
    </>
  )
}

export default App