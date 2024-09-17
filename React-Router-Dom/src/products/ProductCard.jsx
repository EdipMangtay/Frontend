import '../App.css';

export default function ProductCard({ item }) {
    return (
        <div className="col-sm mb-3">
            <div className="card">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description.substring(0, 100)}...</p>
                    <p className="card-lead">${item.price}</p>

                    <button className="btn btn-primary">Fav</button>
                </div>
            </div>
        </div>
    )
}