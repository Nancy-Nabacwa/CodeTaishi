import Landingpage  from "./Landing";
import Podcast from "./Podcast";
import Blogs from "./Blogs";
import Videos from "./Videos"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./Resume";




const App =()=>{
  return(
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={
          <>          
            <Landingpage/>

          </>
        } />
 <Route path="/Videos" element={<Videos/>}/>
        <Route path="/Podcast" element={<Podcast/>}/>
        <Route path="/Blogs" element={<Blogs/>}/>
        <Route path="/AboutUs" element={<Resume/>}/>
        

        </Routes>
      </Router>
      
      
      
    </div>
  )
}
export default App;
