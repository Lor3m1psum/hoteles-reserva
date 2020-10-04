function Header({ startDate, endDate, country, newPrice, rooms }) {

  return (
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            <b>HOTELES</b> RESERVA
          </h1>
          <h3 className="subtitle">
            <span>desde el <b>{startDate}</b> hasta el <b>{endDate}</b> en alguna ciudad de <b>{country}</b> por un valor de <b>{newPrice}</b> y de tamaño <b>{rooms}</b> </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
