{
  HotelData.map((item) => (
    <Row>
      <Col lg="3" className="mb-4" key={item.id}>
        <Card>
          <div className="tour__img">
            <img
              style={{ width: "306px", height: "168px" }}
              //   src={`http://localhost:4000/view/${photo}`}
              src={item.photo}
              alt="tour-image"
            ></img>
          </div>
        </Card>

        <CardBody className="card__body">
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <FiMapPin />
              {item.add}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <AiOutlineStar />
              {<span>({item.rating})</span>}
            </span>
          </div>
          <h5 className="tour__title">{item.name}</h5>
          <div
            className="card__bottom d-flex align-items-between mt-3"
            style={{ width: "300px" }}
          >
            <h5 style={{ width: "190px", paddingTop: "6px" }}>
              Rs{item.price}
            </h5>
            {/* <button className="btn booking__btn" style={{ marginLeft: "0" }}>
                       <Link to={`/tours/${_id}`}>Book Now</Link>
                   </button> */}
          </div>
        </CardBody>
      </Col>
    </Row>
  ));
}
