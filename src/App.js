import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FullHeight from "react-full-height";
import Navigasi from "./components/Navbar";
import ListBerita from "./components/ListBerita";
import DetailBerita from "./components/DetailBerita";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <FullHeight className="d-flex flex-column justify-content-between">
        <Navigasi />
        <Switch>
          <Route exact path="/">
            <ListBerita kategori="" />
          </Route>
          <Route exact path="/Home">
            <ListBerita kategori="" />
          </Route>
          <Route exact path="/Nasional">
            <ListBerita kategori="/nasional" />
          </Route>
          <Route exact path="/Internasional">
            <ListBerita kategori="/internasional" />
          </Route>
          <Route exact path="/Olahraga">
            <ListBerita kategori="/category/?type=olahraga" />
          </Route>
          <Route exact path="/Lifestyle">
            <ListBerita kategori="/category/?type=lifestyle" />
          </Route>
          <Route exact path="/Teknologi">
            <ListBerita kategori="/category/?type=teknologi" />
          </Route>
          <Route exact path="/Ekbis">
            <ListBerita kategori="/category/?type=eksbis" />
          </Route>
          <Route exact path="/kalam">
            <ListBerita kategori="/category/?type=kalam" />
          </Route>
          <Route exact path="/Cari/:keyword">
            <ListBerita kategori="/search/?q=" />
          </Route>
          <Route exact path="/detail/:url">
            <DetailBerita />
          </Route>
        </Switch>
        <Footer />
      </FullHeight>
    </Router>
  );
}

export default App;
