<template>
  <div id="app">
    <table class="calculator">
      <tr>
        <td colspan="3">
          <input class="display-box" type="text" v-model="result" disabled />
        </td>
        <td>
          <input type="button" value="C" @click="clearResult" />
        </td>
      </tr>
      <tr>
        <td v-for="number in numbers.slice(0, 3)" :key="number">
          <input type="button" :value="number" @click="appendToResult(number)" />
        </td>
        <td>
          <input type="button" value="/" @click="appendToResult('/')" />
        </td>
      </tr>
      <tr>
        <td v-for="number in numbers.slice(3, 6)" :key="number">
          <input type="button" :value="number" @click="appendToResult(number)" />
        </td>
        <td>
          <input type="button" value="-" @click="appendToResult('-')" />
        </td>
      </tr>
      <tr>
        <td v-for="number in numbers.slice(6, 9)" :key="number">
          <input type="button" :value="number" @click="appendToResult(number)" />
        </td>
        <td>
          <input type="button" value="+" @click="appendToResult('+')" />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="." @click="appendToResult('.')" />
        </td>
        <td>
          <input type="button" value="0" @click="appendToResult('0')" />
        </td>
        <td>
          <input type="button" value="=" @click="calculateResult" />
        </td>
        <td>
          <input type="button" value="*" @click="appendToResult('*')" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['result'])
  },
  data() {
    return {
      numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    }
  },
  methods: {
    ...mapActions(['appendToResult', 'clearResult', 'calculateResult'])
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");

.calculator {
    padding: 10px;
    border-radius: 1em;
    height: 380px;
    width: 400px;
    margin: auto;
    background-color: #191b28;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.display-box {
    font-family: "Orbitron", sans-serif;
    background-color: #dcdbe1;
    border: solid black 0.5px;
    color: black;
    border-radius: 5px;
    width: 100%;
    height: 65%;
}

#btn {
    background-color: #fb0066;
}

input[type="button"] {
    font-family: "Orbitron", sans-serif;
    background-color: #64278f;
    color: white;
    border: solid black 0.5px;
    width: 100%;
    border-radius: 5px;
    height: 70%;
    outline: none;
}

input:active[type="button"] {
    background: #e5e5e5;
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
    -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
    box-shadow: inset 0px 0px 5px #c1c1c1;
}
</style>
