import React, { Component } from 'react'
import Banner from './Banner';
import Logo from "./Logo";
import Cards from './Cards';
import Search from './Search';
class Landing extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Cards />
                <Search />
                <Logo />
            </div>
        )
    }
}

export default Landing;