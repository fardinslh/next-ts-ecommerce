import React from "react";
export const metadata = {
  title: "Add Product - Flowmazon",
};

const AddProductPage = () => {
  return (
    <div className="bg-gray-200">
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Name"
          className="mb-3 w-full input input-bordered"
        />
        <textarea
          required
          name="description"
          className="textarea textarea-bordered mb-3 w-full"
          placeholder="Description"
        />
        <input
          type="url"
          required
          name="imageUrl"
          placeholder="Image URL"
          className="mb-3 w-full input input-bordered"
        />
        <input
          type="number"
          required
          name="price"
          placeholder="Price"
          className="mb-3 w-full input input-bordered"
        />
        <button type="submit" className="btn btn-primary btn-block">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
