import React from 'react';


class Item extends React.Component{


    render(){
        const {id, task, onRemoveClick} = this.props
        return(
            <div className="item">
                <div className="right floated content ">
                    <button className="ui button negative" onClick={()=>onRemoveClick(id)} >Remove</button>
                </div>
                <div className="content">
                    {task}
                </div>
            </div>
        )
    }
}


export default Item