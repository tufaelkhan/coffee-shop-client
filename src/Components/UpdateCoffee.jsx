import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

const handleUpdateCoffee = (event) => {
        event.preventDefault();
    
        const form = event.target;
    
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const updatedCoffees = {name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffees);
    
        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updatedCoffees)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Success!',
              text: 'Coffee Updated Succfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
      }
    return (
        <div className='bg-orange-100 p-20'>
        <h1 className='text-6xl text-purple-600 mt-5 text-center font-extrabold'>Update Coffee {name}!!</h1>
        <form onSubmit={handleUpdateCoffee}>
            {/* form name and quantity row */}
        <div className='md:flex'>
        <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name {name}</span>
            </label>
            <label className="input-group">
              <input type="text" name='name' defaultValue={name} placeholder="coffee name" className="input input-bordered w-full" />
            </label>
          </div>
        <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" name='quantity'  defaultValue={quantity} placeholder="available quantity" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
               {/* form supplier taste row */}
               <div className='md:flex'>
        <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input type="text" name='supplier' defaultValue={supplier} placeholder="supplier name" className="input input-bordered w-full" />
            </label>
          </div>
        <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Coffee Taste</span>
            </label>
            <label className="input-group">
              <input type="text" name='taste'  defaultValue={taste} placeholder="coffee taste" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
            {/* form category and details row */}
        <div className='md:flex'>
        <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <label className="input-group">
              <input type="text" name='category'  defaultValue={category} placeholder="Category name" className="input input-bordered w-full" />
            </label>
          </div>
        <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Coffee Details</span>
            </label>
            <label className="input-group">
              <input type="text" name='details' defaultValue={details} placeholder="coffee details" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
            {/* form photo row */}
        <div className='mb-8'>
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input type="text" name='photo' defaultValue={photo} placeholder="photo url" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <input type="submit" value="UPDATE COFFEE" className="btn btn-block text-4xl" />
        </form>
      </div>
    );
};

export default UpdateCoffee;