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
  var aString = "The line currently "
  var i;
  for (i = line.length, i > 0, i--) {
    aString.concat(line[i]);
  }
  return aString
  while (line.length === 0) {
  return "The line is currently empty."
  }
}
