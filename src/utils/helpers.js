export const formatPrice = (number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100)
}
// 323 - Filters - Unique Values
// read up Unique Values & Dynamic Object Keys
// https://www.youtube.com/playlist?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}