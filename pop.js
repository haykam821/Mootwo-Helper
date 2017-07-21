var servers = JSON.parse('{"Vanilla": {"Silicon Valley": ["45.63.92.197"], "London": ["45.76.139.158", "108.61.173.191", "45.76.142.135", "45.76.128.8", "45.32.182.227", "108.61.172.171", "45.76.142.42", "45.76.138.75", "45.76.130.13", "45.76.135.18", "45.76.139.223", "45.76.132.79", "45.32.183.22", "45.77.59.212", "104.238.174.199", "108.61.173.128", "104.238.174.163", "45.76.132.153", "45.76.133.132", "45.77.58.190", "108.61.175.195", "45.76.140.11", "45.77.59.72", "108.61.175.155", "45.76.141.118", "45.77.59.168", "45.76.132.116", "45.76.133.107", "45.63.100.199", "104.238.185.114"]},"FFA": {}}');

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

	re.value = 'info';
	se.value = 'info';
}

function updateServers() {
  clearServers();

  for (i in servers[ge.value][re.value]) {
  	var option = document.createElement("option");

		option.text = servers[ge.value][re.value][i];
  	option.value = servers[ge.value][re.value][i];

		se.add(option);
  }

	se.value = 'info';
}

function clearRegions() {
	var length = re.options.length;
	for (i = 0; i < length; i++) {
  	if (re.options[i].className.split(' ').indexOf('info')==-1) {
	  	re.options[i] = null;
    }
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
