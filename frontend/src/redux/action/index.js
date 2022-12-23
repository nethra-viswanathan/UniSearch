import {LISTUNI,LISTMAJORS,UNIBYID,LISTCOMMENT,ADDNEWCOMMENT,UPDATECOMMENT,DELETECOMMENT} from './types';

//Base URL for all APIs
const URL = 'http://localhost:8080';


//API call for add comment
export const addComment = (uniId,comment,userName) => async(dispatch) => {
    
    const res = await fetch(`${URL}/comment/add`, {
    method:'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify( {"userName": userName,"comment" : comment, "universityId": uniId} ) })
    .then(response => response.json())
   
    .then(value => 
       { 
        dispatch({ type: ADDNEWCOMMENT, payload: value})}
        )
    


}

//API call to list all Universities from the DB
export const getAllUnis = () => async(dispatch) => {
    try{
        const res = await fetch(`${URL}/university/all`).then(res => res.json()).then(value => dispatch({ type: LISTUNI, payload: value}));
        
    }catch(error){
        console.log("Could not fetch item")
    }
}

//API call to return details of a university
export const getUniById = (id) => async(dispatch) => {
    try{
        const res = await fetch(`${URL}/university/${id}`).then(res => res.json()).then(value => dispatch({ type: UNIBYID, payload: value}));
        
    }catch(error){
        console.log("Could not fetch item")
    }
}

export const getAllMajors = () => async(dispatch) => {
    try{
        const res = await fetch(`${URL}/major/all`).then(res => res.json()).then(value => dispatch({ type: LISTMAJORS, payload: value}));
        
    }catch(error){
        console.log("Could not fetch item")
    }
}

export const getAllComments = () => async(dispatch) => {
    try{
        const res = await fetch(`${URL}/comment/all`).then(res => res.json()).then(value => dispatch({ type: LISTCOMMENT, payload: value}));
        
    }catch(error){
        console.log("Could not fetch item")
    }
}


// //API call to delete an API
export const deleteComment = (id) => async(dispatch) => {
    try{
        
        const res = await fetch(`${URL}/comment/${id}`,{method : 'DELETE'})
        .then(res => res.json())
        .then(value => {dispatch({ type: DELETECOMMENT, payload: value})});
    }catch(error){
        console.log("Could not delete item")
    }
}

// //API call to update an existing record
export const updateComment = (uniId,commentId,comment,userName) => async(dispatch) => {
    try{
        const res = await fetch(`${URL}/comment/${commentId}`, { 
            method : 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"userName": userName,"comment" : comment, "universityId": uniId}) })
            .then(response => response.json())
            .then(value => 
            { 
            dispatch({ type: UPDATECOMMENT, payload: value})}
                )
    }catch(error){
        console.log("Could not update an item")
    }
}


