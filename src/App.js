
import Blog from './pages/blog/blog';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BlogPage from './pages/blogPage/blogPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Blog />}>
      </Route>
      <Route path=":slug" element={ <BlogPage />}>
      </Route>
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
