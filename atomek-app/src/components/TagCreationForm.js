import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ErrorMessage from "./ErrorMessage";
import { useForm } from "react-hook-form";
import { tagSchema } from "../validations/TagSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import { TagCreate, TagGetTagsByUser } from "../services/TagServices";

const TagCreationForm = (props) => {
  const { onCreation, userId } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(tagSchema),
  });

  const handleTagCreation = async (data) => {
    console.log(data);

    try {
        await TagCreate(data);

        if (onCreation) {
            onCreation();
        }
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleTagCreation)} className="row g-3">
      <div className="col-md-4">
        <label for="country" className="form-label">
          Etiqueta
        </label>
        <input
          type="text"
          className="form-control"
          id="inputPassword2"
          placeholder="Crear etiqueta"
          {...register("title")}
        />
        {errors.title && <ErrorMessage message={errors.title.message} />}
        <input value={userId} type="hidden" {...register("_user")} />
      </div>
      <div className="col-md-1">
        <br/>
        <button type="submit" class="btn-plus ">
          <FontAwesomeIcon icon={faPlus} />{" "}
        </button>
      </div>
    </form>
  );
};

export default TagCreationForm;