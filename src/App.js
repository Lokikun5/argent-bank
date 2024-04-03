import '../src/style/App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
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
    path: 'user',
    element: <UserView />
  }

])
function App() {
  return (<Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
  )
}

export default App;
