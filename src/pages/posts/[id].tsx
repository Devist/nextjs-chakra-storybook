import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'

import { observer } from 'mobx-react'
import PostDetailTemplate from '@components/templates/PostDetailTemplate'
import { IComment, IPost } from '@core-business/entities'
import { PostsService } from '@core-business/services/posts'
import { useStores } from '@/stores'
import { LAYOUT_TYPE } from '@/@types/LayoutType'

function PostDetail() {
  const [loading, setLoading] = useState<boolean>(true)
  const { userStore, postStore } = useStores()
  // const router = useRouter()
  // const { id } = router.query

  const postsService = new PostsService()

  useEffect(() => {
    // const postId = id && !Array.isArray(id) ? parseInt(id) : null
    const postId = 30
    postId &&
      postsService
        .fetchOne(postId)
        .then((post: [IPost, IComment[]]) => postStore.setPost(post[0], post[1]))

    return () => postStore.init()
  }, [])

  useEffect(() => {
    if (postStore.post) setLoading(false)
  }, [postStore.post])

  return (
    <>
      <PostDetailTemplate
        user={userStore.user}
        loading={loading}
        post={postStore.post}
        comments={postStore.comments}
      />
    </>
  )
}

PostDetail.layout = LAYOUT_TYPE.DEFAULT
export default observer(PostDetail)
