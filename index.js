function takeANumber(cLine,name) {
  cLine.push(name)
  return "Welcome, " + name + ". You are number " + cLine.length + " in line."
}


function nowServing(katzDeliLine, name) {
  while (katzDeliLine.length > 0) {
    name = katzDeliLine[0]
    return "Currently serving " + name + "."
    katzDeliLine.splice(0,1);
  }
  while (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

