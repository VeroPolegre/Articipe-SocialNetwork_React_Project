import "./SearchBar.scss"

const SearchBar = () => {
    return (
        <>
            <form className='searchBarNav'>

               <div className="custom-label-input">
                    <label htmlFor="searchInput" className="material-symbols-outlined label-icon">search</label>
                    <input type="email" name="email" placeholder="Search" id="searchInput" className="text-input"/>
                </div>

            </form>
        </>
    )
};

export default SearchBar;