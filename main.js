const id = "UCu-ZGcdJPsH-6v42LrEeaIw";
const apiKey = "AIzaSyDiyZG5pKGXpvB14GCO5DqEQhfNh7xA3cQ";
const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${apiKey}`;

function getYoutubeSubs() {
  fetch(url)
    .then(res => res.json())
    .then(res => {
      let data1 = res.items[0].statistics.subscriberCount;

      let data2 = res.items[0].statistics.viewCount;
      console.log(data1);

      console.log(data2);
      document.querySelector("#sub-count").innerHTML = data1;
      document.querySelector("#view-count").innerHTML = data2;
    });
}

getYoutubeSubs();
