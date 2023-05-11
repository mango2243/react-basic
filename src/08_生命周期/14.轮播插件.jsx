import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
Swiper.use([Navigation, Pagination])
export default class app extends Component {
    state = {
        list: ["111", "222", "333"]
    }
    render() {
        return (
            <div>
                <div className="swiper" style={{ height: "200px", background: "yellow" }}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map(item =>
                                <div className="swiper-slide" key={item}>{item}</div>
                            )
                        }
                    </div>
                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                </div>

            </div>
        )
    }
    componentDidMount() {
        new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        })
    }
}
