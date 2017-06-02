var Body = React.createClass({
  getInitialState() {
    return { days: [] }
  },
  componentDidMount(){
    $.getJSON('/api/v1/days.json', (response) => {
      this.setState({ days: response })
    });
  },
  handleUpdate(day){
    $.ajax({
           url: `/api/v1/days/${day.id}`,
           type: 'PUT',
           data: { day: day },
           success: () => {
              this.updateDays(day)
           }
       })
  },
  updateDays(day) {
    var days = this.state.days.filter((i) => { return i.id != day.id });
    days.push(day);
    this.setState({ days: days });
  },
  handleSubmit(day) {
    var newState = this.state.days.concat(day);
    this.setState({ days: newState })
  },
  render(){
    return (
      <div>
        <AllDays day={this.state.days[0]}
                 days={this.state.days}
                 onUpdate={this.handleUpdate}
                 handleSubmit={this.handleSubmit} />
      </div>
    )
  }
});
