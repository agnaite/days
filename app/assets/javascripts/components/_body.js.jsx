var Body = React.createClass({
  getInitialState() {
    return { days: [] }
  },
  componentDidMount(){
    $.getJSON('/api/v1/days.json', (response) => { this.setState({ days: response }) });
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
  render(){
    return (
      <div>
        <AllDays days={this.state.days}
                 onUpdate={this.handleUpdate} />
      </div>
    )
  }
});
