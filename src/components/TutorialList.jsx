import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const TutorialList = ({ tutorials, getTutorials }) => {
  const [modalId, setModalId] = useState();

  const deleteTutorial = async (id) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";

    try {
      await axios.delete(`${BASE_URL}/${id}/`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const editTutorial = async (title, description) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
    try {
      await axios.put(`${BASE_URL}/${modalId}/`, { title, description });
      setModalId("");
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8  ">
          <div className=" inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden flex">
              <table className="min-w-full text-center text-sm font-light  ">
                <thead className="border-b  bg-orange-500 font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr className="">
                    <th scope="col" className="px-6 py-4">
                      #id
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tutorials?.map((item) => {
                    const { id, title, description } = item;
                    return (
                      <tr
                        key={id}
                        className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                      >
                        <th className="whitespace-nowrap px-6 py-4">{id}</th>
                        <td className="whitespace-nowrap px-6 py-4">{title}</td>
                        <td className="wrap px-6 py-4 text-start">
                          {description}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 flex justify-center  ">
                          <CiEdit
                            className="cursor-pointer me-5 text-"
                            size={20}
                            type="button"
                            data-te-toggle="modal"
                            data-te-target="#editTutor"
                            onClick={() => setModalId(id)}
                          />
                          <RiDeleteBin5Line
                            className="cursor-pointer"
                            size={20}
                            type="button"
                            onClick={() => deleteTutorial(id)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <EditTutorial
        getTutorials={getTutorials}
        editTutorial={editTutorial}
        modalId={modalId}
      />
    </>
  );
};

export default TutorialList;
