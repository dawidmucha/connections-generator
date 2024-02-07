<script setup>
import { ref } from 'vue'

const boardSize = ref(4)
const maxBoardSize = 6
// const boardItems = []
</script>

<template>
  <div>
    <form>
      <label for="boardSize">Size:</label>
      <input type="range" min="3" max="6" v-model="boardSize" id="boardSize" name="boardSize" />
      <span>{{ boardSize }}</span>

      <ol>
        <li v-for="(itemGroup, index) in maxBoardSize" :key="index" :style="{ listStyleType: 'none'}">
          <div v-show="(index + 1) <= boardSize">
            <h3>Group {{ index + 1 }}</h3>
            <div>
              <label for='index'>Group name:</label>
              <input type="text" id='index' name='index' />
            </div>
              <ol>
                <li v-for="(item, indexx) in maxBoardSize" :key="(index * 10) + indexx" :style="{ listStyleType: 'none'}">
                  <div v-show="(indexx + 1) <= boardSize">
                    <input type="text" />
                  </div>
                </li>
              </ol>
          </div>
        </li>
      </ol>

      <input type="submit" value="Share" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreationForm'
}
</script>
