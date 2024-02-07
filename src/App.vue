<script setup>
import { collection, getDocs } from 'firebase/firestore/lite';
import db from './firebase/firebase'
</script>

<template>
  <CreationForm />
</template>

<script>
import CreationForm from './components/CreationForm.vue'

console.log('hellow')
const test = async (db) => {
  const testCol = collection(db, 'test')
  const testSnapshot = await getDocs(testCol)
  const testList = testSnapshot.docs.map(doc => doc.data())
  console.log(testList)
}

test(db)

export default {
  name: 'App',
  components: {
    CreationForm
  }
}
</script>