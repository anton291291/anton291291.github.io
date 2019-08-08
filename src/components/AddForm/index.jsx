import React from 'react';

import "./AddForm.scss";

const AddForm = () => {
  return (
    <form className="add-form">
      <div className = "form-group" >
      <h4>
        <label for="title">
          Title
        </label>
      </h4>
      <input
        type="email"
        className="form-control"
        id="title"
        placeholder="Enter email"/>
    </div>
    <div className="add-form__row">
      <h4>
        <label for="image">
          Image URL
        </label>
      </h4>
      <input
        className="form-control"
        id="image"
        placeholder="Enter image URL"/>
    </div>
    <div className="add-form__row">
      <h4>
        <label for="description">
          Description
        </label>
      </h4>
      <textarea
        rows="8"
        className="form-control"
        id="description"
        placeholder="Enter text"/>
    </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
);
}

export default AddForm;
