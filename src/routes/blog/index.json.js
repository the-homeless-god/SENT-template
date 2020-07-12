import posts from './_posts'

const contents = JSON.stringify(
  posts.map((post) => ({
    title: post.title,
    slug: post.slug,
  })),
)

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(contents)
}
