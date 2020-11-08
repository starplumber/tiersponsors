var url;
const file = chrome.runtime.getURL('tiersponsors.json');
fetch(file)
  .then(response => response.json())
  .then((sponsors) => {
    const first = sponsors[0];
    const rawUrl = first.URL;
    url = rawUrl.replace("\\", "");
  });

  // this is a change that I have just made whilst learning about git

  var chord
  