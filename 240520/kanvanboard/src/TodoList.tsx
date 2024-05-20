import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const TodoList = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [toDo, setTodo] = useState("");
  const [toDoError, setTodoError] = useState("");

  // target 활용 value 값 찾기
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setTodo(value);
  };

  // currentTarget 활용 value 값 찾기
  // const onChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = e;
  // };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (toDo.length < 10) {
      return setTodoError("Todo should be more longer...");
    }
  };
  const onValid = (data: any) => {
    console.log(data.errors);
  };
  // console.log(formState);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9] + @naver.com/gm,
              message: "Only naver.com emails allow",
            },
          })}
          type="email"
          placeholder="email"
        />
        <input
          {...register("firstname", { required: true })}
          type="text"
          placeholder="firstname"
        />
        <input
          {...register("lastname", { required: true })}
          type="text"
          placeholder="lastname"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          type="text"
          placeholder="username"
        />
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your Password is too short",
            },
          })}
          type="password"
          placeholder="password"
        />
        <span>{errors.password?.message as string}</span>
        <input
          {...register("password1", {
            required: "Password1 is required",
            minLength: {
              value: 5,
              message: "Your Password is too short",
            },
          })}
          type="password"
          placeholder="password1"
        />
        <span>{errors.password1?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
