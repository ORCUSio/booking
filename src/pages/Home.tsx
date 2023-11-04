import Cards from "@/components/custom/Cards";
import React, { ReactNode } from "react";

type HomeSectionProps = {
  heading: string;
  children?: ReactNode;
};

export const HomeSection: React.FC<HomeSectionProps> = ({
  heading,
  children,
}) => {
  return (
    <section className="mt-10">
      <a href="/">
        <h1 className="font-semibold text-4xl hover:border-b-4 hover:border-white w-max">
          {heading}
        </h1>
      </a>
      <div className="mt-4 flex gap-4 w-full flex-wrap">{children}</div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <HomeSection heading="Popular Events">
        <Cards src="https://i.pinimg.com/236x/db/57/7c/db577c28f93d76460169f0b57a469b50.jpg" />
        <Cards src="https://cdnb.artstation.com/p/assets/images/images/022/986/391/large/kriti-ranjan-event-poster-high.jpg?1577603206" />
        <Cards src="https://www.nextdayflyers.com/blog/wp-content/uploads/2014/11/event_posters12.jpg" />
      </HomeSection>
      <HomeSection heading="College Events">
        <Cards src="https://marketplace.canva.com/EAFZVH8oZpM/1/0/1131w/canva-pink-orange-y2k-neon-party-event-poster-YGFV6YxEs7g.jpg" />
        <Cards src="https://img.freepik.com/free-vector/gradient-musical-event-poster-template_23-2150520412.jpg" />
        <Cards src="https://reallygooddesigns.com/wp-content/uploads/2020/01/Design-Exhibition-Poster.jpg" />
      </HomeSection>
    </>
  );
};

export default Home;
