import React from "react";
import MainPage from "./PAges/MainPage";
import { Route, Routes} from "react-router-dom";
import TablePage from "./PAges/TablePage";
import InfoPage from "./PAges/InfoPage";
import Sidebar from "./Components/Sidebar";
import Page3 from "./PAges/3";
import Page4 from "./PAges/4";
import Header from "./Components/Header";

function App(){
    return(
        <div className="glava">
        <Routes>
            <Route index element={<MainPage/>} />
            <Route exact path='/products/table/:id' element={<TablePage />} />
            <Route exact path='/info' element={<InfoPage />} />
            <Route exact path='/page3' element={<Page3 />} />
            <Route exact path='/page4' element={<Page4 />} />
        </Routes>
            <Header/><Sidebar/>
        </div>
    )
}

export default App;