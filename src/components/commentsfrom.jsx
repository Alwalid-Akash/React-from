import "bootstrap/dist/css/bootstrap.min.css";
import { Formik } from "formik";

export default function CommentsForm({ addNewComment }) {

  // submit function
  const handleSubmit = (values, { resetForm }) => {

    // add new comment
    addNewComment(values);

    // clear form after submit
    resetForm();
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow rounded-4">

            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Leave a Comment
              </h2>

              <Formik

                // form starting values
                initialValues={{
                  name: "",
                  email: "",
                  comment: "",
                }}

                // validation
                validate={(values) => {

                  let errors = {};

                  // name validation
                  if (!values.name) {
                    errors.name = "Please enter your name";
                  }

                  // email validation
                  if (!values.email) {
                    errors.email = "Please enter your email";
                  }

                  // comment validation
                  if (!values.comment) {
                    errors.comment = "Please enter your comment";
                  }

                  return errors;
                }}

                // submit function
                onSubmit={handleSubmit}

              >

                {({

                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,

                }) => (

                  <form onSubmit={handleSubmit}>



                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="form-control mb-2"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />



                    {touched.name && errors.name ? (
                      <div className="text-danger mb-3">
                        {errors.name}
                      </div>
                    ) : null}



                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="form-control mb-2"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />



                    {touched.email && errors.email ? (
                      <div className="text-danger mb-3">
                        {errors.email}
                      </div>
                    ) : null}


                    <textarea
                      name="comment"
                      placeholder="Write your comment"
                      className="form-control mb-2"
                      rows="4"
                      value={values.comment}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>

                    {/* COMMENT ERROR */}

                    {touched.comment && errors.comment ? (
                      <div className="text-danger mb-3">
                        {errors.comment}
                      </div>
                    ) : null}



                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                    >
                      Submit Comment
                    </button>

                  </form>
                )}

              </Formik>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}