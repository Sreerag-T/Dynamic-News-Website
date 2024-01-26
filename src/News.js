import React from "react";

function News(props) {
  return (
    <div className="news">
      <div className="news-image">
        <img src={props.article.urlToImage} />
      </div>
      <div className="text">
        <h1>{props.article.title?.substring(0, 70).concat("..")}</h1>
        <p>
          {props.article.content?.substring(0, 100).concat("...")}
          <a href={props.article.url} target="_blank">
            Read more
          </a>
        </p>
      </div>
      <div className="source">
        <p>Author :{props.article.author?.substring(0, 19).concat("..")}</p>
        <p>{props.article.source.name}</p>
              
      </div>
    </div>
  );
}

export default News;
