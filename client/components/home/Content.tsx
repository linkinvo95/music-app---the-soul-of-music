import { FC } from 'react';
import Header from '../header/Header';
import Search from '../header/Search';
import Layout from '../layout/Layout';

const Content:FC = () => {
    return (
        <Layout title='music-platform'>
            <Header/>
            {/* <Search/> */}
        </Layout>
    );
};

export default Content;