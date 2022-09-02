import React, { Component } from 'react';
import Card from './Card';
import styles from "../components/cards.module.css"
import iphone10 from "../components/img/145701-phones-feature-why-was-there-no-iphone-9-plus-what-happened-to-the-iphone-10-image1-zdyrquavzm.jpg";
import iphone12 from "../components/img/Apple_announce-iphone12pro_10132020.jpg.og.jpg"
import iphone13 from "../components/img/220308141105-apple-iphone-13-in-green.jpg"
import iphone13promax from "../components/img/5bgwxmgnlvc.jpg"
class Cards extends Component {
    constructor(){
        super()
        this.state = {
            phoneData: [
                {id : 1 , image : iphone10 , name : "iphone10" , cost : "500 "},
                {id : 1 , image : iphone12 , name : "iphone12" , cost : "700 "},
                {id : 1 , image : iphone13 , name : "iphone13" , cost : "900 "},
                {id : 1 , image : iphone13promax , name : "iphone10 pro max" , cost : "1000 "},
                {id : 1 , image : iphone10 , name : "iphone10" , cost : "500 "},
                {id : 1 , image : iphone12 , name : "iphone12" , cost : "700 "},
                {id : 1 , image : iphone13 , name : "iphone13" , cost : "900 "},
                {id : 1 , image : iphone13promax , name : "iphone13 pro max" , cost : "1000 "}
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.phoneData.map(phone => (<Card key = {phone.id}  image = {phone.image} name = {phone.name} cost = {phone.cost} />))}
            </div>
            )
    }
}
export default Cards;