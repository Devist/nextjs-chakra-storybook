import React from 'react'

import { IPost } from '@core-business/entities'
import { Card, CardBody, CardTitle } from '@core/components'

interface IProps {
  post: IPost
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

function PostCard({ post, onClick }: IProps) {
  return (
    <Card cursor="pointer" onClick={onClick}>
      <CardTitle text={post.title} />
      <CardBody>{post.body}</CardBody>
    </Card>
  )
}

export default PostCard
