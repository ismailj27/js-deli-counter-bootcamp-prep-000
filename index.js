function takeANumber(cLine,name) {
  cLine.push(name)
  return "Welcome, " + name + ". You are number " + cLine.length + " in line."
}


function nowServing(katzDeliLine, name) {
  while (katzDeliLine.length > 0) {
    name = katzDeliLine[0]
    katzDeliLine.splice(0,1);
    return "Currently serving " + name + "."
  }
    return "There is nobody waiting to be served!"
}

function currentLine(line) {
  while (line.length > 0) {
    return "The line is currently:" + "1. " + line[0] +"2." + line[1]
  }
  return "The line is currently empty."
}
