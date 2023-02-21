import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import UnitTestingDemo from "./pages/UnitTestingDemo/UnitTestingDemo";
import ErrorBoundary from "./shared/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <main className="mt-5 pt-3 container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/about" element={<About />} />
            <Route path="/unit-testing-demo" element={<UnitTestingDemo />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
