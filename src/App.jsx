import './App.css';
import User from './component/User/User';
import Post from './component/Post/Post';
import Comments from './component/comments/comments';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/Users'>Users</Link>&nbsp;
        <Link to='/Posts'>Posts</Link>&nbsp;
        <Link to='/Comments'>Comments</Link>&nbsp;
        <Routes>
          <Route path='Users' element={<User></User>}></Route>
          <Route path='Posts' element={<Post></Post>}></Route>
          <Route path='Comments' element={<Comments></Comments>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <User/> */}
      {/* <Post/> */}
    </div>
  );
}

export default App;
