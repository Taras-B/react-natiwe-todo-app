import React, { useState, useContext } from 'react'

import { StyleSheet, View, Alert } from 'react-native'

import { Navbar } from './components/Navbar'
import MainScreen from './screens/MainScreen'
import TodoScreen from './screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {
  //   const [todos, setTodos] = useState([])
  // const [todoId, setTodoId] = useState(null)

  const { todoId, changeScreen } = useContext(ScreenContext)

  const { todos, addTodo, updateTodo, removeTodo } = useContext(TodoContext)

  //   const removeTodo = (id) => {
  //     const todo = todos.find((todo) => todo.id === id)
  //     Alert.alert(
  //       'Видалення',
  //       `Ви справді хочете видалити "${todo.title}"`,
  //       [
  //         {
  //           text: 'Ні',
  //           style: 'cancel',
  //         },
  //         {
  //           text: 'Так',
  //           onPress: () => {
  //             setTodoId(null)
  //             setTodos((prev) => prev.filter((todo) => todo.id !== id))
  //           },
  //         },
  //       ],
  //       { cancelable: false }
  //     )
  //   }

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={changeScreen}
    />
  )

  if (todoId) {
    const selectTodo = todos.find((todo) => todo.id === todoId)
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => changeScreen(null)}
        todo={selectTodo}
        updateTodo={updateTodo}
      />
    )
  }

  return (
    <View>
      <Navbar />
      <View style={styles.container}>{content}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
})