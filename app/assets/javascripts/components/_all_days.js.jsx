var AllDays = React.createClass({
  render() {
    var days = this.props.days.map((day) => {
      return (
        <div key={day.id}>
          <Day day={day}
               addDay={this.props.addDay}
          />
        </div>
      )
    });

    return (
      <div>
        {days}
      </div>
    )
  }
});
