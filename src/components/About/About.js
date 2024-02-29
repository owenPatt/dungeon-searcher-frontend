// Import necessary styles
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2 className="about__title">About the Project</h2>
      <h3 className="about__subtitle">Who am I?</h3>
      <p className="about__text">
        In the realm of coding, I am but a humble adventurer, ever seeking the
        next great quest. There is no joy more profound than completing a
        project worthy of legend and sharing it with the realms far and wide. My
        heart beats with a passion for mastering new enchantments and weaving
        them into solutions for the challenges that plague our lands, no matter
        how small.
      </p>
      <h3 className="about__subtitle">Sites Purpose</h3>
      <p className="about__text">
        This tome of knowledge is meant to help create memorable encounters that
        your party is bound to enjoy. Whether that be a deadly fight against an
        Ancient Red Dragon or a simple goblin skirmish, this site should prove
        useful in planning those encounters.
      </p>
    </div>
  );
};

export default About;
