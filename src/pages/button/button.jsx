import style from "./button.module.scss";
import { useForm } from "react-hook-form";

export const Input = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <div>

            <input className={style.input}
              {...register("Last Name", {
                required: true,
                maxLength: {
                  value: 10,
                  message: "10 tadan kop kirita olmaysan",
                },
                minLength: {
                  value: 3,
                  message: "eng kam qiymat 3 ta",
                },
              })}
              type="text"
              placeholder="Last Name"
            />
            <p>{errors.name && errors.name.message}</p>


            <input className={style.input}
              {...register("Email Address", {
                required: true,
                maxLength: {
                  value: 10,
                  message: "10 tadan kop kirita olmaysan",
                },
                minLength: {
                  value: 3,
                  message: "eng kam qiymat 3 ta",
                },
              })}
              type="text"
              placeholder="First Name"
            />
            <p>{errors.name && errors.name.message}</p>



            <input className={style.input}
              {...register("name", {
                required: true,
                maxLength: {
                  value: 10,
                  message: "10 tadan kop kirita olmaysan",
                },
                minLength: {
                  value: 3,
                  message: "eng kam qiymat 3 ta",
                },
              })}
              type="text"
              placeholder="Email Address"
            />
            <p>{errors.name && errors.name.message}</p>

          </div>
          <div>
            <input className={style.input}
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
            />
            <p>{errors.name && "password kiriting"}</p>
          </div>
          {/* <button type="submit">Submit</button> */}
          <button className={style.button} type="submit">CLAIM YOUR FREE TRIAL</button>
        </form>
      </div>
    </>
  );
};
