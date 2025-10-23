function Blogs() {
  const blogs = [{ imageurl: "blog_1.jpg" },
  { imageurl: "blog_2.jpg" },
  { imageurl: "blog_3.jpg" }]
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>LATEST BLOGS</h1>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", gap: "20px" }}>
        {blogs.map((value, index) => <div key={index}>
          <img src={`/${value.imageurl}`} height="300px" width="400px" />

        </div>)
        }
      </div>
    </div>
  )
}
export default Blogs;