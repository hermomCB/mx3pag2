import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import  styles from"./estilos";

export default function Home() {
  // Array de itens do cardápio
  const itens = [
    {
      id: 1,
      nome: "Clássico Suculento",
      preco: 10.0,
      imagem: "https://example.com/item1.jpg",
      descricao: "Hambúrguer artesanal 100% bovino, queijo derretido, alface fresca, tomate, cebola caramelizada e molho especial no pão brioche macio.",
    },
    {
      id: 2,
      nome: "Item 2",
      preco: 20.0,
      imagem: "https://example.com/item2.jpg",
      descricao: "Descrição não disponível.",
    },
    {
      id: 3,
      nome: "Item 3",
      preco: 30.0,
      imagem: "https://example.com/item3.jpg",
      descricao: "Descrição não disponível.",
    },
    {
      id: 4,
      nome: "Item 4",
      preco: 40.0,
      imagem: "https://example.com/item4.jpg",
      descricao: "Descrição não disponível.",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio</Text>
      <ScrollView contentContainerStyle={styles.cardapioContainer}>
        {itens.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
              <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

