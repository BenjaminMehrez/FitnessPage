import { useForm } from "react-hook-form";


function ProductCreatePage() {

  const {register} = useForm()


  return (
    <div className="bg-base-200 py-20">
      <form className="max-w-md mx-auto p-6 border rounded-lg shadow-md space-y-4 bg-white">
        {/* Category ID */}
        <div>
          <label className="block font-medium mb-1">Category:</label>
          <select name="category">
            <option value="Vitaminas">Vitaminas</option>
            <option value="Protein">Protein</option>
            <option value="Pre Workout">Pre Workout</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title:</label>
          <input className="border p-2 w-full rounded" />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description:</label>
          <input className="border p-2 w-full rounded" />
        </div>

        {/* Specification */}
        <div>
          <label className="block font-medium mb-1">Specification:</label>
          <textarea className="border p-2 w-full rounded resize-none" rows="4"></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">Image:</label>
          <input type="file" accept="image/*" className="border p-2 w-full rounded" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductCreatePage;
