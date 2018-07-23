import React, { Component } from 'react';
import {GA} from "../../../actions/ga";

export default class Header extends Component {

  render() {
    return ( 
      <div className="row" id="Sponsor">
        <div className="col-xs-12 col-sm-6 text-left">
            <a 
              href="https://www.theguardian.com/au"
              rel="noopener noreferrer"
              target="_blank"
              onClick={ () =>{GA('Link Clicked', 'Header Link Clicked', 'Glabs Promotion Zone')}}
            >
                {this.props.UI.Data.ProjectSubHeader}
            </a>
        </div>
        <div className="col-xs-12 col-sm-6 text-right">
            
            <a 
              href={this.props.UI.Data.ProjectURL} 
              target="_blank"  
              rel="noopener noreferrer"
              data-category="Link Clicked"
              onClick={ () => {GA('Link Clicked', 'Header Link Clicked', 'Client Logo')}}
            >
                <img src={this.props.UI.ImagePath+this.props.UI.Data.ProjectLogo} alt="Client Logo" />
            </a>
            <span>Paid for by</span>
        </div>
      </div>
    );
  } 
} 