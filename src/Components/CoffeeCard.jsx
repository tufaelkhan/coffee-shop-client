import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const reamining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(reamining)
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-orange-300 shadow-xl m-5 p-5">
            <figure><img src={photo} className="pr-3" style={{ height: '120px' }} alt="Movie" /></figure>
            <div className="flex justify-between w-full">
                <div className="pr-3 mr-3">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn rounded">View</button>
                        <Link to={`update/${_id}`}><button className="btn rounded">Edit</button></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn rounded bg-orange-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;