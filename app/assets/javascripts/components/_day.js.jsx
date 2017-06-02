var Day = React.createClass({
  componentDidMount() {
    var id = this.props.day.id;
    var createdDay = new Date(this.props.day.created_at);
    var currentDay = new Date();

    var seconds = (currentDay - createdDay)/1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = Math.floor(hours / 24)

    var day = {id: id, count: days};
    this.props.handleUpdate(day);
  },
  zeroOut() {
    $.ajax({ url: '/api/v1/days',
             type: 'POST',
             data: { day: { count: 0 } },
             success: (day) => { this.props.handleSubmit(day); } });
  },
  render(){
    return (
      <div className='row'>
        <h1 className='days col-sm-offset-4 col-sm-4'>{this.props.day.count}</h1>
        <button className='btn btn-default col-sm-offset-5 col-sm-2' onClick={this.zeroOut}>zero out</button>
      </div>
    )
  }
});
