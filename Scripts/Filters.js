moment.locale('es');
function Filters(props) {
  console.log(props)

  return (
    <nav className="navbar is-wrap is-container">
      <div className="container is-widescreen">
        <div className="notification">
          <div className="control has-icons-left">
            <input 
              className="input"
              type="date"
              onChange={props.setStartDate}
              value={props.startDate}
            />
            <div className="icon is-small is-left">
              <i className="fas fa-calendar" />
            </div>
          </div>
          <div className="control has-icons-left">
            <input
              className="input"
              type="date"
              onChange={props.setEndDate}
              value={props.EndDate}
            />
            <div className="icon is-small is-left">
              <i className="fas fa-calendar" />
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <div className="select">
                <select onChange={props.setCountry}>
                  <option value= "todos los paises" >Todos los países</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Brasil">Brasil</option>
                  <option value="Chile">Chile</option>
                  <option value="Uruguay" >Uruguay</option>
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className="fas fa-globe-americas" />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <div className="select">
                <select
                  onChange={props.setNewPrice}>
                  <option value ="todos los precios">Todos los precios</option>
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className="far fa-money-bill-alt"/>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <div className="select">
                <select onChange={props.setRooms}>
                  <option value ="todos los tamaños">Sin límite de habitaciones</option>
                  <option value="Pequeño"> De 1 a 15 habitaciones</option>
                  <option value="Mediano"> De 16 a 30 habitaciones</option>
                  <option value="Grande"> Más de 30 habitaciones</option>
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className="fas fa-bed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}