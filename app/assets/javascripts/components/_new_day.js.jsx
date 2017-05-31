var NewDay = React.createClass({
  handleClick() {
    console.log('Btn clicked');
    $.ajax({
      url: '/api/v1/days/${item.id}',
      type: 'PUT',
      data: { day: { count: 1 } },
      success: (response) => { console.log('it worked!', response); }
    });
  },

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
