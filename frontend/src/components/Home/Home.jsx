import Menu from "../Menu/Menu";
import Filter from "../Filters/Filter";
import NeuLogo from '../../images/northeastern univ logo.png';
import { getAllUnis } from "../../redux/action/index";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import React from "react";
const Home = () => {
    document.body.classList.add('grey');
    const dispatch = useDispatch();
    
    const uniList = useSelector(state => state.uniList)
    console.log("list",uniList)
    useEffect(() => {
        dispatch(getAllUnis())
    },[])
    return (
        <>
        <Menu />
        <Filter />
        <div className="exploreParent">
            <div className="row cardParent">
                {
                    uniList.map((uniList) => 
                    (
                         <div className="col-4">
                         <div className="universityEl">
                             <div className="col-12 uniLogo">
                                 <img src={uniList.logoUrl} alt="University Logo" />
                             </div>
     
                             <div className="col-12 uniName">
                                 <Link to={`/about_uni/${uniList._id}`}><span>{uniList.name}</span> </Link>
                             </div>
                             <div className="col-12 uniLocation">
                                 {uniList.location[0].name}
                             </div>
                             <div className="row">
                                 <div className="col-6 colDets">
                                     <div className="descText">Avg Tuition Fee</div>
                                     <div className="descValue">{uniList.avgTuitionCost} $</div>
                                 </div>
                                 <div className="col-6 colDets">
                                     <div className="descText">Acceptance Rate</div>
                                     <div className="descValue">{uniList.acceptanceRate} </div>
                                 </div>
                             </div>
                             <div className="col-12 wishListSection">
                                 <button>Save to Wishlist</button>
                             </div>
                         </div>
                        </div>
                     )
                )
                }
            </div>
        </div>
        </>
    )
}
export default Home;