import React from 'react'

const Navbar = ({setSearch, setLoading, setCategory }) => {

    const newCategory = ['business', 'entertainment', 'health', 'science', 'sport', 'technology'];
    const handleClick = (id) => {
        newCategory.map((elem, index) => {
            return (id === index) ? setCategory(elem) : null;
        })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-opacity-50" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" onClick={() => setCategory('general')}>NewsApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link pointer"  aria-current="page" onClick={() =>{setLoading('Loading...'); setCategory('general')}} href="/">All News</a>
                            </li>
                            {
                                newCategory.map((items, id) => {
                                    return <li className="nav-item" key={id}>
                                        <a className="nav-link pointer text-capitalize" onClick={() =>{
                                            setLoading('Loading...'); 
                                            handleClick(id);}
                                            }>
                                             {items} </a>
                                    </li>
                                })
                            }
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar