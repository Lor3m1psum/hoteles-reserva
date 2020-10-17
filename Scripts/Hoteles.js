function Hoteles(props) {
  let newHoteles = props.hoteles
  
  
  if (props.country !== "0") {
    newHoteles = newHoteles.filter(
      hotel => hotel.country === props.country
    );
  }
  if (props.price !== "0") {
    newHoteles = newHoteles.filter(
      hotel => hotel.price == props.price
    );
  }
  if (props.rooms !== "0") {
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
    <div className="columns is-wrap is-grouped is-grouped-multiline">
      {newHoteles.map((hotel, i) => { 
        return (
        <Hotel key={i}
          photo={hotel.photo}
          slug={hotel.slug}
          name={hotel.name}
          description={hotel.description}
          city={hotel.city}
          country={hotel.country}
          rooms={hotel.rooms}
          price ={hotel.price}
        />
        );
      }
      )
      }
    </div>
  )
}
