
//test for opentripmap location API
function testAPI() {
    fetch('https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=place:51d9301bcd0f9a5dc05918c8f31a750b4140f00101f901ff29030000000000c0020692030b4c6f7320416e67656c6573&limit=20&apiKey=5105f0bb5b7c4e97bceb5e70a9de8ceb')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}

testAPI()
