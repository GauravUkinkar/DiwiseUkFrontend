import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogLayout.css";
import axios from "axios";
import { Helmet } from "react-helmet";
const BlogLayout = () => {
  const [blog, setblog] = useState([]);

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const { blog_id } = useParams();
  const fetchData = async (baseUrl) => {
    try {
      const response = await axios.get(baseUrl);

      const json = response.data.data;
      setblog(json);
      // console.log(json)
    } catch (error) {
      // console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData(
      `${process.env.REACT_APP_PORT_BACKEND}blog/getBytitle?title=${blog_id
        .split("_")
        .join(" ")}`
    );
  }, []);
  console.log(blog_id);
  console.log(blog);
  function formatDate(date) {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  return (
    <>
      <Helmet>
        <title>{blog?.meta_title}</title>
        <meta name="description" content={blog?.meta_description} />
        <meta name="keyword" content={blog?.meta_keyword} />
        <link rel="canonical" href="https://diwise.uk/blogs/" />
      </Helmet>
      <div className="layout">
        <div className="layout-container">
          <div className="top">
            <div className="imgbox bg-img-cover">
              <img src={blog?.featuredImage} alt={blog?.alter_text} />
            </div>
            <div className="overlay">
              <h1>{blog.title}</h1>
            </div>
          </div>
          <div className="mid">
            <div class="first-section">
              <div className="date">
                <strong>Start Date: </strong>{" "}
                {blog.date ? formatDate(blog.date) : ""}
              </div>

              <div className="category">
                <strong>Category:</strong>{" "}
                {blog.category ? blog.category : "No category"}
              </div>
            </div>
            <div>
              <strong>Description: </strong> {stripHtml(blog?.description)}
            </div>
          </div>
          <div className="bottom">
            <div
              className="data"
              dangerouslySetInnerHTML={{ __html: blog.blog_content }}
            />
            <Link to="/blogs" className="btn">
              All Blogs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
