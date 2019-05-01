export const formattedDate = date => (
    `${(date.getDate() < 9 ? '0' : '') + date.getDate()}/${(date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1)}/${date.getFullYear()}`
)