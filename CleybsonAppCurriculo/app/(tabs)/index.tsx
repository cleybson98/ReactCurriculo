import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialCommunityIcons, Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";

export default function Index() {
  const handleCall = () => {
    Linking.openURL("tel:+5581983332730");
  };

  const handleEmail = () => {
    Linking.openURL("mailto:cleybsond2@gmail.com");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#00695c" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Header Moderno com Gradiente */}
        <View style={styles.headerGradient}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={60} color="#00695c" />
          </View>
          <Text style={styles.mainName}>CLEYBSON TEIXEIRA</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={16} color="#80cbc4" />
            <Text style={styles.locationText}>Recife - PE</Text>
          </View>
          
          {/* Botões de Contato */}
          <View style={styles.contactButtons}>
            <TouchableOpacity style={styles.contactBtn} onPress={handleCall}>
              <Ionicons name="call" size={18} color="#ffffff" />
              <Text style={styles.contactBtnText}>Ligar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactBtn} onPress={handleEmail}>
              <Ionicons name="mail" size={18} color="#ffffff" />
              <Text style={styles.contactBtnText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Objetivo Profissional */}
        <View style={styles.objectiveCard}>
          <View style={styles.iconTitleRow}>
            <MaterialCommunityIcons name="target" size={24} color="#00695c" />
            <Text style={styles.objectiveTitle}>Objetivo Profissional</Text>
          </View>
          <Text style={styles.objectiveText}>
            Busco atuar como Desenvolvedor Full Stack, aplicando meus conhecimentos em front-end e back-end para criar soluções eficientes, seguras e orientadas à experiência do usuário. Tenho foco em aprender continuamente novas tecnologias, colaborar com equipes multidisciplinares e contribuir para a evolução de produtos digitais. Procuro oportunidades onde eu possa desenvolver aplicações completas, desde a interface até a integração com serviços e bancos de dados, garantindo boa performance, escalabilidade e organização do código.
          </Text>
        </View>

        {/* Formação Acadêmica */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <FontAwesome5 name="graduation-cap" size={22} color="#00695c" />
            <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          </View>
          
          <View style={styles.educationCard}>
            <View style={styles.educationHeader}>
              <View style={styles.periodBadge}>
                <Text style={styles.periodText}>3º Período</Text>
              </View>
              <Text style={styles.educationStatus}>Cursando</Text>
            </View>
            <Text style={styles.courseTitle}>Análise e Desenvolvimento de Sistemas</Text>
            <Text style={styles.institutionName}>Faculdade SENAC/PE</Text>
            <View style={styles.dateRow}>
              <Feather name="calendar" size={14} color="#666" />
              <Text style={styles.dateText}>Conclusão prevista: Dezembro 2026</Text>
            </View>
          </View>
        </View>

        {/* Experiência */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <MaterialCommunityIcons name="briefcase" size={22} color="#00695c" />
            <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          </View>
          
          <View style={styles.experienceCard}>
            <View style={styles.experienceHeader}>
              <Text style={styles.experienceTitle}>Atividades Informais e Autônomas</Text>
              <View style={styles.yearBadge}>
                <Text style={styles.yearText}>2023 - Atual</Text>
              </View>
            </View>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>Apoio em estoque, reposição e organização de produtos</Text>
              </View>
              <View style={styles.bulletItem}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>Atendimento ao público com empatia e atenção</Text>
              </View>
              <View style={styles.bulletItem}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>Abertura e fechamento de pontos comerciais</Text>
              </View>
              <View style={styles.bulletItem}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>Responsabilidade e pontualidade nas atividades</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Cursos Complementares */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <MaterialCommunityIcons name="certificate" size={22} color="#00695c" />
            <Text style={styles.sectionTitle}>Cursos Complementares</Text>
          </View>
          
          <View style={styles.coursesGrid}>
            <View style={styles.courseChip}>
              <MaterialCommunityIcons name="laptop" size={18} color="#00695c" />
              <Text style={styles.courseChipText}>Informática Básica</Text>
            </View>
            <View style={styles.courseChip}>
              <MaterialCommunityIcons name="microsoft-office" size={18} color="#00695c" />
              <Text style={styles.courseChipText}>Pacote Office</Text>
            </View>
            <View style={styles.courseChip}>
              <MaterialCommunityIcons name="account-group" size={18} color="#00695c" />
              <Text style={styles.courseChipText}>Atendimento ao Cliente</Text>
            </View>
            <View style={styles.courseChip}>
              <MaterialCommunityIcons name="account-multiple" size={18} color="#00695c" />
              <Text style={styles.courseChipText}>Trabalho em Equipe</Text>
            </View>
          </View>
        </View>

        {/* Habilidades */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <MaterialCommunityIcons name="star-circle" size={22} color="#00695c" />
            <Text style={styles.sectionTitle}>Habilidades e Competências</Text>
          </View>
          
          <View style={styles.skillsContainer}>
            <View style={styles.skillCard}>
              <Ionicons name="chatbubbles" size={28} color="#00695c" />
              <Text style={styles.skillTitle}>Comunicação</Text>
              <Text style={styles.skillDesc}>Boa comunicação e simpatia no atendimento</Text>
            </View>
            <View style={styles.skillCard}>
              <MaterialCommunityIcons name="lightbulb-on" size={28} color="#00695c" />
              <Text style={styles.skillTitle}>Aprendizado</Text>
              <Text style={styles.skillDesc}>Facilidade em aprender novas tarefas</Text>
            </View>
            <View style={styles.skillCard}>
              <Ionicons name="time" size={28} color="#00695c" />
              <Text style={styles.skillTitle}>Pontualidade</Text>
              <Text style={styles.skillDesc}>Comprometimento e pontualidade</Text>
            </View>
            <View style={styles.skillCard}>
              <MaterialCommunityIcons name="puzzle" size={28} color="#00695c" />
              <Text style={styles.skillTitle}>Organização</Text>
              <Text style={styles.skillDesc}>Atenção aos detalhes</Text>
            </View>
            <View style={styles.skillCard}>
              <Ionicons name="people" size={28} color="#00695c" />
              <Text style={styles.skillTitle}>Equipe</Text>
              <Text style={styles.skillDesc}>Trabalho em equipe e disposição</Text>
            </View>
            <View style={styles.skillCard}>
              <MaterialCommunityIcons name="trending-up" size={28} color="#00695c" />
              <Text style={styles.skillTitle}>Crescimento</Text>
              <Text style={styles.skillDesc}>Interesse em crescimento profissional</Text>
            </View>
          </View>
        </View>

        {/* Informações Adicionais */}
        <View style={styles.additionalInfo}>
          <Text style={styles.additionalTitle}>Informações Adicionais</Text>
          <View style={styles.infoRow}>
            <Ionicons name="checkmark-circle" size={18} color="#00695c" />
            <Text style={styles.infoText}>Disponibilidade para início imediato</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="checkmark-circle" size={18} color="#00695c" />
            <Text style={styles.infoText}>Fácil adaptação a novas funções e ambientes</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="checkmark-circle" size={18} color="#00695c" />
            <Text style={styles.infoText}>Interesse em crescimento profissional</Text>
          </View>
        </View>

        {/* Footer com Contato */}
        <View style={styles.footerContact}>
          <View style={styles.contactItem}>
            <Ionicons name="call" size={16} color="#00695c" />
            <Text style={styles.contactText}>(81) 98333-2730</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="mail" size={16} color="#00695c" />
            <Text style={styles.contactText}>cleybsond2@gmail.com</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#00695c",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
  },
  headerGradient: {
    backgroundColor: "#00695c",
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: "center",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 4,
    borderColor: "#80cbc4",
  },
  mainName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 1,
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 20,
  },
  locationText: {
    fontSize: 14,
    color: "#80cbc4",
  },
  contactButtons: {
    flexDirection: "row",
    gap: 12,
  },
  contactBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 8,
  },
  contactBtnText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  objectiveCard: {
    backgroundColor: "#ffffff",
    margin: 16,
    marginTop: 20,
    padding: 20,
    borderRadius: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#00695c",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  iconTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  objectiveTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00695c",
  },
  objectiveText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 22,
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00695c",
  },
  educationCard: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  periodBadge: {
    backgroundColor: "#b2dfdb",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  periodText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#00695c",
  },
  educationStatus: {
    fontSize: 12,
    color: "#00897b",
    fontWeight: "600",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  institutionName: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dateText: {
    fontSize: 12,
    color: "#666",
  },
  experienceCard: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  experienceHeader: {
    marginBottom: 16,
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  yearBadge: {
    backgroundColor: "#e0f2f1",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  yearText: {
    fontSize: 11,
    color: "#00695c",
    fontWeight: "600",
  },
  bulletList: {
    gap: 12,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#00695c",
    marginTop: 6,
  },
  bulletText: {
    flex: 1,
    fontSize: 13,
    color: "#555",
    lineHeight: 20,
  },
  coursesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  courseChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  courseChipText: {
    fontSize: 13,
    color: "#333",
    fontWeight: "500",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  skillCard: {
    backgroundColor: "#ffffff",
    width: "48%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  skillTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#00695c",
    marginTop: 8,
    marginBottom: 4,
  },
  skillDesc: {
    fontSize: 11,
    color: "#666",
    textAlign: "center",
    lineHeight: 16,
  },
  additionalInfo: {
    backgroundColor: "#ffffff",
    margin: 16,
    padding: 18,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  additionalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00695c",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: "#555",
  },
  footerContact: {
    backgroundColor: "#ffffff",
    margin: 16,
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    gap: 12,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  contactText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
});
