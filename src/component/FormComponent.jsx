import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { GlobalDataContext } from "../store/context";
import { useNavigate } from "react-router-dom";

function FormComponent() {
  const navigate = useNavigate();
  const { addStory } = useContext(GlobalDataContext);
  const title = useRef();
  const body = useRef();
  const tags = useRef();

  function submitHandel(e) {
    e.preventDefault();
    const titleValue = title.current.value;
    const bodyValue = body.current.value;
    const tagsValue = tags.current.value.split(" ");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 5,

        title: titleValue,
        body: bodyValue,

        tags: tagsValue,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then(post =>addStory(post) );
      navigate("/home")

    

    title.current.value = "";
    body.current.value = "";
    tags.current.value = "";
  }

  return (
    <div>
      <form className="createPost" onSubmit={submitHandel}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input
            type="text"
            ref={title}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="How are you..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Body
          </label>
          <textarea
            type="text"
            ref={body}
            rows="5"
            className="form-control"
            id="body"
            aria-describedby="emailHelp"
            placeholder="Tell us more ..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Post Tag
          </label>
          <input
            type="text"
            ref={tags}
            rows="5"
            className="form-control"
            id="tag"
            aria-describedby="emailHelp"
            placeholder="Mention Tags with space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Share Story
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
