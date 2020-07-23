import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { AppTextBold } from '../components/ui/AppTextBold'
import { AppButton } from '../components/ui/AppButton'
// import { Todo } from '../components/Todo'

const TodoScreen = ({ goBack, todo, onRemove, updateTodo }) => {
  const [isModal, setIsModal] = useState(false)

  const updateHandler = (title) => {
    updateTodo(todo.id, title)
    setIsModal(false)
  }

  return (
    <View>
      <EditModal
        onSave={updateHandler}
        value={todo.title}
        isVisible={isModal}
        onCancel={() => setIsModal(false)}
      />
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setIsModal(true)}>
          <AntDesign name='edit' size={20} color='#fff' />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={goBack}>
            <AntDesign name='back' size={20} color='#fff' />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton onPress={() => onRemove(todo.id)} color={THEME.DANGER_COLOR}>
            <AntDesign name='delete' size={20} color='#fff' />
          </AppButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
})

export default TodoScreen
