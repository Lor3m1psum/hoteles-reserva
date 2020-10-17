moment.locale ('es');
class App extends React.Component {
  state = {
      startDate: moment().format('dddd, MMMM D, YYYY'),
      endDate: moment().add (1, 'days').format('dddd, MMMM D, YYYY'),
      country: '0',
      price: "0",
      rooms: '0',
    hotelesData: hotelsData
  };

  setStartDate(newDate) {
    this.setState ({
      ...this.state,
        startDate: newDate
      },
    );
  }

  setEndDate(newDate) {
    this.setState ({
      ...this.state,
        endDate: newDate
      },
    );
  }

  setCountry = e => {
    let newCountry = e.target.value
    this.setState({
      country:newCountry
      }
    )
  }

  setNewPrice = e => {
    let newPrice = e.target.value
    this.setState({
        price: newPrice
      }
    )
  }

  setRooms = e => {
    let newRooms = e.target.value
    this.setState({
        rooms: newRooms
      }
    )
  }

  render () {
    return (
      <div>

        <Header 
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        country={this.state.country}
        price={this.state.price}
        rooms={this.state.rooms}
        />
        <Filters
          setStartDate={this.setStartDate}
          setEndDate={this.setEndDate}
          setCountry={this.setCountry}
          setNewPrice={this.setNewPrice}
          setRooms={this.setRooms}
        />
        <Hoteles 
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        country={this.state.country}
        price={this.state.price}
        rooms={this.state.rooms}
        hoteles={this.state.hotelesData} />
      </div>
    );
  }
}

ReactDOM.render (<App />, document.getElementById ('app'));
