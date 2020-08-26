import * as React from 'react'
import ListItem from './ListItem'
import { Project } from '../typings'

type Props = {
  items: Project[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
