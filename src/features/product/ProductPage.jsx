"use client";

import useProductFetching from "../../hooks/useProduct.js";

export default function ProductsPage({ id }) {
  const { data, isLoading } = useProductFetching(id);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data?.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
