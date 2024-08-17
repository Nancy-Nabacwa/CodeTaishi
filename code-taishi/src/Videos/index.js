import "./index.css";
import Navbar from "../Navbar";







const Videos = () =>{
  return (
    <div className="container">
      <Navbar/>
      <h1 className="videos-title">Videos</h1>
      <div id="videos">

<div className="video-text">
  Hi! We have a few short videos for you on how Pinterest works.
  Enjoy!

</div>
        <div id="vids1">
          <div className="part1">
          
          <p className="video-title">Who Built Pinterest </p>

          <a href="https://www.loom.com/share/6ea4062e94204312b73fea716862031e">
              <img
              id="thumbnail"
                alt="Part 1"
                style={{ maxWidth: "200px" }}
                src="https://cdn.loom.com/sessions/thumbnails/6ea4062e94204312b73fea716862031e-1720671560360-with-play.gif"
              />
            </a> 
          </div>

          <div className="part2">
      
            <p className="video-title">How Pinterest Was Developed </p>
           
            <a href="https://www.loom.com/share/6ea4062e94204312b73fea716862031e">
              <img
              id="thumbnail"
                alt="Part 1"
                style={{ maxWidth: "200px" }}
                src="https://cdn.loom.com/sessions/thumbnails/6ea4062e94204312b73fea716862031e-1720671560360-with-play.gif"
              />
            </a> 
          </div>

          <div className="part3">
         
            <p className="video-title">Use Case and Impact</p>
           
            <a href="https://www.loom.com/share/b99c2f6934024a609ce84a24417a6497">
              <img
              id="thumbnail"
                alt="Part 3"
                style={{ maxWidth: "200px" }}
                src="https://cdn.loom.com/sessions/thumbnails/b99c2f6934024a609ce84a24417a6497-with-play.gif"
              />
            </a>
          </div>
        </div>

        <div id="vids2">
          <div className="part4">
            <p className="video-title">
                Revenue Generation
              </p>
            
            <a href="https://www.loom.com/share/48dd017c1465468b9784a15530253d53">
              <img
              id="thumbnail"
                alt="Part 4"
                style={{ maxWidth: "200px" }}
                src="https://cdn.loom.com/sessions/thumbnails/48dd017c1465468b9784a15530253d53-with-play.gif"
              />
            </a>
          </div>

          <div className="part5">
           
              <p className="video-title">
                Key Features of Pinterest
            
            </p>
            <a href="https://www.loom.com/share/11a44b272a7742d88fe4e05333fe7fd6">
              <img
              id="thumbnail"
                alt="Part 5"
                style={{ maxWidth: "200px" }}
                src="https://cdn.loom.com/sessions/thumbnails/11a44b272a7742d88fe4e05333fe7fd6-with-play.gif"
              />
            </a>
          </div>

          <div className="part6">
            
              <p className="video-title">Pros and Cons</p>
            
            <a href="https://www.loom.com/share/bf82a9eb5cbe44eda57165a81b628088">
              <img
              id="thumbnail"
                alt="Part 6"
                style={{ maxWidth: "200px" }}
                src="https://cdn.loom.com/sessions/thumbnails/bf82a9eb5cbe44eda57165a81b628088-with-play.gif"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
