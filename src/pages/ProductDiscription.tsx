import { Button } from "@/components/ui/button";
import { HomeSection } from "./Home";
import Cards from "@/components/custom/Cards";

const ProductDiscription = () => {
  return (
    <>
      <section className="flex justify-evenly py-20 ">
        <img
          src="https://reallygooddesigns.com/wp-content/uploads/2020/01/Design-Exhibition-Poster.jpg"
          alt=""
          className="w-[300px] max-h-[400px] "
        />
        <div className="w-[25vw] py-4">
          <h2 className="text-5xl font-semibold pt-1">SUMMER EVENT</h2>
          <div className="flex text-base gap-1 py-2">
            <p>IET DAVV</p>
            <span>-</span>
            <span className="text-green-400 font-semibold">available</span>
          </div>
          <div className="flex flex-col gap-4 pt-8">
            <hr className="border-gray-500 " />
            <div className="flex w-full ">
              <h3 className="font-semibold mr-10">Description</h3>
              <p>Description</p>
            </div>
            <hr className="border-gray-500 " />
            <div className="flex w-full ">
              <h3 className="font-semibold mr-10">Description</h3>
              <p>Description</p>
            </div>
            <hr className="border-gray-500 " />
            <div className="flex w-full ">
              <h3 className="font-semibold mr-10">Description</h3>
              <p>Description</p>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">
              BUY
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h1 className="font-normal text-lg">Discription</h1>
        <p className="max-w-[90ch] py-2 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          deserunt similique velit impedit rem assumenda provident inventore
          soluta voluptatum architecto tenetur animi officiis possimus fugiat,
          ullam voluptatibus corporis enim? Ducimus est beatae distinctio,
          officiis, laborum cupiditate iste facilis mollitia numquam sequi
          impedit vel placeat! Vel veniam facilis blanditiis consequuntur. Ad?
        </p>
      </section>
      <hr className="border-white my-5" />
      <section>
        <HomeSection heading="Popular Events">
          <Cards src="https://i.pinimg.com/236x/db/57/7c/db577c28f93d76460169f0b57a469b50.jpg" />
          <Cards src="https://cdnb.artstation.com/p/assets/images/images/022/986/391/large/kriti-ranjan-event-poster-high.jpg?1577603206" />
          <Cards src="https://www.nextdayflyers.com/blog/wp-content/uploads/2014/11/event_posters12.jpg" />
        </HomeSection>
      </section>
    </>
  );
};

export default ProductDiscription;
