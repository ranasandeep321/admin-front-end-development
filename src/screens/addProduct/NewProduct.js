import React, { useState } from "react";
const LoginContainer = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => setSelectedImage();

  const category = [
    "Arts and Crafts",
    "Fashion and Lifestyle",
    "Gourmet",
    "Home and Living",
    "Toys and Games",
    "Hampers",
    "Jewellery",
    "Baked and Brewed",
    "Flower and Bouquets",
    "Disney",
    "Marvel",
    "Netflix",
    "Panda",
    "For Couples",
    "For Boyfriend",
    "For Brother",
    "For Daughter",
    "For Father",
    "For Friend",
    "For Girlfriend",
    "For Grandfather",
    "For Grandmother",
    "For Husband",
    "For Mother",
    "For Kids",
    "For Sisters",
    "For Son",
    "For Wife",
    "Anniversary",
    "Baby Shower",
    "Best Wishes",
    "Birthday",
    "Featured Phones",
    "House Warming",
    "Wedding",
    "Special Day",
  ];
  const listItems = category.map((item) => (
    <div>
      <input
        type="checkbox"
        name="checkbox-three"
        id="checkbox-three"
        class="cursor-pointer 
    w-4 h-4 border-3 rounded-lg"
      />
      <label for="checkbox-one" class="ml-3">
        {item}
      </label>
    </div>
  ));

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await fetch("https://api.stunhaul.com/api/vi/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, desc, selectedImage, category }),
    });
  };

  return (
    <>
      <div className="flex p-5">
        <div className="w-1/3 h-screen text-left ml-2">
          <div>
            <h2 className="text-xl font-semibold mt-6">By Category</h2>
            <label for="checkbox-one" class="ml-3">
              {listItems.slice(0, 9)}
            </label>
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-6">By Theme</h2>
            <label for="checkbox-one" class="ml-3">
              {listItems.slice(9, 13)}
            </label>
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-6">By Relation</h2>
            <label for="checkbox-one" class="ml-3">
              {listItems.slice(13, 28)}
            </label>
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-6">By Occasion</h2>
            <label for="checkbox-one" class="ml-3">
              {listItems.slice(28)}
            </label>
          </div>
        </div>
        <div className="w-2/3 h-screen m-4">
          <h1 className="text-3xl font-bold my-2">Create a Product</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              className="border border-gray-400 h-10 w-full rounded px-2 py-1 m-1.5"
              accept="image/*"
              required
              placeholder="enter details"
              onChange={imageChange}
            ></input>
            <input
              name="name"
              type="text"
              className="border border-gray-400 h-10 w-full rounded p-2 m-1.5"
              required
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <input
              name="price"
              type="text"
              className="border border-gray-400 h-10 w-full rounded p-2 m-1.5"
              required
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            ></input>
            <textarea
              name="productDescription"
              type="text"
              className="border border-gray-400 h-40 w-full rounded p-2 m-1.5"
              required
              placeholder="Short Description"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 p-2 m-2 rounded text-white"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-2/3 h-screen m-4">
          <div className="border rounded h-1/2 w-full mt-10">
            {selectedImage ? (
              <>
                <img
                  className="p-4 h-full w-full"
                  src={URL.createObjectURL(selectedImage)}
                  alt="product"
                ></img>
                <button
                  onClick={removeSelectedImage}
                  className="border rounded p-1 px-2 mt-4 ml-80 bg-blue-400 text-white"
                >
                  Remove Image
                </button>
              </>
            ) : (
              <div>
                <h1 className="mt-48 mx-10">
                  {" "}
                  Product image upload preview will appear here{" "}
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContainer;
