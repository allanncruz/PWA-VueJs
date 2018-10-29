<template>
    <section>
        <h1 class="m-5">Tirando Foto</h1>

        <b-container>
            <b-row align-v="center">
                <b-col col md="6">
                    <video src="" controls autoplay></video>
                    <a href="" @click.prevent="getVideo">Iniciar</a>
                </b-col>
                <b-col col md="6">
                    <img class="photo">
                    <a href="" @click.prevent="getPhoto">Tirar Foto</a>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    date() {
      return {
          stream: null
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
        getPhoto() {
            let photo = new ImageCapture(this.stream.getTracks()[0])
            photo.takePhoto()
                .then((blob) => {
                    let element = document.querySelector('img.photo')
                    element.src = window.URL.createObjectURL(blob)

//                    let form = new FormData();
//                    form.append('image',blob);
//                    form.append('id', 1);
//                    form.append('title','Foto do perfil');
                })
        }
    }
}
</script>