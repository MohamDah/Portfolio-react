import Layout from "./layouts/Layout"
import HomePage from "./HomePage"
import ProjectPage from "./ProjectPage"

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/:id" element={<ProjectPage />} />
        </Route>
))

export default function App() {
    return (
        <div className="container">
            <RouterProvider router={router} />
        </div>
    )
}