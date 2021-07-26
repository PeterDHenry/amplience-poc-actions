import fetch from 'isomorphic-unfetch'
import { NextPageContext } from 'next'

export function fetchContent<T = any>(
  key: string,
  context?: NextPageContext
): Promise<T> {
  return fetch(
    `https://sandbox-dev.cdn.content.amplience.net/content/key/${key}?depth=all&format=inlined`
  )
    .then((resp) => resp.json())
    .then((body) => body.content)
}
// should be set up in env variable for dev and live??
export function fetchContentById<T = any>(
  id: string,
  context?: NextPageContext
): Promise<T> {
  return fetch(
    `https://sandbox-dev.cdn.content.amplience.net/content/id/${id}?depth=all&format=inlined`
  )
    .then((resp) => resp.json())
    .then((body) => body.content)
}
