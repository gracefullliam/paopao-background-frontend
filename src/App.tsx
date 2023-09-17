import {BrowserRouter, Route, Routes} from "react-router-dom";
//导入页面组件
import Login from "./views/login/Login.tsx";
import Layout from "./Layout/Layout.tsx";
function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/layout" element={<Layout/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
