import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



function CategoryCard({image, category, description}) {
  return (
    <div className="card bg-base-100 w-auto md:w-96 h-96 shadow-xl" data-aos="zoom-in">
      <figure className="px-10 pt-10">
        <img src={image} alt={category} className="rounded-xl w-40" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-semibold text-md mb-5">{description}</h2>
        <div className="card-actions">
          <button className="btn background-primary ">Discover Benefits</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
