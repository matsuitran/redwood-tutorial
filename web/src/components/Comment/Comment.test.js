import { render, screen } from '@redwoodjs/testing'

import Comment from './Comment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Comment', () => {
  it('renders successfully', () => {
    const comment = {
      name: 'Rob Cameron',
      body: 'This is the first comment!',
      createdAt: '2020-01-01T12:34:56Z',
    }
    expect(() => {
      render(<Comment comment={comment} />)

      expect(screen.getByText(comment.name)).toBeInTheDocument()
      expect(screen.getByText(comment.body)).toBeInTheDocument()

      const dateActual = screen.getByText('1 January 2020')
      expect(dateActual).toBeInTheDocument()
      expect(dateActual.nodeName).toEqual('TIME')
      expect(dateActual).toHaveAttribute('datetime', comment.createdAt)
    }).not.toThrow()
  })
})
