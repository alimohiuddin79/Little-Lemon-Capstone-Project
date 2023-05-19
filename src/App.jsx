import Layout from "./Layout"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <Home />
        <Footer />
      </Layout>
    </>
  )
}

export default App