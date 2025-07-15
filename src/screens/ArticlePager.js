import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/Colors";

const ArticlePager = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.SVContainer}
      >
        <Text style={styles.headertext}>
          Tresses, tradition, Style et Praticité
        </Text>
        <View style={styles.info}>
          <View style={styles.nameinfo}>
            <Image source={require("../assets/img/articlepfp.png")} />
            <Text style={styles.name}>Par Marion L.</Text>
          </View>
          <View>
            <Text style={styles.date}>Publié le 02/07/2024</Text>
          </View>
        </View>
        <Text style={[styles.name, { paddingTop: 11 }]}>
          Les tresses sur cheveux crépus sont bien plus qu’une simple coiffure.
          Elles incarnent un héritage culturel riche, un symbole de beauté et de
          résilience, transmis de génération en génération. Depuis des siècles,
          les tresses ont été un moyen d’exprimer l’identité, le statut social
          et même les origines d'une personne dans de nombreuses cultures
          africaines. En plus de leur signification culturelle, les tresses sont
          une option idéale pour les cheveux crépus. Elles permettent de
          protéger la fibre capillaire contre les agressions extérieures comme
          le soleil, la pollution ou la casse due à la manipulation quotidienne.
          C'est une coiffure protectrice qui favorise la rétention de longueur
          et qui permet de limiter la sécheresse, fréquente sur les cheveux
          crépus. Les styles de tresses sont variés : box braids, cornrows
          (tresses collées), twists, et bien d’autres. Chacune de ces techniques
          offre une multitude de possibilités pour exprimer sa créativité et son
          style. Que l’on recherche un look sophistiqué pour une occasion
          spéciale ou une coiffure pratique pour le quotidien, les tresses
          s’adaptent à toutes les envies. En plus d’être esthétiques, les
          tresses offrent un véritable gain de temps. Une fois la coiffure
          réalisée, l’entretien est minimal. Quelques vaporisations d’huile ou
          de spray hydratant suffisent pour garder le cuir chevelu sain et les
          cheveux brillants. Elles peuvent ainsi durer plusieurs semaines tout
          en conservant leur allure, à condition de bien les protéger la nuit
          avec un foulard en soie ou en satin. En somme, les tresses sur cheveux
          crépus sont un moyen parfait de conjuguer style, protection et
          tradition. Elles témoignent de la richesse de la culture capillaire
          afro et offrent une solution pratique pour sublimer les cheveux
          naturels au quotidien. 4o
        </Text>
      </ScrollView>
    </View>
  );
};

export default ArticlePager;

const styles = StyleSheet.create({
  headertext: {
    fontSize: 18,
    fontWeight: "700",
    paddingBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
  },
  date: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.border,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  SVContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameinfo: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
});
