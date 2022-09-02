import React, {FC, PropsWithChildren} from 'react';
// import Head from 'next/head';
import Header from '../header/Header';
const Layout: FC<PropsWithChildren<{ title: string}>> = ({ children, title }) => {
    return (
        <>
            <div>
                <title>{title}</title>
                <main>
                    <section>
                        <Header/>
                        {children}
                    </section>
                </main>
            </div>
        </>
    );
};

export default Layout;