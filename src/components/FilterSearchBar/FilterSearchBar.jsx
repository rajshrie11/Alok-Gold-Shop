// // import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const FilterSearchBar = () => {
//   const [query, setQuery] = useState("");
//   const [filter, setFilter] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const params = new URLSearchParams();
//     if (query) params.append("query", query);
//     if (filter) params.append("filter", filter);
//     navigate(`/products?${params.toString()}`);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex gap-2 items-center p-2">
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="border p-1 rounded"
//       />

//       <select
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//         className="border p-1 rounded"
//       >
//         <option value="">All</option>
//         <option value="gold">Gold</option>
//         <option value="silver">Silver</option>
//         <option value="diamond">Diamond</option>
//       </select>

//       <button
//         type="submit"
//         className="bg-yellow-500 text-white px-3 py-1 rounded"
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default FilterSearchBar;
