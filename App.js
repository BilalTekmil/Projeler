import './App.css';
import Course from "./course";
import {useState} from "react";


function getRandomCourse (){
  const courseArray = ["Pax","Pax1","Pax2","Pax3"];
  return courseArray[Math.floor(Math.random()*courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([])
  
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])
  };
  const courseList = courses.map ((course,index) => {
    return <Course key= {index} courseName ={course} />;
  });

    return (
    <div className="App">
      <button  className="appButton" onClick={handleClick} >Logo Ekle</button>
      <div className='courseList'>
        {courseList}
      </div>
    </div>
  );
}

export default App;
