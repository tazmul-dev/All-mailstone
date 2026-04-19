import Link from "next/link";



const blogPage = () => {
    const blogs = [
  {
    id: 1,
    title: "Introduction to Web Development",
    slug: "introduction-to-web-development",
    author: "Tazmul Hossain",
    date: "2026-04-01",
    category: "Web Development",
    thumbnail: "https://i.ibb.co.com/1.jpg",
    content: "Web development is the process of building websites and web applications..."
  },
  {
    id: 2,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    author: "Tazmul Hossain",
    date: "2026-04-02",
    category: "React",
    thumbnail: "https://i.ibb.co.com/2.jpg",
    content: "React is a JavaScript library for building user interfaces..."
  },
  {
    id: 3,
    title: "Understanding JavaScript Basics",
    slug: "understanding-javascript-basics",
    author: "Tazmul Hossain",
    date: "2026-04-03",
    category: "JavaScript",
    thumbnail: "https://i.ibb.co.com/3.jpg",
    content: "JavaScript is a programming language used to make web pages interactive..."
  },
  {
    id: 4,
    title: "CSS Flexbox Guide",
    slug: "css-flexbox-guide",
    author: "Tazmul Hossain",
    date: "2026-04-04",
    category: "CSS",
    thumbnail: "https://i.ibb.co.com/4.jpg",
    content: "Flexbox is a layout module that helps align items efficiently..."
  },
  {
    id: 5,
    title: "How to Use Git & GitHub",
    slug: "how-to-use-git-github",
    author: "Tazmul Hossain",
    date: "2026-04-05",
    category: "Tools",
    thumbnail: "https://i.ibb.co.com/5.jpg",
    content: "Git is a version control system and GitHub is a platform to host repositories..."
  }
];


    return (
        <div>
            {blogs.map(blog=><div key={blog.id} >

               
                     <h1 className=" text-4xl font-bold">{blog.title}</h1>
                    
                   <Link className="btn" href={`/blogs/${blog.id}`}>Show detail</Link>
                
               

            </div>)}
        </div>
    );
};

export default blogPage;