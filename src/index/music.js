import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';
import { IP,AjaxIp } from '../configIp.js';

class Music extends Component {
    state = {
        data: ['1', '2', '3','4'],
        imgHeight: 176,
        musicList:[]
      }
      componentWillMount(){
      //   axios.get(AjaxIp+'/getUser').then(msg=>{
          
      // })
        axios.post(AjaxIp+'/getMusicList').then(msg=>{
            this.setState({
                musicList:msg.data
            })
        })
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['hsy', 'jlp', 'mby','wyf'],
          });
        }, 100);
      }
      render() {
        return (
        <div>
              <WingBlank>
            <Carousel className="space-carousel"
              frameOverflow="visible"
              cellSpacing={10}
              slideWidth={0.8}
              autoplay
              infinite
            //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => this.setState({ slideIndex: index })}
            >
              {this.state.data.map((val, index) => (
                <span
                  key={val}
                  style={{
                    display: 'block',
                    position: 'relative',
                    top: this.state.slideIndex === index ? -10 : 0,
                    height: this.state.imgHeight,
                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <img
                    src={`${IP}/img/${val}.jpg`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </span>
              ))}
            </Carousel>
          </WingBlank>
          <nav id='musicMenu'>
              <img src={IP+'/img/3_03.png'} alt=''/>
              <img src={IP+'/img/3_05.png'} alt=''/>
              <img src={IP+'/img/3_07.png'} alt=''/>
              <img src={IP+'/img/3_09.png'} alt=''/>
          </nav>
          <div id='recommend'>
              <h4>
                  推荐歌单
              </h4>
              <ul id='musics_list'>
                  {this.state.musicList.map(item=>(
                      <li key={item._id} onClick={this.click.bind(this,item._id)}>
                          <img src={`${AjaxIp}/images/${item.img}`} alt=''/>
                          <p>{item.title}</p>
                      </li>
                  ))}
              </ul>
          </div>
          <div id='recommend'>
              <h4>
                  最新音乐
              </h4>
              <ul id='musics_list'>
                  {this.state.musicList.map(item=>(
                      <li key={item._id} onClick={this.click.bind(this,item._id)}>
                          <img src={`${AjaxIp}/images/${item.img}`} alt=''/>
                          <p>{item.title}</p>
                      </li>
                  ))}
              </ul>
          </div>
        </div>
        );
      }
      click(id){
        this.props.history.push("/found/musicList?"+id)
      }
}

export default Music;