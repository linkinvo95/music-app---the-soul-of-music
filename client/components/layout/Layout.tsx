import React, {FC, PropsWithChildren} from 'react';
// import Head from 'next/head';
import Header from '../header/Header';
import Main from '../home/Main';
const Layout: FC<PropsWithChildren<{ title: string}>> = ({ children, title }) => {
    return (
        <>
            <div>
                <title>{title}</title>
                
                        <Header/>
                    <section className='className=" ml-[350px] mt-[170px] w-[1320px] h-[2810px]"'>
                        {children}

                    </section>

            
            </div>
        </>
    );
};

export default Layout;