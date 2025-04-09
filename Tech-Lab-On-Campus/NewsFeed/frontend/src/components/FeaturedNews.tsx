import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}


// export interface Article {
//     author: string;
//     title: string;
//     body: string;
//     image_url: string;
//     url: string;
//     publish_date: Date;
// }


function FeaturedNewsCard({ article }: NewsCardProps) {
    // PART 1: Display a Featured News article

    // Using the info about the article passed in as a prop, show:
    // 1. The featured article's title
    // 2. The featured article's image
    // 3. A portion of the selected article's body, truncated so that it fits nicely in the section

    // Once completing this part, you should be able to see the Featured News Article at the top of the page.

    // Hint: Some classes included in `globals.css` may help with styling.

    let title : string = article.title;
    let image : string = article.image_url
    let full_body: string = article.body
    // let truncatedBody = full_body.length > 200 ? `${full_body.slice(0, 200)}...` : full_body;


    return (
        <>
            {/* <span className='instruction'>Part 1: Show Featured News</span> */}
            <div className="featured-news-card">
                <div className = "featured-news-img-div ">
                    <img src={image} alt={title} className="featured-news-img" />
                </div>
                <div className="featured-news-info">
                    <h2 className="featured-story-title">{title}</h2>
                    <p className="featured-story-summary">{full_body}</p>
                    {/* <Link href={article.url} className="read-more-link">
                        Read More
                    </Link> */}
                </div>
                
            </div>
        </>
    );
}

export default FeaturedNewsCard;
