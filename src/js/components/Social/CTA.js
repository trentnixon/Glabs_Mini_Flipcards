import React, { Component } from 'react';
import {GA} from "../../../actions/ga";
export default class Header extends Component {

  render() {
      console.log(this.props.UI.Data.ProjectURL)
    return ( 
            <a 
                href={this.props.UI.Data.ProjectURL} 
                className="ReadMore"
                target="_blank"
                rel="noopener noreferrer"
                onClick={()=>{GA('Link Clicked','CTA Bar',this.props.UI.Data.ProjectURL)} }
            >
           
             Read more in our content series:<br />
             <strong>{this.props.UI.Data.ProjectSubHeader}</strong> <span className="chevron right"></span>
            </a>
        );
    } 
} 