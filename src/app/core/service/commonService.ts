import numeral from 'numeral'

/**
 * @description modify the display of number
 * @param state number
*/

export const prettyPrintStat = (stat: number, withPlus: boolean) => {
  if (withPlus) {
    return stat ? `+ ${numeral(stat).format("0.0a")}` : "+ 0"
  } else {
    return stat ? `${numeral(stat).format("0.0a")}` : "0"
  }
  
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  prettyPrintStat
}