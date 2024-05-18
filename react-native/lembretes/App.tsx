import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View
} from 'react-native';
import IconesRedesSociais from './iconesRedesSociais'
import IconesEdicaoRemocao from './iconesEdicaoRemocao'

interface Lembrete {
  id: string
  texto: string
}

export default function App() {
  const [lembrete, setLembrete] = useState<string>('')
  const [lembretes, setLembretes] = useState<Lembrete[]>([])

  const adicionar = () => {
    //1. construir um novo lembrete com id igual à data atual e texto igual àquilo que existe na variável de estado
    const novoLembrete: Lembrete = {
      id: Date.now().toString(),
      texto: lembrete
    }

    // 2. atualizar a lista de lembretes, adicionando o novo lembrete (use a função apropriada). OBS: O último lembrete digitado deve ser o primeiro a ser exibido (top da lista)
    setLembretes(lembretesAtual => [
      novoLembrete,
      ...lembretesAtual
    ])

    // 3. atualizar a variável lembrete, limpando o campo para o usuário
    setLembrete('')

    // 4. vincular essa função ao Pressable
    //Incluído no Pressable (onPress)
  }

  const remover = (id: string) => {
    Alert.alert(
      'Remover lembrete', // Título
      `Realmente quer excluir????? ${lembretes.find(l => l.id === id)?.texto}`,[ // Texto
      //Botões
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: () => {
          setLembretes(lembretesAtuais => lembretesAtuais.filter(l => l.id !== id))
          ToastAndroid.show(
            'Lembrete removido com sucesso',
            ToastAndroid.LONG
          )
        }
      }
    ])
  }

  const atualizar = (id: string) => {
    //Copiar o texto do lembrete clicado para o campo em que os lembretes são digitados
    //O botão Salvar entra em modo de edição e não adiciona mais lembretes
    //O botão Salvar altera o texto do lembrete atual
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite um lembrete'
        onChangeText={setLembrete}
        value={lembrete}
      />
      <Pressable
        style={styles.button}
        onPress={adicionar}
      >
        <Text
          style={styles.buttonText}
        >Salvar</Text>
      </Pressable>
      <FlatList
        style={styles.list}
        keyExtractor={item => item.id}
        data={lembretes}
        renderItem={lembrete => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{lembrete.item.texto}</Text>
            <View
              style={styles.listItemButton}>
              <IconesEdicaoRemocao 
                remover={() => remover(lembrete.item.id)} 
                atualizar={() => atualizar(lembrete.item.id)} />
            </View>
          </View>
        )}
      />
      {/* Componente que exibe os ícones das redes sociais */}
      <IconesRedesSociais></IconesRedesSociais>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0096F3', //material design blue 500
    borderRadius: 4,
    padding: 8,
    width: '80%',
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    padding: 8,
    textAlign: 'center'
  },
  list: {
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '80%',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBlockColor: 'gray',
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    margin: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  listItemText: {
    padding: 12,
    textAlign: 'center',
    margin: 8
  },
  listItemButton: {
    width: '30%',
  }
});
