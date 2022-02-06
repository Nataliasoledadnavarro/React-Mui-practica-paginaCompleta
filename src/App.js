import Nav from "./components/Nav"
import Section from "./components/Section"
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Footer from "./components/Footer"

const App = () => {
  return (
    <Box>
      <Nav />
      <Section />
      <Divider variant="middle" sx={{ width: "85%", m: "auto", pb: 4 }} />
      <Footer />
    </Box>
  )
}

export default App;