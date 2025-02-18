import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import  AIBot  from './pages/AIBot';
import { Profile } from './pages/Profile';
import { Todo } from './pages/Todo';
import { Game } from './pages/Game';
import { Video } from './pages/Video';
import { Library } from './pages/Library';
import { Quiz } from './pages/Quiz';
import { TodoList } from './pages/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aibot" element={<AIBot />} />
          <Route path="profile" element={<Profile />} />
          <Route path="todo" element={<TodoList />} />
          <Route path="todo/:listId" element={<Todo />} />
          <Route path="game" element={<Game />} />
          <Route path="video" element={<Video />} />
          <Route path="library" element={<Library />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;