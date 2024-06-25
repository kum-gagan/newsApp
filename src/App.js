import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar/Navbar';
import NewsCard from './newsCard/NewsCard';
import './index.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [loading, setLoading] = useState('Loading...');
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('in');
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 12;
  const totalPages = Math.ceil(totalResults / pageSize);

  const Api_Key = '246dee46ceea409e9985398ebd9c5cd0';


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${currentPage}&apiKey=${Api_Key}`);
        const data = await res.json();
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        console.log(data)
        setLoading('');
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, [currentPage, category, country]);

  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  
  const handleNextPage = () => {
    if (currentPage * pageSize < totalResults) {
      setCurrentPage(currentPage + 1);
    }
  };
  

  return (
    <div>
      <Navbar 
      category={category}
      setCountry={setCountry}
      setLoading={setLoading}
      setSearch={setSearch} 
      setCategory={setCategory}/>

      <h1 className='text-center mt-2 text-white'>Latest News</h1>
      <h2 className='text-center mt-2 text-danger'>{loading}</h2>

{/* News Card */}
      <div className="d-flex flex-wrap justify-content-center">
        {articles.filter((items)=>{
          return search.toLocaleLowerCase() === '' ? items : items.title.toLocaleLowerCase().includes(search);
        }).map((items, index) => (
          <NewsCard
            key={index}
            title={items.title}
            description={items.description}
            publishedAt={items.publishedAt}
            img={items.urlToImage}
            url={items.url}
          />
        ))}
      </div>

{/* pagination */}
      <div className="d-flex justify-content-center my-3">
        <a href="#" onClick={handlePreviousPage} className="btn  btn-secondary mx-2" disabled={currentPage === 1}>
          Previous
        </a>
        {Array.from({ length: totalPages }, (_, index) => (
          <a
            key={index + 1}
            href="#"
            onClick={() => handlePageClick(index + 1)}
            className={`btn mx-1 ${currentPage === index + 1 ? 'btn-primary' : 'btn-secondary'}`}
          >
            {index + 1}
          </a>
        ))}
        <a href="#" onClick={handleNextPage} className="btn btn-secondary mx-2" disabled={currentPage * pageSize >= totalResults}>
          Next
        </a>
      </div>
    </div>
  );
}

export default App;
