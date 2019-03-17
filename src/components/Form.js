import React from 'react';
import ItemList from './ItemList';


class Form extends React.Component {

    state={current:'',record:[]}


    onRemoveClick = (id)=>{
        this.setState({record:this.state.record.filter(item => item.id !== id)})
        console.log('App was called')
        console.log(id)
    }
    
    componentDidUpdate(){
    }

    onFormSubmit=(event) =>{
        event.preventDefault()
        if(this.state.current){
            this.setState({record:[...this.state.record, {id:[Date.now()], task :this.state.current}], current:''})
        }
        console.log(this.state)
        
    }

    onFormInput = (event) => {
        this.setState({current:event.target.value})
    }

    render(){
        return(
            <div className="ui container">
                <div className="ui form">
                    <form onSubmit={this.onFormSubmit}>
                        <label>To Do</label>
                        <input placeholder="Tasks" onChange={this.onFormInput} value={this.state.current}></input>
                    </form>
                </div>
                <ItemList records={this.state.record} onRemoveClick={this.onRemoveClick} onEditClick={this.onEditClick}></ItemList>
            </div>
        )
    }

}



export default Form