moment.locale ('es');
class App extends React.Component {

  constructor(props) {
    super(props);

    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.setCountry = this.setCountry.bind(this);
    this.setNewPrice = this.setNewPrice.bind(this);
    this.setRooms = this.setRooms.bind(this);
  }

  state = {
    filter: {
      startDate: moment().format('dddd, MMMM D, YYYY'),
      endDate: moment().add (1, 'days').format('dddd, MMMM D, YYYY'),
      country: '',
      newPrice: '',
      rooms: ''
    },
    hotelesData: hotelsData,
  };

  setStartDate(newDate) {
    this.setState ({
      ...this.state,
      filter: {
        ...this.state.filter,
        startDate: newDate,
        
      },
    });
  }

  setEndDate(newDate) {
    this.setState ({
      ...this.state,
      filter: {
        ...this.state.filter,
        endDate: newDate,
      },
    });
  }

  setCountry(country){
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        country
      }
    })
  }

  setNewPrice(newPrice){
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        newPrice
      }
    })
  }

  setRooms(rooms){
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        rooms
      }
    })
  }

  render () {
    return (
      <div>

        <Header 
        startDate={this.state.filter.startDate}
        endDate={this.state.filter.endDate}
        country={this.state.filter.country}
        newPrice={this.state.filter.newPrice}
        rooms={this.state.filter.rooms}
        />
        <Filters
          setStartDate={this.setStartDate}
          setEndDate={this.setEndDate}
          setCountry={this.setCountry}
          setNewPrice={this.setNewPrice}
          setRooms={this.setRooms}
        />
        <Hoteles hoteles={this.state.hotelesData} />
      </div>
    );
  }
}

ReactDOM.render (<App />, document.getElementById ('app'));
