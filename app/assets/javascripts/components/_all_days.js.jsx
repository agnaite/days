var AllDays = React.createClass({
  getInitialState() {
    return { days: [] }
  },
  componentDidMount(){
    $.getJSON('/api/v1/days.json', (response) => { this.setState({ days: response }) });
  },
  render() {
    var days = this.state.days.map((day) => {
      return (
        <div key={day.id}>
          <h4>{ day.count }</h4>
        </div>
      )
    });

    return (
      <div>
        { days }
      </div>
    )
  }
});
