import { useEffect, useState } from 'react';

function NotificationBar() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8cc4e45e8b4a4f75a6c0012522a3463e`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setNews(data.articles.slice(0, 100));
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);
  

  return (
    <div className="news">
      {news.map(item => (
        <div key={item.title} style={{ display: 'flex', alignItems: 'center', backgroundColor:'#ff4343', color:'#ffffff',height:'32px'}}>
          <span>{new Date(item.publishedAt).toDateString()}&nbsp;</span> 
          <span style={{ marginRight: '10px' }}>{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default NotificationBar;
