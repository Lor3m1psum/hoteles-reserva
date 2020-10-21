function Hoteles(props) {
  let newHoteles = props.hoteles;

  if (props.endDate) {newHoteles = newHoteles.filter((hotel) => moment(hotel.availabilityTo).isSameOrAfter(props.endDate), 'day'); }
      newHoteles = newHoteles.filter((hotel) => moment(hotel.availabilityFrom).isSameOrBefore(props.startDate, 'day'))

  if (props.country !== "todos los paises") {
    newHoteles = newHoteles.filter(
      hotel => hotel.country === props.country
    );
  }
  if (props.price !== "todos los precios") {
    newHoteles = newHoteles.filter(
      hotel => hotel.price == props.price
    );
  }
  if (props.rooms !== "todos los tamaños") {
    if (props.rooms === "Pequeño") {
      newHoteles = newHoteles.filter(hotel => hotel.rooms <= 15);
    } else if (props.rooms === "Mediano") {
      newHoteles = newHoteles.filter(
        hotel => hotel.rooms >= 16 && hotel.rooms <= 30
      );
    } else if (props.rooms === "Grande") {
      newHoteles = newHoteles.filter(hotel => hotel.rooms > 30);
    }
  }

  return (
      <div className="container">
      <div className="columns is-wrap is-multiline is-grouped-multiline">
      {newHoteles.length ? (newHoteles.map((hotel, i) => (
            <Hotel key={i}
            photo={hotel.photo}
            slug={hotel.slug}
            name={hotel.name}
            description={hotel.description}
            city={hotel.city}
            country={hotel.country}
            rooms={hotel.rooms}
            price={hotel.price}
          />
        ))
      ) : (
      <article class="message is-warning is-light ">
        <div class="message-body">
          No se encuentran <strong>Hoteles disponibles</strong> con estos parámetros de búsqueda
        </div>
      </article>
      )
      }
    </div>
    </div>
  );
}