import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {Home} from "pages/home/home";

export default ()=>(
    <BrowserRouter>
    <Route path="/bananas" component={Home}/>
    </BrowserRouter>
);