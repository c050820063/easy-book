import * as React from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css'

interface State {
  mySwiper: object | any
}
class Swipers extends React.Component<any, State> {

  constructor(props: any) {
    super(props)
    this.state = {
      mySwiper: null
    }
  }

  public render() {
    return (
      <div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={require('./bg.jpg')} alt=""/>
            </div>
            <div className="swiper-slide">
              <img src={require('./bg.jpg')} alt=""/>
            </div>
            <div className="swiper-slide">Slide 3</div>
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-prev" onClick={this.handlePrev} />
          <div className="swiper-button-next" />
          <div className="swiper-scrollbar" />
        </div>
      </div>
    )
  }

  public componentDidMount() {
    this.setState({
      mySwiper: new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
  
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
  
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
    })
    console.log(this.state.mySwiper)
  }

  private handlePrev = () => {
    this.state.mySwiper.slidePrev();
    console.log(13)
  }
}

export default Swipers