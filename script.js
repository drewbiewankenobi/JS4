var vicFirstName=[]
var vicLastName=[]
var vicStreet=[]
var volFirstName = []
var volLastName = []
var volStreet = []
var victimCounter = prompt("How many disaster victims would you like to enter?")
for (i=1; i <= victimCounter; i++) {
	var vFirst = prompt("Enter the victim's first name.")
	vicFirstName.push(vFirst)
	var vLast = prompt("Enter the victim's last name.")
	vicLastName.push(vLast)
	var vStreet = prompt("Enter the victim's street address.")
	vicStreet.push(vStreet) 
}
var volunteerCounter = prompt("How many disaster volunteers are available?")
for (i=1; i <= volunteerCounter; i++) {
	var voFirst = prompt("Enter the volunteer's first name.")
	volFirstName.push(voFirst)
	var voLast = prompt("Enter the volunteer's last name.")
	volLastName.push(voLast)
	var voStreet = prompt("Enter the volunteer's street address.")
	volStreet.push(voStreet) 
}

var vicNameDisplay = []
for (i=0; i < victimCounter; i++) {
	var namer = vicFirstName[i] + " " + vicLastName [i] + "\n"
	vicNameDisplay.push(namer)
}
var volNameDisplay = []
for (i=0; i < volunteerCounter; i++) {
	var vNamer = volFirstName[i] + " " + volLastName [i] + "\n"
	volNameDisplay.push(vNamer)
}

alert("There are " + victimCounter + " people in need:" + "\n" +
		 vicNameDisplay.join("") + "\n" +
		"There are " + volunteerCounter + " volunteers avaible." + "\n" +
		volNameDisplay.join(""))