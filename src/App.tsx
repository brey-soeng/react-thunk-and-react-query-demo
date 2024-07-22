import { RouterProvider } from "react-router-dom"
import router from "./router"

function App() {

  return (
    <div className="py-10 px-10">
      <ul className="flex justify-start items-center gap-2 py-3">  
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/roles">Roles</a></li>
      </ul>
      <div>
        <RouterProvider router={router} />
      </div>
      </div>
  )
}

export default App
