import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

console.log("im Server component");

export default async function Home({ searchParams} : { 
  searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;

    const posts = [{
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "This is a description",
      image: 'https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg',
      category: "Robots",
      title: "We Robots"
    }];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br/> Connect With Entrepreneurs </h1>
        <p className="sub-heading !max-w-3xl"> 
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
        <SearchForm query={query}  />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "Latest Pitches"}
        </p>

        <ul className="mt-7 card_grid">
          { posts?.length > 0 ? posts.map((post, index) => (
              <StartupCard key={post?._id} post={post} />
          )) : <p className="no-results">No posts found</p>}
        </ul>
      </section>
    </>
  );
}
