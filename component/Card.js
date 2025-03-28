export let Card = ({ products }) => {
  let { title, images, description, rating, price } = products;
  return (
    <>
      <div className="product-div">
        <img className="product-image" src={images[0]}></img>
        <p>{title}</p>
        <p>Description-{description}</p>
        <p> Price-${price}</p>
        <p>Rating- {rating}</p>
      </div>
    </>
  );
};

export let Instock = (Card) => {
  return (props) => {
    return (
      <>
        <p className="stock">{props.products.availabilityStatus}</p>
        <Card {...props}></Card>
      </>
    );
  };
};
