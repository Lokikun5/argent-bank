import '../src/style/App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserView from "./pages/UserView";
const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/sign-in',
    element: <SignInPage/>,
  },
  {
    path: 'user/:userId',
    element: <UserView />
  }

])
function App() {
  return <RouterProvider router={router}/>
}

export default App;
