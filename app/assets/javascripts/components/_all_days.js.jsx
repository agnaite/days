var AllDays = React.createClass({
  onUpdate(day) {
    this.props.onUpdate(day);
  },
  render() {
    var days = this.props.days.map((day) => {
      return (
        <div className='container' key={day.id}>
          <Day day={day}
               handleUpdate={this.onUpdate} />
        </div>
      )
    });

    return (
      <div className="day-wrapper">
        {days}
      </div>
    )
  }
});
