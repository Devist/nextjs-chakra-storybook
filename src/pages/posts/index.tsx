import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { PostsService } from '@core-business/services/posts'
import PostListTemplate from '@components/templates/PostListTemplate'
import { useStores } from '@/stores'
import { LAYOUT_TYPE } from '@/@types/LayoutType'
import FetchMore from '@components/utils/FetchMore'
import { useRouter } from 'next/router'

function PostList() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { postsStore } = useStores()
  const postsService = new PostsService()

  useEffect(() => {
    handlers.fetchMore()
    return () => postsStore.init()
  }, [])

  const handlers = {
    onClick: (postId: number): void => {
      router.push(`/posts/${postId}`)
    },
    fetchMore: async () => {
      setLoading(true)
      const pagination = postsStore.pagination
      postsStore.setPosts(await postsService.fetchMore(pagination))
      postsStore.setPage(pagination._page + 1)
      setLoading(false)
    }
  }

  return (
    <>
      <PostListTemplate posts={postsStore.posts} onClick={handlers.onClick} />
      {/* <FetchMore loading={loading} onScrollToBottom={handlers.fetchMore} /> */}
    </>
  )
}

PostList.layout = LAYOUT_TYPE.DEFAULT
export default PostList
