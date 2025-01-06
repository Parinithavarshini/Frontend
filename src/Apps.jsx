import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Createuser from './Createuser'
import Updateuser from './Updateuser'
import User from './User'
function Apps()
{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<User />}></Route>
                    <Route path='/create' element={<Createuser />}></Route>
                    <Route path='/update/:id' element={<Updateuser />}></Route>
                </Routes>
            </Router>
            {/* <h1>hi</h1> */}
            
        </div>
    )
}
export default Apps;
