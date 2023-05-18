import "../Home/Leftside.css";

const Leftside = () => {
  return (
    <div className="photo">
      <img className="image" src={"Song_wall.png"} alt={"Song_wallpaper"} />
      <div className="login">
        <p className="already_have_account">Already have an account?</p>
        <button className="lgn_btn">LOGIN</button>
      </div>
      <p className="Discover">
        Discover new things on <br /> Superapp
      </p>
    </div>
  );
};

export default Leftside;
