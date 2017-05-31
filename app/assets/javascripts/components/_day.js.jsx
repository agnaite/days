var Day = React.createClass({
  addDay() {
    var id = this.props.day.id;
    var count = this.props.day.count + 1;
    var day = {id: id, count: count};
    console.log(id);
    console.log(count);
    this.props.handleUpdate(day);
  },
  render(){
    return (
      <div className='row'>
        <h1 className='days col-sm-offset-4 col-sm-4'>{this.props.day.count}</h1>
        <button className='btn btn-default col-sm-offset-5 col-sm-2' onClick={this.addDay}>another day!</button>
        <button className='btn btn-default col-sm-offset-5 col-sm-2'>zero out :(</button>
      </div>
    )
  }
});