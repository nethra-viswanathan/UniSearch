const Filter = () => {
    return (
        <div className="filterParent">
            
            <div className="filterItems">
                <form action="" className="formParent">
                    <div className="filterLabel">
                        Filters:
                    </div>
                    <select name="" id="">
                        <option value="0">Courses Offered</option>
                    </select>
                    <select name="" id="">
                        <option value="0">Ranking</option>
                    </select>
                    <select name="" id="">
                        <option value="0">Location</option>
                    </select>
                    <select name="" id="">
                        <option value="0">Sort By</option>
                    </select>
                    <input type="text" className="searchBox" placeholder="Search" />
                </form>
            </div>
        </div>
    )
}

export default Filter;