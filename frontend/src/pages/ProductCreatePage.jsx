import { useForm } from "react-hook-form";
import { createProduct } from "../api/products.api";
import { useNavigate } from "react-router-dom";


function ProductCreatePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("category", data.category);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("specification", data.specification);
    formData.append("image", data.image[0]); // Importante: extraer el primer archivo
    const response = await createProduct(formData);
    console.log(response);
    navigate("/products");
    
  });

  return (
    <div className="bg-gray-200 py-20">
      <form
        onSubmit={onSubmit}
        className="max-w-md mx-auto p-6 drop-shadow-2xl rounded-lg shadow-md space-y-4 text-gray-800 bg-white"
      >

        {/* Category ID */}
        <div>
          <label className="block font-medium mb-1">Category:</label>
          <select className="select focus:outline-none" name="category"
          {...register('category', { required: true })}>
            <option value="1">Protein</option>
            <option value="2">Vitamins</option>
            <option value="3">PreWorkout</option>
          </select>
          {errors.category && (
            <span className="text-red-500">Category is required</span>
          )}
        </div>

        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title:</label>
          <input
            className="border border-gray-400 p-2 w-full rounded"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-500">Title is required</span>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description:</label>
          <input
            className="border border-gray-400 p-2 w-full rounded"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </div>

        {/* Specification */}
        <div>
          <label className="block font-medium mb-1">Specification:</label>
          <textarea
            className="border border-gray-400 p-2 w-full rounded resize-none"
            rows="4"
            {...register("specification", { required: true })}
          ></textarea>
          {errors.specification && (
            <span className="text-red-500">Specification is required</span>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">Image:</label>
          <input
            type="file"
            className="border border-gray-400 p-2 w-full rounded"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-500">Image is required</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-gray-800 text-white w-full"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}

export default ProductCreatePage;
