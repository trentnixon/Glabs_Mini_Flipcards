import React from 'react';

let Paragrph=null;
export default class Card extends React.Component {

  componentWillMount(){ }

  render() {

    Paragrph=null;

    if(typeof(this.props.p) === 'object'){
     Paragrph = this.props.p.map((para,i)=>{
        
             return(
                     <p key={i} dangerouslySetInnerHTML={ { __html: para} }></p>
                 )
         })
    }else{ Paragrph = this.props.p; }
   
    return(
        <div>
            {Paragrph}
        </div>
    )
  }
}
