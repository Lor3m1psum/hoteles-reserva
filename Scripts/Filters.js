moment.locale('es');
function Filters({ setStartDate, setEndDate, setCountry, setNewPrice, setRooms }) {

  return (
    <nav className="navbar is-container">
      <div className="container is-widescreen">
        <div className="notification">
          <div className="field">
            <input
              className="input"
              type="date"
              onChange={event => {
                let date = moment(event.target.value).format('dddd, MMMM D, YYYY');
                setStartDate(date);
              }}
            />
            <span className="icon is-small is-left">
              <i className="fas" />
            </span>
          </div>
          <div className="field">
            <input
              className="input"
              type="date"
              onChange={event => {
                let date = moment(event.target.value).format('dddd, MMMM D, YYYY');
                setEndDate(date);
              }}
            />
            <span className="icon is-small is-left">
              <i className="fas" />
            </span>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <div className="select">
                <select onChange={(event) => { setCountry(event.target.value) }}>
                  <option>Todos los países</option>
                  {countryData.map((country, i) => {
                    return (
                      <option value={country} key={i}>{country}</option>
                    )
                  })}
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className="fas" />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <div className="select">
                <select
                  onChange={(event) => { setNewPrice(event.target.value) }}>
                  <option>Todos los precios</option>
                  {priceData.map((price, i) => {
                    return (
                      <option
                        value={price}
                        key={i}>
                        {price.name}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className="fas" />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <div className="select">
                <select onChange={(event) => { setRooms(event.target.value) }}>
                  <option>Todos los tamaños</option>
                  {roomsData.map((rooms, i) => {
                    return (
                      <option value={rooms} key={i}>{rooms}</option>
                    )
                  })}
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className="fas" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}