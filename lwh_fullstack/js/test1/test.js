/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
  let s = []
  for(let i = 0,len = chars.length;i < len;i++) {
      let cnt = 1,now = chars[i]
      while(i + 1 < len && chars[i + 1] === now) {
          cnt++;
          i++;
      }
      s.push(now)
      s.push(''+cnt)
  }
  chars = s
  // console.log(chars);
  return s.length
};
