import { useState } from "react";
import CommentsForm from "../commentsfrom";

export default function Comment() {

  const [comment, setComment] = useState([]);

  const addNewComment = (newComment) => {
    setComment((currentComment) => [
      ...currentComment,
      newComment,
    ]);
  };

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-7">

          <h1 className="text-center fw-bold mb-4">
            All Comments
          </h1>

          {comment.map((comment, index) => (
            <div
              key={index}
              className="card shadow-sm border-0 rounded-4 mb-4"
            >

              <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-3">

                  <h5 className="fw-bold mb-0">
                    {comment.name}
                  </h5>

                  <span className="badge bg-primary">
                    #{index + 1}
                  </span>

                </div>

                <p className="text-muted mb-2">
                  {comment.email}
                </p>

                <hr />

                <p className="mb-0 fs-5">
                  {comment.comment}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      <CommentsForm addNewComment={addNewComment} />

    </div>
  );
}