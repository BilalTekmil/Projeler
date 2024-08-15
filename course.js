import Pax from "./PAX/pax.webp";
import Pax1 from "./PAX/pax1.webp";
import Pax2 from "./PAX/pax2.webp";
import Pax3 from "./PAX/pax3.webp";
import "./course.css";

const courseMap = {
    Pax,
    Pax1,
    Pax2,
    Pax3
}

function Course ({courseName}) {
    // console.log (Pax);
    // console.log (courseName);
    console.log (courseMap[courseName]);

    return <div className="coursediv">
        <img className="course" src={courseMap[courseName]} alt="" />
    </div>;
}
export default Course;