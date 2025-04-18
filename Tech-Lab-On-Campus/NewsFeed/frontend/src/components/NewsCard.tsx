import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}


function NewsCard({ article }: NewsCardProps) {
    // PART 2: Create a reusable news card to use with general stories

    // Similar to Part 1, create a component that displays:
    // 1. The article's image
    // 2. The article's title,
    // 3. A truncated version of the article's body

    // This component should be reusable to populate all stories on the news page.

    // Once completing this part, you should be able to see a few test articles on
    // the right side of the screen.

    // Hint: Some classes in `globals.css` could help with styling

    let image = article.image_url
    let title = article.title
    let full_body = article.body

    return (
        <div className="news-card">
            <div className="news-img-div">
            <img src={image} alt={title} className="news-img"/>
            </div>
            <div className="news-info">
                {/* TODO: Remove the span below and implement a reusable NewsCard */}
                {/* <span className='instruction'>Part 2: Build Reusable News Card</span> */}
                <h2 className="featured-story-title">{title}</h2>
                <p className="featured-story-summary">{full_body}</p>

            </div>
        </div>
    );
}

export default NewsCard;
