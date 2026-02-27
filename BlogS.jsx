import React from "react";
import "./BlogS.css";

// 👇 Import images
import blog1 from "./images/blog2.png";
import blog2 from "./images/blog.png";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      category: "Business Consulting",
      title: "Exclusive Updates and Analysis in Our Consulting Agency Blog",
      image: blog1,   // 👈 local image
      admin: "Admin",
      comments: "Comments",
    },
    {
      id: 2,
      category: "Business Consulting",
      title: "Breaking Down Complex Issues in Our Consulting Agency Blog",
      image: blog2,   // 👈 local image
      admin: "Admin",
      comments: "Comments",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <div>
          <p className="small-title">LATEST BLOG</p>
          <h2>OUR LATEST TRENDING <br></br>BLOGS & NEWS</h2>
        </div>
        <button className="explore-btn">Explore More</button>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-image">
              {/* 👇 Image from local folder */}
              <img src={blog.image} alt={blog.title} />
              <span className="category">{blog.category}</span>
            </div>

            <div className="blog-content">
              <div className="blog-meta">
                <span>{blog.comments}</span>
                <span>By {blog.admin}</span>
              </div>

              <h3>{blog.title}</h3>

              <button className="read-btn">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;