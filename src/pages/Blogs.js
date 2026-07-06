import React, { useEffect, useState } from "react";
import "./Blogs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImSearch } from "react-icons/im";
import sad from "../img/Sad.gif";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([""]);
  const [isSearching, setIsSearching] = useState(false);
  const [apidata, setApidata] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Uncategorized");
  const [loading, setloading] = useState(false);

  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    featuredImage: "",
    category: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    AOS.init();
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PORT_BACKEND}blog/getallblogs`
      );
      const blogs = response.data.map((item) => item.data);

      console.log(blogs, "blogs >>>");

      setApidata(blogs);
      setloading(true);
    } catch (error) {
      console.error("Fetch error:", error);
      alert(
        "Failed to fetch blogs. Please check your server or internet connection."
      );
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterData = () => {
    const filteredData = apidata.filter((data) => {
      const titleMatch = data.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const dateMatch =
        !fromDate || !toDate || (data.date >= fromDate && data.date <= toDate);
      const categoryMatch =
        selectedCategory === "Uncategorized" ||
        data.category.name === selectedCategory;
      return titleMatch && dateMatch && categoryMatch;
    });

    setSearchResults(filteredData);
    setIsSearching(true);
  };

  const resetFilters = () => {
    setFromDate("");
    setToDate("");
    setSelectedCategory("Uncategorized");
    setSearchResults([""]);
    setIsSearching(false);
    getData();
    setSearchTerm("");
  };
  console.log(apidata);

  return (
    <>
      <Helmet>
        <title>Blogs - Diwise Building a Strong Business Identity</title>
        <meta
          name="description"
          content="Explore expert brand development services, brand-building strategies, and tips for creating a strong and memorable brand."
        />
        <meta
          name="keyword"
          content=" brand building blogs, brand building strategies blogs, brand blog, digital brand blogs"
        />
        <link rel="canonical" href="https://diwise.uk/blogs/" />
      </Helmet>
      {loading ? (
        <section className="blog">
          <div className="blog-container">
            <h2 data-aos="zoom-in-left">
              Our <span>Blogs</span>
            </h2>

            <div className="blogs">
              <div className="filters-box">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={searchTerm}
                    onChange={handleSearch}
                    onKeyUp={filterData}
                  />
                </div>

                <div className="date">
                  <div className="from">
                    <label htmlFor="fromDate">Start Date</label>
                    <input
                      type="date"
                      id="fromDate"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </div>
                  <div className="to">
                    <label htmlFor="toDate">End Date</label>
                    <input
                      type="date"
                      id="toDate"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>
                </div>
                <select
                  name="category"
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="Uncategorized">No categories</option>
                  {[...new Set(apidata.map((data) => data.category))].map(
                    (categoryName) =>
                      categoryName && (
                        <option value={categoryName} key={categoryName}>
                          {categoryName}
                        </option>
                      )
                  )}
                </select>

                <div className="btns">
                  <button className="btn" onClick={filterData}>
                    Apply
                  </button>
                  <button className="btn" onClick={resetFilters}>
                    Reset
                  </button>
                </div>
              </div>

              <div className="blog-box">
                {searchResults.length === 0 ? (
                  <div
                    className="notfound"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                    }}
                  ></div>
                ) : isSearching ? (
                  searchResults.map((data) => (
                    <div
                      className="blog-element"
                      data-aos="zoom-in-left"
                      data-aos-delay="400"
                      key={data.id}
                    >
                      <div className="image">
                        <img src={data.featuredImage} alt={data?.alter_text} />
                      </div>
                      <div className="content">
                        <p className="category">{data.category}</p>
                        <p className="title">{data.title}</p>
                        <Link className="btn" to={`/blogs/${data.title.split(" ").join("_")}`}>
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  apidata
                    .slice()
                    .reverse()
                    .map((data) => (
                      <div
                        className="blog-element"
                        data-aos="zoom-in-left"
                        data-aos-delay="400"
                        key={data.id}
                      >
                        <div className="image bg-img-cover">
                        
                            <img src={data.featuredImage} alt="" />
                          </div>
                      
                        <div className="content">
                          <p className="category">{data.category}</p>
                          <p className="title">{data.title}</p>
                          <Link className="btn" to={`/blogs/${data.title.split(" ").join("_")}`}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Blogs;
