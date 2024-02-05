/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Ripple, initTE } from "tw-elements";
const EditTutorial = ({ editTutorial, modalId }) => {
  initTE({ Modal, Ripple });
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const editSubmit = () => {
    editTutorial(editTitle, editDescription);
  };
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
  const getTutorial = async (data) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${modalId}`);
      setEditTitle(data.title);
      setEditDescription(data.description);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutorial();
  }, [modalId]);

  return (
    <div>
      <div>
        <div
          data-te-modal-init=""
          className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="editTutor"
          tabIndex={-1}
          aria-labelledby="editTutorLabel"
          aria-hidden="true"
        >
          <div
            data-te-modal-dialog-ref=""
            className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
          >
            <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
              <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <h5
                  className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                  id="editTutorLabel"
                >
                  Edit Tutorial
                </h5>
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-modal-dismiss=""
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative flex-auto p-4" data-te-modal-body-ref="">
                <form className="max-w-sm mx-auto text-start">
                  <div className="mb-5">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="text1"
                      className="peer"
                      placeholder="Change Your Title"
                      onChange={(e) => setEditTitle(e.target.value)}
                      value={editTitle || ""}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      id="text2"
                      placeholder="Change Your Description"
                      onChange={(e) => setEditDescription(e.target.value)}
                      value={editDescription || ""}
                      required
                    />
                  </div>
                  <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button
                      type="button"
                      className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init=""
                      data-te-modal-dismiss=""
                      data-te-ripple-color="light"
                      onClick={editSubmit}
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
