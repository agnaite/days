var AllDays = React.createClass({
  onUpdate(day) {
    this.props.onUpdate(day);
  },
  zeroOut(){
    $.ajax({ url: '/api/v1/days',
             type: 'POST',
             data: { day: { count: 0 } },
             success: (day) => { this.props.handleSubmit(day); } });
  },
  render() {
    if (this.props.day == null) { var day = {id: 0, count: 0 }
    } else { var day = this.props.day }

    return (
      <div className="day-wrapper">
        <div className='container' key={day.id}>
          <Day day={day}
               handleUpdate={this.onUpdate}
               zeroOut={this.zeroOut} />
        </div>
      </div>
    )
  }
});
