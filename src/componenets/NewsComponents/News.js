import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import './NewsStyle.css'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  }

  useEffect(() => {
    updateNews();
  }, [])

  const fetchMoreData = async () => {
    //this.setState({page: page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    // this.setState({
    //     articles: this.state.articles.concat(parsedData.articles),
    //     totalResults: parsedData.totalResults,
    //     loading: false
    // })
  };

  return (
    <>
      <div className='news'>
        <div className='headline'>
          <h1 className='text-center'>&nbsp;TOP HEADLINES&nbsp;</h1>
        </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          // loader={<Spinner />}
        >
          <div className="container">
            <div className='row'>
              {articles.map((element, index) => {
                return <div className='col-md-4' key={index}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0,88) : ""} author={element.author ? element.author : "Unknown"} date={element.publishedAt} imageUrl={element.urlToImage ? element.urlToImage : "https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg?w=996&t=st=1686918135~exp=1686918735~hmac=0e0d0f8e1d8fc05f929ea8ba8fb3bf4449d00430dfb5886ccb351b4b73d144f4"} newsUrl={element.url} source={element.source.name}/>
                </div>
              })}
            </div>
          </div>  
        </InfiniteScroll>
      </div>
    </>
  )
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  // category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News