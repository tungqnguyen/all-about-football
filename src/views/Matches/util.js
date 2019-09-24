const util = {
  extractRoundNumber(roundId) {
    const subString = roundId.split(" ")
    return subString[subString.length - 1];
  }
}
export default util;