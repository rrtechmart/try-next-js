import Link from "next/link";

export const metadata = {
    title: "Blogs | Next Application",
    description: "Next Application",
}

const blogs = [
    {
        id: 1,
        year: 2015,
        title: "title 1"
    },
    {
        id: 2,
        year: 2016,
        title: "title 2"
    },
    {
        id: 3,
        year: 2017,
        title: "title 3"
    },
    {
        id: 4,
        year: 2023,
        title: "title 4"
    },
]

const BlogsPage = () => {
    return (
        <div className="container mx-auto my-6">
            {
                blogs.map(({ id, year, title }) =>
                    <Link className="block border border-blue-500 my-2 p-2"
                        href={{
                            pathname:`/blog/${year}/${id}`,
                            query:{
                                title: title,
                            },
                        }} 
                        key={id}>
                        {title}
                    </Link>)
            }

        </div>
    );
};

export default BlogsPage;