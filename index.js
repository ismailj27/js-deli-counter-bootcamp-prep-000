function takeANumber(cLine,name) {
  cLine.push(name)
  return "Welcome, " + name + ". You are number " + cLine.length + " in line."
}

function nowServing(katzDeliLine) {
  while (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine[0] + "." 
    katzDeliLine.splice(0,1);
  }
  while (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}