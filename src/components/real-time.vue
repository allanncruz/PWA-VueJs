<template>
    <section>
        <h1 class="m-5">Conversa</h1>

        <b-container>
            <b-row align-v="center">
                <b-col md="6">
                    <h3>Local</h3>
                    <video class="local w-100" src="" controls autoplay></video>
                </b-col>
                <b-col md="6">
                    <h3>Remoto</h3>
                    <video class="remote w-100" src="" controls autoplay></video>
                </b-col>
            </b-row>
        </b-container>

        <a href="" @click.prevent="connection()">Conectar</a>
    </section>
</template>

<script>
export default {
    data() {
        return {
            stream: null,
            streamRemote: null,
            local: null,
            remote: null,
        }
    },
    methods: {
        getUserMedia(config, element) {
            let successCallback = (stream) => {
                this.stream = stream
                element.src = window.URL.createObjectURL(stream);
            }
            let errorCallback = () => {
                console.log(err)
            }
            navigator.getUserMedia(config, successCallback, errorCallback)
        },
        getVideo() {
            let config = {
                video: true,
                audio: false
            }
            let element = document.querySelector('video')
            this.getUserMedia(config, element)
        },
        connection() {
            this.local = new RTCPeerConnection();
            this.remote = new RTCPeerConnection();

            this.local.addStream(this.stream);
            this.local.onicecandidate = (event) => {
                if (event.candidate == null) return false;
                this.remote.addIceCandidate(new RTCIceCandidate(event.candidate))
            }

            this.remote.onaddstream = (event) => {
                if (!event.stream) return;
                let element = document.querySelector('video.remote')
                element.src = window.URL.createObjectURL(event.stream);
            }

            this.remote.onicecandidate = (event) => {
                if (event.candidate == null) return false;
                this.local.addIceCandidate(new RTCIceCandidate(event.candidate))
            }

            this.local.createOffer({offerToReceiveVideo: 1})
                .then((desc) => {
                    this.local.setLocalDescription(desc);
                    this.remote.setRemoteDescription(desc);
                    return this.remote.createAnswer({offerToReceiveVideo: 1})
                })
                .then((desc) => {
                    this.local.setRemoteDescription(desc);
                    this.remote.setLocalDescription(desc);
                })
        }
    },
    mounted() {
        this.getVideo();
    }
}
</script>