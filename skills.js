/**
 * 任意转数组
 */
let toArr = any => [...any]

/**
 * 字符串转数组
 */
let strToArr = str => str.split('')

/**
 * 字符串排重
 */
let uniqueStr = str => [...new Set(str)].join('')
