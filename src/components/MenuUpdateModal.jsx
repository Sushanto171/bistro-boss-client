import clsx from "clsx";
import { ErrorMessage, Field } from "formik";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { ImSpoonKnife } from "react-icons/im";
const MenuUpdateModal = ({ info }) => {
  const { image, name, price, recipe, _id, refetch, category } = info;

  const handleFrom = async (values) => {
    try {
      // Simulate an API call (replace this with your actual API logic)
      console.log("Submitting data:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API delay
      console.log("Data submitted successfully");
      return Promise.resolve();
    } catch (error) {
      console.error("Error submitting data:", error);
      return Promise.reject(error);
    }
  };
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_6"
        className="btn btn-ghost btn-xs bg-yellow-600 w-8 h-8"
      >
        <FiEdit className="text-xl" />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal text-gray-800" role="dialog">
        <div className="modal-box">
          {({ setFieldValue }) => (
            <form className="w-full bg-base-200">
              <div className="space-y-6 rounded-xl  p-6 sm:p-10">
                {/* name */}
                <div>
                  <label className="text-sm/6 font-medium ">Recipe Name*</label>
                  <input
                    placeholder="recipe name"
                    name="name"
                    className={clsx(
                      "mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 ",
                      " data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-error text-sm"
                  />
                </div>
                <div className="relative gap-2 flex items-center">
                  {/* category */}
                  <div className="flex-1">
                    <label className="text-sm/6 font-medium ">Category*</label>
                    <Field
                      as="select"
                      name="category"
                      className={clsx(
                        "mt-3 w-full block flex-1 rounded-lg border-none py-2 px-3 text-sm/6 ",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                        // Make the text of each option black on Windows
                        "*:text-black"
                      )}
                    >
                      <option value={""} disabled>
                        Select Category
                      </option>
                      <option value="soup">Soup</option>
                      <option value={"pizza"}>Pizza</option>
                      <option value={"salad"}>Salad</option>
                      <option value={"dessert"}>dessert</option>
                    </Field>
                    <ErrorMessage
                      name="category"
                      component="div"
                      className="text-error text-sm"
                    />
                  </div>
                  {/* price */}
                  <div className="flex-1">
                    <label className="text-sm/6 font-medium ">Price*</label>
                    <Field
                      placeholder="price"
                      name="price"
                      type="number"
                      className={clsx(
                        "mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 ",
                        " data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                    />{" "}
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="text-error text-sm"
                    />
                  </div>
                </div>
                {/* recipe details */}
                <div>
                  <label className="text-sm/6 font-medium ">
                    Recipe Details
                  </label>
                  <Field
                    as="textarea"
                    placeholder="Recipe details"
                    name="recipe"
                    className={clsx(
                      "mt-3 block w-full resize-none rounded-lg border-none py-1.5 px-3 text-sm/6 ",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                    rows={3}
                  />{" "}
                  <ErrorMessage
                    name="recipe"
                    component="div"
                    className="text-error text-sm"
                  />
                </div>
                <input
                  type="file"
                  name="image"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                  }}
                  className="w-full max-w-xs rounded-none "
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-error text-sm"
                />
                <div className="flex items-center">
                  <div className="modal-action">
                    <button
                      className="btn flex items-center bg-yellow-600 rounded-none text-white"
                      type="submit"
                    >
                      Update Item <ImSpoonKnife size={20} />
                    </button>
                    <label
                      htmlFor="my_modal_6"
                      className="btn border btn-error"
                    >
                      Close!
                    </label>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuUpdateModal;
