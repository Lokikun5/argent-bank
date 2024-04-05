import '../src/style/App.scss';
import { createBrowserRouter, RouterProvider, Navigate, Outlet  } from "react-router-dom";
import { Provider, useSelector } from 'react-redux';
import store from './store';
import HomePage from "../src/pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserView from "./pages/UserView";
import NotFoundPage from "./pages/NotFoundPage";

//protect the user page, accessible only by identification
function ProtectedRoute (){
  const userToken = useSelector((state) => state.user.token);
  return userToken ? <Outlet /> : <Navigate to="/sign-in" replace />;
}

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
    element: <ProtectedRoute />,
    children: [
      { path: '', element: <UserView /> }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
])
function App() {
  return (<Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
  )
}

export default App;
