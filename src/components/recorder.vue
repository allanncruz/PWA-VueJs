<template>
    <section>
        <h1 class="m-5">Gravando Vídeo e Áudio</h1>

        <b-container>
            <b-row align-v="center">
                <b-col col md="6">
                    <video src="" controls autoplay></video>
                    <a href="" @click.prevent="startRecorder">Iniciar</a>
                </b-col>
                <b-col col md="6">
                    <a href="" @click.prevent="getDownload">Download</a>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            stream: null,
            chuncks: []
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
                audio: true
            }
            let element = document.querySelector('video')
            this.getUserMedia(config, element)
        },
        startRecorder() {
            this.recorder = new MediaRecorder(this.stream, {mimeType: "video/webm"})
            this.recorder.ondataavailable = (event) => {
                this.chuncks.push(event.data);
            }

            this.recorder.onstop = () => {
                let blob  = new Blob(this.chuncks, {type: "video/webm"})

                this.chuncks = [];

                let a = document.createElement('a');
                document.body.appendChild(a);
                a.style = "display: none";
                a.href = window.URL.createObjectURL(blob);
                a.download = 'teste.webm'
                a.click();

            }

            this.recorder.start();
        },
        getDownload() {
            this.recorder.stop();
        }
    },
    mounted() {
        this.getVideo()
    }
}
</script>