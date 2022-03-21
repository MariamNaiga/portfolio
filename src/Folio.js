import React from 'react';
//import BackToTop from './components/BackToTop';
//import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Works from './components/Works';
import Title from './components/Title';
//import MoreWorks from './components/MoreWorks';
import About from './components/About';

const Folio = () => {
    return (
        <div>
            <Header />
            
            {/*<BackToTop />*/}
            <div style={{marginBottom: "50px"}}>
                <Title name="Featured Works"/>
                <Works />
            </div>
            {/*<div style={{marginBottom: "100px"}}>
                <Title name="More Works"/>
                <MoreWorks />
            </div>*/}
            <div style={{marginBottom: "20px"}}>
                <Title name="About"/>
                <About />
            </div>
            {/*<Contact />*/}
            <Footer />
            
        </div>
    )
}

export default Folio;

