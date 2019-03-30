<template lang="pug">
  .chat-component.flex.column
    .field.flex.column
      .message(v-for="(message, i) in chat"
               :key="`message-${i}`"
               :class="message.type") {{ message.data }}
      .message.answer.load(v-if="isLoad")
        span Загрузка
        span .
        span .
        span .
    form.form.flex(@submit.prevent="send()")
      .error.req(v-if="isError") Ошибка сервера
      .error.empty(v-if="isEmpty") Сообщение не должно быть пустым!
      input.input(v-model="q" @focus="reset()" type="text" placeholder="Введите сообщение" autofocus)
      button.button отправить
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'chat-component',
  data () {
    return {
      q: '',
      isLoad: false,
      isEmpty: false,
      isError: false
    }
  },
  computed: {
    ...mapState({
      chat: state => state.chat
    })
  },
  methods: {
    send () {
      if (this.q) {
        this.isEmpty = false
        this.setQuestion(this.q)
        this.getAnswer(this.q)
        this.q = ''
      } else {
        this.isEmpty = true
      }
    },
    setQuestion (q) {
      this.$store.commit('SET_CHAT', {
        type: 'question',
        data: q
      })
    },
    getAnswer (q) {
      this.isLoad = true
      this.$store.dispatch('getAnswer', q).then(() => {
        this.isLoad = false
      }).catch(() => {
        this.isLoad = false
        this.isError = true
      })
    },
    reset () {
      this.isError = false
      this.isEmpty = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat-component {
    width: 100%;
    max-width: 320px;
    height: 480px;
    box-shadow: 0 0 $spacing-default / 2 rgba($color-dark, 0.25);
    background-color: $color-light;
    .field {
      padding: $spacing-default $spacing-default / 2;
      overflow-y: auto;
      .message {
        padding: $spacing-default / 2;
        margin-bottom: $spacing-default / 2;
        border-radius: $spacing-default / 5;
        color: $color-light;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border-top: $spacing-default / 2 solid transparent;
          border-bottom: $spacing-default / 2 solid transparent;
        }
        &.answer {
          margin-right: auto;
          background-color: $color-secondary;
          &:before {
            right: 100%;
            border-right: $spacing-default / 2 solid $color-secondary;
          }
        }
        &.question {
          margin-left: auto;
          background-color: $color-primary;
          &:before {
            left: 100%;
            border-left: $spacing-default / 2 solid $color-primary;
          }
        }
        &.load {
          span:nth-child(2) {
            animation: loading 0.6s infinite;
          }
          span:nth-child(3) {
            animation: loading 0.6s infinite 0.3s;
          }
          span:nth-child(4) {
            animation: loading 0.6s infinite 0.45s;
          }
        }
      }
    }
    .form {
      margin-top: auto;
      border-top: 1px solid rgba($color-dark, 0.25);
      position: relative;
      .error {
        position: absolute;
        background-color: $color-danger;
        color: $color-light;
        padding: $spacing-default / 4;
        border-radius: $spacing-default / 5;
        left: $spacing-default  / 2;
        bottom: 100%;
        margin-bottom: $spacing-default / 1.5;
        &:before {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-left: $spacing-default / 2 solid transparent;
          border-right: $spacing-default / 2 solid transparent;
          border-top: $spacing-default / 2 solid $color-danger;
        }
      }
      .input, .button {
        padding: $spacing-default / 2;
        border: none;
      }
      .input {
        flex: 1;
        width: 100%;
        &:focus {
          outline: none;
          box-shadow: inset 0 0 $spacing-default / 5 rgba($color-dark, 0.25);
        }
      }
      .button {
        background-color: $color-primary;
        color: $color-light;
        cursor: pointer;
        &:hover {
          background-color: darken($color-primary, 15);
        }
      }
    }
  }
</style>
