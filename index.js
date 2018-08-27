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
  aString = "The line currently ";
  for (i = 0; line.length > 0; i++) {
    var name = line[0]
    aString = aString.concat(name);
    line.splice(0,1)
  }
  return aString
  while (line.length === 0) {
  return "The line is currently empty."
  }
}
