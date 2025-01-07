import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoardLayout from "./wrappers/DashBoardLayout";
// import Card from "./pages/Card";
import movieLoader from "./loaders/movieLoader";
import WatchList from "./pages/WatchList";

const routes = [
  {
    path: "/",
    element: <DashBoardLayout />,
    loader: movieLoader,
    hydrateFallbackElement: <p> Loading...</p>,
    children: [
      {
        path: "/watchlist/:id",
        element: <WatchList />,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
      {
        path: "contact",
        element: <h1>Contact</h1>,
      },
    ],
  },
];
const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
