const TO_NEXT_ITEM = 'TO_NEXT_ITEM'
const REMEMBER_ANSWER = 'REMEMBER_ANSWER'

export default {
  [TO_NEXT_ITEM](status,choosedItem){
    status.answerId.push(choosedItem)
    if(status.itemNum < status.itemDetail.length)
      status.itemNum ++;

  }
}