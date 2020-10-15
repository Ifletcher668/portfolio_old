type Author = {
    username: string
}

const mapAuthors = (authors: Author[], maxNumberOfAuthorsListed = false) => {
    let numberOfAuthors = authors.length
    if (numberOfAuthors === 0) return 'anonymous'
    if (maxNumberOfAuthorsListed) {
        const maxAuthorCount = 3
        const slimmedAuthorList = authors.slice(0, maxAuthorCount)

        return slimmedAuthorList
            .map((author, idx) => {
                const lastAuthor = slimmedAuthorList.length - 1

                if (idx === lastAuthor) return ` and others `
                else return `${author.username}, `
            })
            .join('')
    } else {
        return authors
            .map((author, idx) => {
                const lastAuthor = numberOfAuthors - 1

                // no comma between values
                if (numberOfAuthors === 2 && idx === lastAuthor)
                    return ` and ${author.username}`
                else if (numberOfAuthors === 2) return author.username

                // comma between all values
                if (idx === lastAuthor) return ` and ${author.username}`
                else return `${author.username}, `
            })
            .join('')
    }
}

export default mapAuthors
