import { useEffect, useState } from 'react'
import Card from './components/card';
import './styles/main.scss';

const API_URL = 'https://test.spaceflightnewsapi.net/api/v2/articles'

function App() {
  const [news, setNews] = useState([])

  const getDataFromAPI = async () => {
    try {
      const data = await fetch(API_URL)
      const response = await data.json()

      setNews(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataFromAPI()
  }, [])

  return (
    <div className="App">
      <div className='mainTitle'>
        Lista de noticias MitoCode
      </div>
      {news.map((data) => (
        <Card
          title={data.title}
          img={data.imageUrl}
          url={data.url}
          description={data.summary}
        />
      ))}
    </div>
  );
}

export default App;
