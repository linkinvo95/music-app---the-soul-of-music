import type { NextPage } from 'next'
import Main from './../components/home/Main';


const Home: NextPage = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <Main />
      </div>
    </div>
  )
}

export default Home
