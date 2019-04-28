export const articles = [
    { 
        id: '5678',
        title: 'SPA moderno sem frameworks',
        author: 'Fulano Sobrenome',
        tags: [ 'second', 'tutorial' ],
        publicationDate: new Date(),
        summary: 'Como criar um SPA moderno utilizando apenas Javascript Vanilla',
        body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `
    },
    { 
        id: '1234',
        title: 'Olá mundo!',
        author: 'Fulano Sobrenome',
        tags: [ 'first' ],
        publicationDate: new Date(),
        summary: 'Primeiro artigo publicado, dando as boas vinda a esta página',
        body: 
`Medium Editor
-------------

You know, the **Medium Editor** library is awesome. Just great. But there is a missing feature that some people would like to have.

It's called _Markdown_. [@IonicaBizau](https://github.com/IonicaBizau) created a Medium Editor extension that adds this missing feature.

> Walking on water and developing software from a specification are easy if both are frozen. _Edward Berard_

Let's test up the elements.

> First Computer Bug
> ------------------
>
> In 1947, Grace Murray Hopper was working on the Harvard University Mark II Aiken Relay Calculator (a primitive computer).
>
> On the 9th of September, 1947, when the machine was experiencing problems, an investigation showed that there was a moth trapped between the points of Relay #70, in Panel F.
>
> The operators removed the moth and affixed it to the log. The entry reads: "First actual case of bug being found."
>
> _[Read the whole story »](http://www.jamesshuggins.com/h/tek1/first_computer_bug.htm)_

Heading 1
=========

Heading 2
---------

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

*   I am
*   a list
*   with 3 items

1.  I am
2.  a numbered list
3.  with 3 items
`
    }
]

export const getArticle = (id) => articles.find(article => article.id == id);