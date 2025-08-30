import { useState } from "react";
import Home from "./pages/home/Home";
import RootLayOut from "./components/roots/RootLayOut";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Contact from "./pages/contacts/Contact";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
