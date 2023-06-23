import React from 'react'
import Hero from '../components/landing/Hero'
import '../css/landing.css'
import Brands from '../components/landing/Brands'
import NAvbar from '../components/common/Navbar'
import Category from '../components/landing/Category'
import Content1 from '../components/landing/Content1'
import Content2 from '../components/landing/Content2'
import Footer from '../components/common/Footer'

function Landing() {
    return (
        <>
            <NAvbar />
            <Hero />
            <Brands />
            <Content1/>
            <Category/>
            <Content2/>
            <Footer/>
        </>
    )
}

export default Landing