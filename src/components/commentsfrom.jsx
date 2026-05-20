import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (event) => {
    setData((currentData) => ({
      ...currentData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewComment(data);

    setData({
      name: "",
      email: "",
      comment: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">

          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">

              <h2 className="text-center fw-bold mb-2">
                Leave a Comment
              </h2>

              <p className="text-center text-muted mb-4">
                Share your thoughts with us
              </p>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg mb-3"
                  placeholder="Enter your name"
                  value={data.name}
                  onChange={handleInputChange}
                />

                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg mb-3"
                  placeholder="Enter your email"
                  value={data.email}
                  onChange={handleInputChange}
                />

                <textarea
                  name="comment"
                  className="form-control form-control-lg mb-3"
                  rows="4"
                  placeholder="Write your comment..."
                  value={data.comment}
                  onChange={handleInputChange}
                ></textarea>

                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Submit Comment
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}