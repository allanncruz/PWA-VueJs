<template>
    <section>
        <h1 class="m-5">verificação de primeiro plano</h1>

        <p>
            Contagem regressiva: {{counter}}
        </p>

        <p v-for="log in logs">
            A janela estava
            <span v-if="!log">Visivel</span>
            <span v-if="log">Oculto</span>
        </p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                logs: [],
                counter: 10
            }
        },
        methods:{
          visibility(){
              this.logs.push(document.hidden)
          },
            timer() {
              if (document.hidden) {
                  return;
              }

              if (this.counter >0) {
                  this.counter --;
              } else {
                  this.counter = 'done';
              }
            }
        },
        mounted() {
            document.addEventListener('visibilitychange', this.visibility)
            setInterval(() => this.timer(), 1000);
        }
    }
</script>