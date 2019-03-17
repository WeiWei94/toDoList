import React from 'react';
import Item from './Item';



const ItemList =({records, onRemoveClick, onEditClick})=>{
    
    const renderList = records.map((item)=>{
        return(<Item task={item.task} key={item.id} id={item.id} onRemoveClick={onRemoveClick} onEditClick={onEditClick}></Item>)
    })

    return(
        <div className="ui divided list">
            {renderList}
        </div>
    )
}

export default ItemList