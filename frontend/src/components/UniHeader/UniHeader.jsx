import neuLogo from '../../images/northeastern univ logo.png';
import { useDispatch, useSelector } from 'react-redux';
const UniHeader = (props) => {
    const uniDetsById = useSelector(state => state.uniWithId)
    console.log("head",uniDetsById)
    const test = uniDetsById?.location;
    return (
        <div className="headerParent">
            <div className="uniImg">
                <img src={neuLogo} alt="University Logo" />
            </div>
            <div className="uniDetails">
                <div className="uniName">
                    {uniDetsById.name}
                </div>
                {/* <div className="uniLoc">
                    {
                        uniDetsById?.location.map((loc) => (
                            <div>{loc.name}</div>
                        )
                        )
                    }
                </div> */}
                <div className="uniDesc">
                    <div>
                        <span>Global Ranking   {uniDetsById.ranking}</span>
                    </div>
                    <div>
                        <span>Acceptance Rate   {uniDetsById.acceptanceRate}</span>
                    </div>
                </div>
            </div>
        </div>
    ) 
} 

export default UniHeader;