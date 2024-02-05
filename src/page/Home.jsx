import { useEffect, useState } from "react";
import AddTutorials from "../components/AddTutorials";
import axios from "axios";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorials = async (data) => {
    try {
      const { data } = await axios(BASE_URL);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <div>
      <AddTutorials getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </div>
  );
};

export default Home;
