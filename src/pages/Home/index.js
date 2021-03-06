import React from 'react'
import { Flex, 
  Image,
  IconButton,
  Box,
  Text,
  Divider,
  Button
  } from "@chakra-ui/react"
import Logo from '../../assets/Logo.svg'
import { AddIcon } from '@chakra-ui/icons'
import { Post } from '../../components'

export const Home = () => {
  const posts = [
    {
      id: '1',
      title: 'Teste 1',
      author: {
        firstName: 'Nicolas',
        lastName: 'Garcia',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat tincidunt orci sit amet hendrerit. Donec a efficitur felis, non semper tellus. Proin vitae elit nec magna sollicitudin commodo ut at leo. Pellentesque scelerisque mi eu elit porttitor hendrerit. ',
      url: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: '2',
      title: 'Teste 2',
      author: {
        firstName: 'Nicolas',
        lastName: 'Garcia',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat tincidunt orci sit amet hendrerit. Donec a efficitur felis, non semper tellus. Proin vitae elit nec magna sollicitudin commodo ut at leo. Pellentesque scelerisque mi eu elit porttitor hendrerit. ',
      url: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
  ]
  return (
    <Flex 
    bg='#E5E5E5' //backgroud
    flexDirection='column' //em coluna
    justifyContent='space-between' //joga as imagens ou elementos um para cada lado
    minHeight='100vh' //altura maxima
    paddingX={('5%', '15%', '15%', '15%')} //padding tanto para esquerda tanto para direita, o 4 no marginX representa os pixels
    >
      {/* inicio do Header */}
    <Flex
      bg="#FFF"
      paddingY='2' //Y para cima e baixo, o 2 é 8 pixels
      borderBottomRadius='20'
      justifyContent='space-between'
      alignIntems='centers'
      
    >
      <Image src={Logo} alt='Fanpics Logo' marginX='4' />
      <IconButton aria-label="Novo post"
       icon={<AddIcon />} 
       marginX='4'
       variant='ghost' //para deixar o icone sem cor de fundo
       onClick={() => console.log('abrir modal')}
       />

    </Flex> 
    <Flex flexDirection='row' flexWrap='wrap' minHeight='85vh'>
      <Box width={['100%', '25%', '25%', '25%']}>
        <Flex bg='#FFF' 
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        paddingY='3'
        marginY='3'
        borderRadius='20px'

        >
          <Text fontSize='20px'>Ações</Text>
          <Divider marginY='2'/>
          <Button width='90%'
          rightIcon={<AddIcon/>}
          onClick={() => console.log('abrir modal')}
          justifyContent="space-between"
          borderRadius='20px'
          >Novo Post</Button>
        </Flex>
      </Box>
      <Box width={['100%', 3/4, 3/4, 3/4]}
      minHeight='85vh'
      justifyContent='center'
      alignItems='center'
      >
        <Flex
          flexDirection='column'
          ml={['0', '4', '4', '4']}
        >
          {posts.map(post => (
            <Post
              key={post._id}
              title={post.title}
              author={`${post.author.firstName} ${post.author.lastName}`}
              description={post.description}
              url={post.url}
              openEditModal={() => console.log('abrir modal de edição')}
              openDeleteModal={() => console.log('abrir modal de exclusão')}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
        {/* inicio do Footer */}
      <Box marginY='4'>
        <Text textAlign='center' fontSize='15px' color='gray'>
          Copyright 2021 feito por Igor Duarte - Todos os direitos reservardos
        </Text>
      </Box>
    </Flex>
  )
}
