import { Grid } from '@chakra-ui/react'
import PostCard from '@components/organisms/PostCard'
import { IPost } from '@core-business/entities'

import Skeleton from 'react-loading-skeleton'

interface Props {
  posts: IPost[] | undefined
  onClick: (postId: number) => void
}

function PostListTemplate({ posts, onClick }: Props) {
  // 내부에서 처리하는 경우(화면구성에서 발생하는 이벤트의 경우), events에 구현한다.
  const events = {
    handleClick: (postId: number | null): void => {
      if (!postId) return
      onClick(postId)
    }
  }
  const skeletons = () => (
    <>
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />

      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />

      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />

      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
    </>
  )

  return (
    <>
      <Grid templateColumns="repeat(4, 2fr)" gap={10}>
        {posts && posts.length > 0
          ? posts.map((post, idx) => (
              <PostCard
                key={`post-card-${idx}`}
                post={post}
                onClick={() => events.handleClick(post.id ? post.id : null)}
              />
            ))
          : skeletons()}
      </Grid>
    </>
  )
}

export default PostListTemplate
