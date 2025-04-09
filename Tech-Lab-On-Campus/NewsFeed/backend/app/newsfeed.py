"""Module for retrieving newsfeed information."""

from dataclasses import dataclass
from datetime import datetime


@dataclass
class Article:
    """Dataclass for an article."""

    author: str
    title: str
    body: str
    publish_date: datetime
    image_url: str
    url: str

def format_article(js) -> Article:
    art_dict = json.loads(js)
    image_url = art_dict["main_image"]
    author = art_dict['author']
    title = art_dict["title"]
    body = art_dict["text"]
    publish_date = art_dict["published"]
    url = art_dict["url"]


    return Article(author, title, body, publish_date, image_url, url)

def get_all_news() -> list[Article]:
    """Get all news articles from the datastore."""
    # 1. Use Redis client to fetch all articles
    arts = REDIS_CLIENT.get_entry("all_articles")
    # 2. Format the data into articles
    acc = []
    for js in arts:
        acc.append(format_article(js))
    # 3. Return a list of the articles formatted 
    return acc


def get_featured_news() -> Article | None:
    """Get the featured news article from the datastore."""
    # 1. Get all the articles
    # 2. Return as a list of articles sorted by most recent date
    return None
