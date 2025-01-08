import clsx from "clsx";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ImSpoonKnife } from "react-icons/im";
import * as Yup from "yup";
import SectionTitle from "./../../../components/SectionTitle";

export default function AddItem() {
  const handleFrom = (value) => {
    if (value) {
      console.log(value);
    }
  };
  return (
    <>
      <SectionTitle title={"add An Item"} subTitle={"Whats's new?"} />
      <Formik
        initialValues={{
          name: "",
          category: "",
          price: "",
          recipe: "",
          image: null,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Recipe name is required"),
          category: Yup.string().required("Category is required"),
          price: Yup.number().required("Price is required"),
          recipe: Yup.string().required("Recipe Details is required"),
          image: Yup.mixed()
            .required("Image is required")
            .test(
              "filetype",
              "unsupported file type",
              (value) =>
                value &&
                ["image/png", "image/jpeg", "image/jpg"].includes(value.type)
            )
            .test(
              "fileSize",
              "File size too large",
              (value) => value && value.size <= 1048576
            ),
        })}
        onSubmit={(values) => {
          handleFrom(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="w-full bg-base-200">
            <div className="space-y-6 rounded-xl  p-6 sm:p-10">
              {/* name */}
              <div>
                <label className="text-sm/6 font-medium ">Recipe Name*</label>
                <Field
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
                    defaultValue={""}
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
                <label className="text-sm/6 font-medium ">Recipe Details</label>
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
              <button
                className="btn flex items-center bg-yellow-600 rounded-none text-white"
                type="submit"
              >
                Add Item <ImSpoonKnife size={20} />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
