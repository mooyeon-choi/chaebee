import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Main from './pages/main';
import Posts from './pages/posts';
import Post from './pages/post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="main" element={<Main />} />
          <Route path="posts" element={<Posts />}>
            <Route path=":postId" element={<Post />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
