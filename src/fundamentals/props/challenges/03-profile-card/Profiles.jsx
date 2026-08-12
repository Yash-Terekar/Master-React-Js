import ProfileCard from "./ProfileCard";

const Profiles = () => {
  return (
    <div>
      <ProfileCard
        name="Yash Terekar"
        age={23}
        course="MCA"
        skills={["JavaScript", "Html", "Css", "React"]}
        status="Learning React"
      />
      <ProfileCard
        name="Sanket Yelmate"
        age={22}
        course="MCA"
        skills={["Python", "Html", "Css", "Tablue"]}
        status="Learning Python"
      />
    </div>
  );
};
export default Profiles;
