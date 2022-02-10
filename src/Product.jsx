import Rating from "react-rating";

const Product = (props) => {
    return (
        <div className='product card m-2' key={props.id}>
            <img className="card-img-top" src={props.imageUrl} alt="Product Card" />
            <div className="card-body text-left">
                <h5 className="card-title text-capitalize">{props.title}</h5>
                <small className="card-text mt-0 pb-3 m-1 text-capitalize">{props.category} | {props.rating} by {props.ratingCount}</small>
                <Rating className='d-block' start={0} stop={5} step={1} fractions={10} initialRating={props.rating} readonly />
                <p className="card-text pt-2 text-capitalize">{props.desc}</p>
                <div className="mt-2 row">
                    <h5 className="col price w-50 d-inline">{`₹ ${props.price}`}</h5>
                    <button className="col-7 btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
export default Product;