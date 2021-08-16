export default {
  toNextItem(status,choosedItem){
    status.itemNum ++;
    status.answerId.push(choosedItem)
  }
}