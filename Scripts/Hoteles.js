function Hoteles(props) {

  return (
    <div className="columns is-wrap is-grouped is-grouped-multiline">
      {props.hoteles.map((hotel, i) => { 
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
