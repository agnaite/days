var Body = React.createClass({
  getInitialState() {
    return { days: [] }
  },
  componentDidMount(){
    $.getJSON('/api/v1/days.json', (response) => { this.setState({ days: response }) });
  },
  addDay(){
    console.log('hi');
  },
  render(){
    return (
      <div>
        <AllDays days={this.state.days}
                 addDay={this.addDay}
        />
      </div>
    )
  }
});
