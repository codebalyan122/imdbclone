import Results from "@/Components/Results";

export default async function searchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data from search");
  }
  const data = await res.json();
  return (
    <div>
      {data.results && data.results.length === 0 && (
        <h1 className="text-center p-6">No results Found</h1>
      )}
      {data.results && <Results results={data.results} />}
    </div>
  );
}
