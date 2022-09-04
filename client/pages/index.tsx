import type { NextPage } from 'next'
import Header from '../components/header/Header';
import Sidebar from '../components/header/Sidebar';
import Layout from '../components/layout/Layout';
import Main from './../components/home/Main';


const Home: NextPage = () => {
  return (
    <div>
    <Layout title='music-platform'>
<Header/>
<div className="flex flex-wrap">

<Sidebar/>
        <Main />
</div>
        </Layout>

    </div>
  )
}

export default Home
