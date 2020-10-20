moment.locale('es');
const formatDate = (date) =>
  `${moment(date).format("dddd")}, ${moment(date).format("D")}, de ${moment(date).format("MMMM")}, de ${moment(date).format("YYYY")}`;

function Header({ startDate, endDate, country, price, rooms }) {
  return (
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            <b> HOTELES </b> RESERVA
          </h1>
          <h3 className="subtitle">
            <span>
              desde el <b> {formatDate(startDate)} </b> hasta el <b>{formatDate(endDate)}</b>
            en alguna ciudad de <b> {country} </b>
            por un costo de <b> {price ? ` ${'$'.repeat(price)}` : " "} </b>
            y de tamaño <b>{rooms}</b>
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
