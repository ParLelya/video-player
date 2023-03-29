var pc = null;

export default class Client {
  negotiate() {
    pc.addTransceiver("video", { direction: "recvonly" });
    pc.addTransceiver("audio", { direction: "recvonly" });

    return pc
      .createOffer()
      .then(function (offer) {
        return pc.setLocalDescription(offer);
      })
      .then(function () {
        // wait for ICE gathering to complete
        return new Promise(function (resolve) {
          if (pc.iceGatheringState === "complete") {
            resolve();
          } else {
            function checkState() {
              if (pc.iceGatheringState === "complete") {
                pc.removeEventListener("icegatheringstatechange", checkState);
                resolve();
              }
            }
            pc.addEventListener("icegatheringstatechange", checkState);
          }
        });
      })
      .then(function () {
        var offer = pc.localDescription;

        if (
          document.getElementById("1") &&
          document.getElementById("subtitles").checked
        ) {
          return fetch("https://hack-solution.tech/offer", {
            body: JSON.stringify({
              sdp: offer.sdp,
              type: offer.type,
              video_id: 1,
              video_type: "subtitle",
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
        }
        if (document.getElementById("1")) {
          return fetch("https://hack-solution.tech/offer", {
            body: JSON.stringify({
              sdp: offer.sdp,
              type: offer.type,
              video_id: 1,
              video_type: "common",
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
        }

        if (
          document.getElementById("2") &&
          document.getElementById("epilepsy").checked
        ) {
          return fetch("https://hack-solution.tech/offer", {
            body: JSON.stringify({
              sdp: offer.sdp,
              type: offer.type,
              video_id: 2,
              video_type: "epilepsy",
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
        }
        if (document.getElementById("2")) {
          return fetch("https://hack-solution.tech/offer", {
            body: JSON.stringify({
              sdp: offer.sdp,
              type: offer.type,
              video_id: 2,
              video_type: "common",
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
        }
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (answer) {
        return pc.setRemoteDescription(answer);
      })
      .catch(function (e) {
        alert(e);
      });
  }

  test() {
    const contrast = document.getElementById("contrast").value
      ? document.getElementById("contrast").value
      : 1;
    const brightness = document.getElementById("brightness").value
      ? document.getElementById("brightness").value
      : 0;
    const saturation = document.getElementById("saturation").value
      ? document.getElementById("saturation").value
      : 0;

    fetch("https://hack-solution.tech/settings", {
      body: JSON.stringify({
        brightness: parseInt(brightness),
        contrast: parseInt(contrast),
        saturation: parseInt(saturation),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((r) => console.log(r.status));
  }

  start() {
    var config = {
      sdpSemantics: "unified-plan",
    };

    if (
      window.navigator.userAgent.includes("Firefox") ||
      document.getElementById("use-stun").checked
    ) {
      config.iceServers = [{ urls: ["stun:stun.l.google.com:19302"] }];
    }

    pc = new RTCPeerConnection(config);

    // connect audio / video
    pc.addEventListener("track", function (evt) {
      if (evt.track.kind === "video") {
        document.getElementById("video").srcObject = evt.streams[0];
      }
      //   else {
      //     document.getElementById("audio").srcObject = evt.streams[0];
      //   }
    });

    document.getElementById("start").style.display = "none";
    this.negotiate();
    document.getElementById("stop").style.display = "inline-block";
  }

  stop() {
    document.getElementById("stop").style.display = "none";
    document.getElementById("start").style.display = "inline-block";
    // close peer connection
    setTimeout(() => {
      pc.close();
    }, 500);
  }
}
