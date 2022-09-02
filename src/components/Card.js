import React, { Component } from 'react'
import styles from "../components/card.module.css"
import down from "./img/down.svg"
import up from "./img/up.svg"
class Card extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }
    downkHandeler = () => {
        if (this.state.counter >= 1) {
            this.setState(prevState => ({
                counter: prevState.counter - 1,
            }))
        }
    }
    upkHandeler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
    }

    render() {
        let { image, name, cost } = this.props;
        const { counter } = this.state;
        if(counter >= 1) {
            cost = parseFloat(cost)*counter;
        }
        return (
            <div className={styles.container}>
                <img src={image} alt='iphone' />
                <div className={styles.item}>
                    <p>{name}</p>
                    <div className={styles.counter}>
                        <img src={down} className={this.state.counter ? styles.deactive:""} onClick={this.downkHandeler} alt='down' />
                        <span>{counter}</span>
                        <img src={up} onClick={this.upkHandeler} alt='up' />
                    </div>
                    <br/>
                    <h4><span>{cost} $</span></h4>
                </div>
            </div>
        )
    }
}
export default Card;
