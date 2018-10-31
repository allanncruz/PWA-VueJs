<template>
    <section>
        <h1 class="m-5">Áudio e Vídeo</h1>

        <b-container>
            <b-row align-v="center">
                <b-col col md="6">
                    <video class="w-100" src="" controls autoplay></video>
                    <a href="" @click.prevent="getVideo">Iniciar</a>
                </b-col>
                <b-col col md="6">
                    <audio src="" controls autoplay></audio>
                    <a href="" @click.prevent="getAudio">Iniciar</a>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    methods: {
        getUserMedia(config, element) {
            let successCallback = (stream) => {
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
        getAudio() {
            let config = {
                video: false,
                audio: true
            }
            let element = document.querySelector('audio')
            this.getUserMedia(config, element)
        }
    }
}
</script>