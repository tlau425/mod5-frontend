import React from 'react'

class WarrantyForm extends React.Component{
  state = {
    name: "",
    notes: "",
    category: "",
    buy_date: "",
    wrnty_days: "",
    photo_id: 1,
    user_id: 1
  }

  handleChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    this.setState( prevState =>{
      return {
        [field]: value
      }
    })
  }

  render(){
    return(
      <form className="ui form"
      onSubmit={( e=> {
        e.preventDefault()
        this.props.handleSubmit(this.state)
      })}
    >
    <h1>Create New Warranty </h1>

    <div className="field">
      <label>Product Name: </label>
      <input placeholder="Name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
      <label>Category: </label>
      <input placeholder="Category" name="category" type="text" value={this.state.category} onChange={this.handleChange}/>
    </div>

    <div className="field">
    <label>Purchased Date: </label>
    <input placeholder="DOP" name="buy_date" type="date" value={this.state.purchaseDate} onChange={this.handleChange}/>
    <label>Warranted Days: </label>
    <input placeholder="Days of Warranty" name="wrnty_days" type="number" value={this.state.wrntyDays} onChange={this.handleChange}/>
    </div>

    <div className="field">
      <label>Notes: </label>
      <input placeholder="Description" name="notes" type="text" value={this.state.notes} onChange={this.handleChange}/>
    </div>

    <button className="ui positive basic button"> Submit Warranty</button>
  </form>
  )
  }
}

export default WarrantyForm
