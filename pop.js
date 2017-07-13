var servers = JSON.parse('{"Vanilla": {"Silicon Valley": ["45.63.92.197"]},"FFA": {}}');

var ge = document.getElementById("gamemodes");
var re = document.getElementById("regions");
var se = document.getElementById("servers");

for (i in Object.keys(servers)){
	var option = document.createElement("option");
	option.text = Object.keys(servers)[i];
  option.value = Object.keys(servers)[i];

	ge.add(option);
}

function updateRegions() {
  clearServers();

  for (i in servers[ge.value]) {
  	var option = document.createElement("option");
		option.text = i;
  	option.value = i;

		re.add(option);
  }
}

function updateServers() {
  clearServers();

  for (i in servers[ge.value][re.value]) {
  	var option = document.createElement("option");

		option.text = servers[ge.value][re.value][i];
  	option.value = servers[ge.value][re.value][i];

		se.add(option);
  }
}

function clearServers() {
	var length = se.options.length;
	for (i = 0; i < length; i++) {
  	if (se.options[i].className.split(' ').indexOf('info')==-1) {
	  	se.options[i] = null;
    }
	}
}

function setSelectedServer() {
	document.getElementById("result").innerHTML = se.value;

	chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
      chrome.tabs.update(tab.id, {url: `https://moomoo.io/?party=${se.value}`});
	});
}

ge.onchange = updateRegions;
re.onchange = updateServers;
se.onchange = setSelectedServer;
