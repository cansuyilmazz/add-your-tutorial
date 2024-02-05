import axios from "axios";
import { useState } from "react";

const AddTutorials = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutorial = { title, description };
    postTutorial(newTutorial);
    e.target.reset();
  };

  const postTutorial = async (newTutorial) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    try {
      await axios.post(BASE_URL, newTutorial);
    } catch (error) {
      console.log(error);
    }

    getTutorials();
  };

  return (
    <div>
      <h1 className="text-center text-red-500 text-4xl font-medium m-7">
        Add Your Tutorial
      </h1>
      <form className="max-w-sm mx-auto text-center" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="text1"
            className="peer"
            placeholder="Enter Your Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="text2"
            placeholder="Enter Your Description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorials;
