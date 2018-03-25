var katzDeli = [];
function takeANumber(katzDeliLine, name){
  var line = katzDeliLine.length + 1
  var lineOrder = []
  for (var i = 0; i <= line; i++){
    var place = i+1
    lineOrder.push(name)
  }
  return ("Welcome, " +name + ". You are number " + place + " in line.")
}
