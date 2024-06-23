import React from 'react'

const Navbar = ({ setCountry, setSearch, setLoading, setCategory }) => {

    const newCategory = ['business', 'entertainment', 'health', 'science', 'sport', 'technology'];

    const countryData = ['in','ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];

    const handleClick = (id) => {
        newCategory.map((elem, index) => {
            return (id === index) ? setCategory(elem) : null;
        })
    }
    const handleChange = (con) => {
        setCountry(con);
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
                                <a className="nav-link pointer" aria-current="page" onClick={() => { setLoading('Loading...'); setCategory('general') }} href="/">All News</a>
                            </li>
                            {
                                newCategory.map((items, id) => {
                                    return <li className="nav-item" key={id}>
                                        <a className="nav-link pointer text-capitalize" onClick={() => {
                                            setLoading('Loading...');
                                            handleClick(id);
                                        }
                                        }>
                                            {items} </a>
                                    </li>
                                })
                            }
                        </ul>
                        <form className="d-flex" role="search">
                            <select className="form-select text-uppercase"  onChange={(e) => setCountry(e.target.value)}>
                                {
                                    countryData.map((data, idx) => {
                                        return (
                                            <option className='text-uppercase' value={data} key={idx}>{data}</option>)
                                    })
                                }
                            </select>
                            <input className="form-control me-2" type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
