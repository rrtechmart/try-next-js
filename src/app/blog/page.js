import Link from "next/link";

export const metadata = {
    title: "Blogs | Next Application",
    description: "Next Application",
}

// const blogs = [
//     {
//         id: 1,
//         year: 2015,
//         title: "title 1"
//     },
//     {
//         id: 2,
//         year: 2016,
//         title: "title 2"
//     },
//     {
//         id: 3,
//         year: 2017,
//         title: "title 3"
//     },
//     {
//         id: 4,
//         year: 2023,
//         title: "title 4"
//     },
// ]

const BlogsPage = async () => {
    const res =await fetch('https://jsonplaceholder.typicode.com/posts')
    const blogs = await res.json();
    return (
        <div className="container mx-auto my-6">
            {
                blogs.map(({ id, body, title }) => 
                <div key={id} className="border border-blue-500 my-2 mx-2 px-2 py-1">
                    <h1> {id}. {title} </h1>
                    <p> {body} </p>
                    <Link href={`/blog/${id}`}>
                    <button className="btn bg-blue-700 px-2 py-1 text-white rounded-md">Details</button>
                    </Link>

                </div>)
            }

        </div>
    );
};

export default BlogsPage;