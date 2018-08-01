import React, { Component } from 'react';
import {GA} from "../../actions/ga";

export default class Header extends Component {
  render() {
    return ( 
            <div id="BottomCTA" >
                <div className="container">
                    <div className="row" >
                        <div className="col-lg-8 offset-lg-2">
                            <h3> See for yourself how 
                                    <a 
                                        rel="noopener noreferrer"  
                                        href="https://www.mini.com.au/connected/" 
                                        target="_blank" 
                                        onClick={()=>{GA('Link Clicked','Bottom CTA','https://www.mini.com.au/connected/')} }
                                    > MINI Connected </a> 
                                    can help make your life better, easier with next-level connectivity.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
} 