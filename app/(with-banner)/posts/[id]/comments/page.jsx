import Image from 'next/image'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 5000))

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 1
    }
  })
    .then(res => res.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  // console.log(comments)
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image width='50' height='50' alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
