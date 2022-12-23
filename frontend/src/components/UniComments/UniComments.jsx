import UniHeader from "../UniHeader/UniHeader";
import UniMenu from "../UniMenu/UniMenu";
import editIcon from '../../images/edit.svg';
import deleteIcon from '../../images/delete.svg';
import Menu from "../Menu/Menu";
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments,addComment,updateComment,deleteComment } from "../../redux/action";
import { useEffect,useState } from "react";
import sendImg from '../../images/send_comment.svg'
const UniComments = () =>{
    document.body.classList.add('grey');
    const dispatch = useDispatch();
    const comments = useSelector(state => {
        console.log('state',state);
        return state.commentList});
    
    useEffect(() => {
        dispatch(getAllComments())
    },[])

    let [comment, setComment] = useState('');
    let [isEdit, setIsEdit] = useState(0);
    let [commentId, setCommentID] = useState(0);
    const handleChange = event => {
        setComment(event.target.value);
    };
    const setText = (id,comm,uniId) => {
        console.log(comm)
        setIsEdit(1);
        setComment(comm)
        setCommentID(id)
    }
    //Submit add form function
    const onFormSubmit = (event) => {
        //prevent the screen from loading
        event.preventDefault();
        if(!isEdit == 1){
            dispatch(addComment(comments[0]._id,comment,"nethra"));
        }else{
            dispatch(updateComment(comments[0]._id,commentId,comment,"nethra"));
        }
        //making API calls to add the comment
        
        setComment('')
    }

    return (
        <>
            <Menu />
            <div className="UniContainer">
                <UniHeader />
                <div className="bodyContainer">
                    <UniMenu />
                    <div className="commentContainer">
                        <h2>COMMENTS</h2>
                        <div className="body">
                            {
                                comments.map((list) => (
                                    list.userName == "nethra" ? 
                                    <div className="commentEl right">
                                        <div className="userName">
                                            {list.userName}
                                        </div>
                                        <div className="commentBubble">
                                            <div className="currUser">
                                                <div>{list.comment}</div>
                                                <div>
                                                    <img src={editIcon} alt="Edit Icon" height="20" onClick={() => {setText(list?._id,list?.comment)}} />
                                                    <img src={deleteIcon} alt="Delete Icon" height="20" onClick={() => dispatch(deleteComment(list?._id))} />
                                                </div>
                                            </div>
                                            <div className="time">10:09PM</div>
                                        </div>
                                    </div> :
                                    <div className="commentEl left">
                                        <div className="userName">
                                                {list.userName}
                                        </div>
                                        <div className="commentBubble">
                                            {list.comment}
                                            <div className="time">{list.updatedAt}</div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                            
                            
                            
                        </div>
                        <div className="addCommentSection">
                            <form action="" onSubmit={onFormSubmit}>
                                <input type="text" name="comment" id=" " placeholder="Enter your comments" onChange={handleChange} value={comment}/>
                                
                                    <button type="submit" className="submitComment" >
                                        <img src={sendImg} alt="sendImg" ></img>
                                    </button>
                                {/* <input type="submit" className="submitComment"></input></img> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default UniComments;