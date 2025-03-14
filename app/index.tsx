import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React from 'react'

const index = () => {
  
  return (
    <View className="p-6 bg-white rounded-lg mt-20">
    <Text className="text-xl font-bold mb-4">Registro de Producto</Text>
    
    <View className="mb-4">
      <Text className="text-sm font-medium">Código de Producto</Text>
      <TextInput maxLength={10} className="w-full p-2 border rounded" placeholder="Codigo"/>
    </View>

    <View className="mb-4">
      <Text className="text-sm font-medium">Nombre del Producto</Text>
      <TextInput className="w-full p-2 border rounded" placeholder="Nombre"/>
    </View>

    <View className="mb-4">
      <Text className="text-sm font-medium">Categoría</Text>
      <TextInput className="w-full p-2 border rounded" placeholder="Categoria"/>
    </View>

    <View className="mb-4">
      <Text className="text-sm font-medium">Cantidad</Text>
      <TextInput keyboardType="numeric" className="w-full p-2 border rounded" placeholder="Cantidad"/>
    </View>

    <View className="mb-4">
      <Text className="text-sm font-medium">Precio Unitario</Text>
      <TextInput keyboardType="decimal-pad" className="w-full p-2 border rounded" placeholder="precio unitario"/>
    </View>

    <View className="mb-4">
      <Text className="text-sm font-medium">Fecha de Ingreso</Text>
      <TextInput placeholder="YYYY-MM-DD" className="w-full p-2 border rounded" />
    </View>

    <TouchableOpacity className="bg-blue-500 p-2 rounded" >
      <Text className="text-white text-center">Registrar</Text>
    </TouchableOpacity>
  </View>
  )
}

export default index 
