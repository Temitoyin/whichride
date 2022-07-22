import React, {useEffect, useState} from 'react'
import styles from "./blog.module.scss";
import axios from 'axios';
import { Link } from 'react-router-dom';
 const Blog = () =>  {
    const [blogData, setBlogData] = useState();
    const [posts, setPosts] = useState();
    const allBlogPostUrl = " https://wp.newborntoolkit.org/wp-json/nest360/v1/news";
    const getBlogPosts = async () => {
        try {
           await axios.get(allBlogPostUrl).then((res) => res.data.data).then((res) => setBlogData(res))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
     getBlogPosts(); 
   
    }, [])
    const BlogCard = ({img, title, summary, date, slug}) => (
      <Link to={`/${slug}`}>
          <div className={styles.blogCard}>
        <img src={img} alt={img} />
        <p>{title}</p>
        <div>
        <p>{summary}</p>
        <p>{date}</p>
        </div>
      </div>
      </Link>
  
    )
    console.log(posts);
  return (
    <div className={styles.blog}>
        <div className={styles.blogList}>
          <h1>Blog Posts</h1>
          <div>
          {
            blogData && blogData.posts && blogData.posts.map((e) => (
              <BlogCard img={e.image} title={e.title} summary={e.summary} date={e.date} key={e.id} slug={e.slug}/>
            ))
          }
          </div>
        
        </div>
    </div>
  )
}

export default Blog