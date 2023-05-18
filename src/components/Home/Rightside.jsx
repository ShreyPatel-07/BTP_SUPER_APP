import "../Home/Rightside.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Rightside = () => {
  const schema = yup.object().shape({
    Name: yup.string().required("Your Name is Required"),
    Username: yup.string().required("Username is Required"),
    Email: yup.string().email().required("Email is Required"),
    Mobile: yup
      .number()
      .positive()
      .integer()
      .typeError("Mobile Number is Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let navigate = useNavigate();
  const Category_page = () => {
    navigate("/Categories");
  };

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("Data", JSON.stringify(data));
    Category_page();
  };

  return (
    <div className="Rightside">
      <div className="container1">
        <div className="Super_app">
          <img src={"Super app.png"} alt={"Super_app"} />
          <br />
          <br />
          <p>Create your new account</p>
          <br />
          <div className="btns">
            <button>Email</button>
            <img src={"Line.png"} alt={"Line"}></img>
            <button>Google</button>
          </div>
          <br />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="inputs"
            type="text"
            placeholder="Name"
            {...register("Name")}
          />
          <p className="error_message">{errors.Name?.message}</p>
          <input
            className="inputs"
            type="text"
            placeholder="Username"
            {...register("Username")}
          />
          <p className="error_message">{errors.Username?.message}</p>
          <input
            className="inputs"
            type="text"
            placeholder="Email"
            {...register("Email")}
          />
          <p className="error_message">{errors.Email?.message}</p>
          <input
            className="inputs"
            type="number"
            placeholder="Mobile"
            {...register("Mobile")}
          />
          <p className="error_message">{errors.Mobile?.message}</p>
          <div className="Sharing_data_with_SA">
            <input className="checkbox" type="checkbox" />
            <p> &emsp;Share my registration data with Superapp</p>
          </div>
          <br />
          <button type="submit">SIGN UP</button>
        </form>
        <div className="Terms_n_condition">
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <span className="TNC_clr">
              Terms and <br />
              Conditions of Use.
            </span>
            <br />
            <br />
            To learn more about how Superapp collects, uses, shares and <br />
            protects your personal data please head Superapp{" "}
            <span className="TNC_clr">
              Privacy
              <br /> Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rightside;
