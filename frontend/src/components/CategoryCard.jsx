function CategoryCard({image, category, description}) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={category} className="rounded-xl max-w-40" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{description}</h2>
        <div className="card-actions">
          <button className="btn bg-gray-600 text-white">View More</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
