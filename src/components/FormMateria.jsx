import React from "react";
import { useForm } from "react-hook-form";

function FormMateria() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="ID"
        {...register("ID", {
          required: true,
          max: 99999999999999,
          min: -1,
          maxLength: 15,
          pattern: /9-9999-9999/i,
        })}
      />
      <input
        type="text"
        placeholder="Nombre"
        {...register("Nombre", { required: true, maxLength: 100 })}
      />

      <input type="submit" />
    </form>
  );
}

export default FormMateria;
