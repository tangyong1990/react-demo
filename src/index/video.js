import React,{Component} from 'react';
import { AjaxIp } from '../configIp.js';

class Video extends Component{
    render(){
        return(
            <div>
                <ul id='video'>
                    <li>
                        <video src={AjaxIp+'/video/巨齿鲨.mp4'} controls/>
                        <span>巨齿鲨预告片</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Video;