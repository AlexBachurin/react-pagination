import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useFetch } from './utils/useFetch'
import SingleFollower from "./components/SingleFollower";
import Loading from "./components/Loading";
function App() {

  const { data, loading } = useFetch();

  const [followersList, setFollowersList] = useState([]);

  //only setFellowersList when we are not loading and value of loading changes, else we wont get proper result

  //var for pages list
  const pagesList = Array.from({ length: followersList.length });

  console.log(pagesList)
  useEffect(() => {
    if (loading) return
    setFollowersList(data[0])

  }, [loading])

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
          {pagesList.map((item, index) => {
            return <button>{index + 1}</button>
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
