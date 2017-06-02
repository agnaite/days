var AllDays = React.createClass({
  zeroOut(){
    $.ajax({ url: '/api/v1/days',
             type: 'POST',
             data: { day: { count: 0 } },
             success: (day) => { this.props.handleSubmit(day); } });
  },
  render() {
    return (
      <div className="day-wrapper">
        <div className='container' key={this.props.day.id}>
          <Day day={this.props.day}
               handleUpdate={this.props.onUpdate}
               zeroOut={this.zeroOut} />
        </div>
      </div>
    )
  }
});
