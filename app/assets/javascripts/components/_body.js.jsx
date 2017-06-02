var Body = React.createClass({
  getInitialState() {
    return { days: 0 }
  },
  componentDidMount(){
    $.getJSON('/api/v1/days.json', (response) => { this.setState({ days: response }) });
  },
  handleUpdate(day){
    alert(day.id);
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
    // var days = this.state.days.filter((i) => { return i.id != day.id });2
    // days.push(day);
    this.setState({ days: day });
  },
  handleSubmit(day) {
    this.setState({ days: day })
  },
  render(){
    return (
      <div>
        <AllDays day={this.state.days}
                 onUpdate={this.handleUpdate}
                 handleSubmit={this.handleSubmit} />
      </div>
    )
  }
});
