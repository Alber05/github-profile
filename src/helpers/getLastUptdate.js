export const getLastUpdated = (date) => {
    const updatedDate = new Date(date)
    const currentDate = new Date()

    const differenceInMilliseconds = currentDate - updatedDate

    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24)

    const pastDays = Math.floor(differenceInDays)

    return pastDays
}
