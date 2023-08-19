import loadBlogsData from '@/utils/loadBlogsData';
import loadSingleBlogData from '@/utils/loadSingleBlogData';

// dynamically generate metadata for title
export const generateMetadata = async ({params}) =>{
    const {title} = await loadSingleBlogData(params.id)
    return {title: title}
}

export const generateStaticParams = async () => {
    const blogs = await loadBlogsData();
    return blogs.map((id) =>id.toString)
}

const SingleBlog = async ({params}) => {
    const {id, title, body} = await loadSingleBlogData(params.id)
    
    return (
        <div className="border border-blue-500 my-2 mx-2 px-2 py-1">
            <h1> {id}. {title} </h1>
            <p> {body} </p>
        </div>
    );
};

export default SingleBlog;