type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.org/posts", {
    cache: "no-cache",
  });

  const posts: Post[] = await res.json();

  return (
    <main>
      <h1>سلام دکترموون</h1>
      <p>این یک پلتفرم جامع پزشکی و رزرو نوبت است</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
