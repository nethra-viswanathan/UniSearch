import Menu from "../Menu/Menu";
import toggleBtn from '../../images/toggle.svg'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMajors } from "../../redux/action";
const Course = () => {
    document.body.classList.add('grey');
    let [showDe,setShowDesc] = useState("false");
    let [id,setId] = useState(0); 
    const handleToggle = (id) => {
        setShowDesc(!showDe);
        setId(id);
    };
    const dispatch = useDispatch();
    
    const majors = useSelector(state => state.majors)
    useEffect(() => {
        dispatch(getAllMajors())
    },[])
    return (
        <>
            <Menu />
            <div className="courseParent">
                <div className="header">
                    Top Courses Preferred By Students
                </div>
                {majors.map((el) =>
                     <div className="body">
                     <div className="toggleHead" onClick={() => {handleToggle(el._id)}}>
                         <div className="course">
                             {el.name}
                         </div>
                         <div className="toggleBtn">
                             <img src={toggleBtn} alt="Open/Close Course" />
                         </div>
                     </div>
                     {
                        id === el?._id && showDe?
                        
                           
                            <div className="toggleBody">
                            <ul>{
                                el.degree.map((degree) =>
                                <li>{degree.name}</li>
                                /* <li>Stevents Institute of Technology</li>
                                <li>University of Cincinnati</li>
                                <li>University of Illinois Chicago</li>
                                <li>University of Texas at Austin</li> */
                                )}
                            </ul>
                            </div>
                            
                        
                        :null
                     }
                     
                 </div>
                )}
                
                
            </div>
            
        </>
    )
}
export default Course;