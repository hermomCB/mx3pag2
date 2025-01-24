import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

export default function Home() {
  // Array de itens do cardápio
  const itens = [
    { id: 1, nome: "Item 1", preco: 10.00, imagem: "https://example.com/item1.jpg" },
    { id: 2, nome: "Item 2", preco: 20.00, imagem: "https://example.com/item2.jpg" },
    { id: 3, nome: "Item 3", preco: 30.00, imagem: "https://example.com/item3.jpg" },
    // Adicione mais itens conforme necessário
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio</Text>
      <ScrollView contentContainerStyle={styles.cardapioContainer}>
        {itens.map((item) => (
          <View key={item.id} style={styles.card}>
            {/* Exibindo a imagem do item */}
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  cardapioContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  card: {
    width: "30%", // Tamanho do quadrado (30% da largura da tela)
    aspectRatio: 1, // Garantir que o card seja quadrado
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5, // Sombra no Android
    shadowColor: "#000", // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  imagem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  preco: {
    fontSize: 16,
    color: "#888",
  },
});
