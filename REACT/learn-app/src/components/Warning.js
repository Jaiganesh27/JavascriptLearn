import React from 'react';

function WarningBanner(props){
     if(!props.warn)
     return null

     return(
          <div>
              Warning!
          </div>
     );
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {Warning : true}
        this.handleToggleOnClick = this.handleToggleOnClick.bind(this);
    }

handleToggleOnClick(){
this.setState(state => ({
Warning : !state.Warning
}));
}

render()
{
    return(
        <div>
            <WarningBanner warn ={this.state.Warning}/>
            <button onClick = {this.handleToggleOnClick}>
                {this.state.Warning?'Hide':'Show'}
            </button>
        </div>
    )

}
}

export default Page;

