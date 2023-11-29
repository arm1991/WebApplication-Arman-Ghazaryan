import "./SectionTwo.scss";
import Item from "./item/Item";
import { FaDesktop, FaRegGem, FaHeart, FaUserCog } from "react-icons/fa";

const SectionTwo = () => {
  const components = [
    {
      Component: FaDesktop,
      title: "Responsive",
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      Component: FaRegGem,
      title: "Passion",
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      Component: FaHeart,
      title: "Design",
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      Component: FaUserCog,
      title: "Support",
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
  ];
  return (
    <section className="home-section-two">
      <div className="home-section-two-title">
        <h1>ABOUT THE COMPANY</h1>
        <h3>Key features of our company</h3>
      </div>
      <div className="home-section-two-content">
        {components.map((component, idx) => {
          return (
            <Item
              key={idx}
              Component={component.Component}
              title={component.title}
              description={component.describtion}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionTwo;
