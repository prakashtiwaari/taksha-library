import './App.css';
import {Routes, Route} from "react-router-dom";
import {TakshaHome} from "./TakshaHome";
import {AllTakshaComponentProvider} from "./all-components/all-taksha-component-provider";
import {NoRoute} from "./no-route";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<TakshaHome/>}/>
            <Route path="/all-taksha-components" element={<AllTakshaComponentProvider/>}/>
            <Route path="*" element={<NoRoute/>}/>
        </Routes>

    );
}

export default App;
