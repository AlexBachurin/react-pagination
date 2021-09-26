import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useFetch } from './utils/useFetch'
import SingleFollower from "./components/SingleFollower";
import Loading from "./components/Loading";
function App() {

  const { data, loading } = useFetch();

  //state for 1 page items from fetch data
  const [followersList, setFollowersList] = useState([]);
  //state for value of current clicked page
  const [value, setValue] = useState(0)
  //only setFellowersList when we are not loading and value of loading changes, else we wont get proper result

  //var for pages list
  const pagesList = Array.from({ length: data.length });
  useEffect(() => {
    if (loading) return
    setFollowersList(data[value])

  }, [loading, value, data])

  //click handle, when we clicking on page we grab it textcontent and set it to value state
  //so if we clicked on page 5, value will be 5
  const handlePageClick = (e) => {
    console.log(e.target.textContent);
    //transform to number, because we need textContent of clicked page - 1 in our value
    const pageNumber = Number(e.target.textContent);
    setValue(pageNumber - 1)
  }

  //next prev page handlers
  const prevPage = () => {
    console.log(value)
    //check if value is 0 when navigate to last page
    if (value === 0) {
      setValue(followersList.length - 1);
    } else {
      setValue(value - 1);
    }

  }

  const nextPage = () => {
    //check if we on last page
    console.log(value)
    if (value === followersList.length - 1) {
      setValue(0)
    }
    else {
      setValue(value + 1);
    }
  }



  return (
    <main>
      <Navbar />
      <div className="section-title">
        <h1>Pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        {loading ? <Loading /> : <div className="container">
          {followersList.map(item => {
            return <SingleFollower key={item.id} {...item} />
          })}
        </div>}
        <div className="page-container">
          <button onClick={prevPage} className="prev-btn">prev</button>
          {pagesList.map((item, index) => {
            // add active class to button if index match value
            //classname for button
            let btnClass = 'pagination-btn';
            if (index === value) {
              btnClass += ' active-btn'
            }

            return <button className={btnClass} onClick={handlePageClick} key={index}>{index + 1}</button>
          })}
          <button onClick={nextPage} className="next-btn">next</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
