import * as React from 'react';
import {
    Container,
    Box,
    FormLabel,
    FormControl,
    Input,
    Stack,
    Button,
    Heading,
    VStack,
    Text
} from '@chakra-ui/react';

import axios from "axios";



export const LoginPage = () => {
   //const {colorMode} = useColorModeValue('white', 'gray.700');

    const handleLoginOnclick = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // const formData = new FormData(event.target);
        // const username = formData.get('userName'); // Get the username from the userName input field
        // const password = formData.get('password');
        //
        // console.log(username);
        // console.log(password);

        try {
            const response = await axios.post('http://localhost:8080/login', {
                username: "nsnarender",
                password: "F*ck@Paytm"
            });

            localStorage.setItem('token', response.data.token);
            window.location.href = '/bloghome'; // Redirect to '/dashboard' after successful login
            // Handle the API response here, for example:
            console.log('Login successful:', response.data.token);
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    return (
        <Container maxW="5xl" p={{ base: 5, md: 10 }}>
            <Stack spacing={4} maxW={{ base: '20rem', sm: '25rem' }} margin="0 auto">
                <Stack align="center" spacing={2}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }}>Sign in to your account</Heading>
                    <Text fontSize={{ base: 'sm', sm: 'md' }}>Send a magic link with your email below</Text>
                </Stack>
                <Box pos="relative">
                    <Box
                        pos="absolute"
                        top="-7px"
                        right="-7px"
                        bottom="-7px"
                        left="-7px"
                        rounded="lg"
                        bgGradient="linear(to-l, #7928CA,#FF0080)"
                        transform="rotate(-2deg)"
                    ></Box>
                    <VStack
                        as="form"
                        pos="relative"
                        spacing={8}
                        p={6}
                        rounded="lg"
                        boxShadow="lg"
                    >
                        <FormControl id="userName">
                            <FormLabel>UserName</FormLabel>
                            <Input type="string" placeholder="username" rounded="md" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="password" rounded="md" />
                        </FormControl>
                        <Button
                            bg="blue.400"
                            color="white"
                            _hover={{
                                bg: 'blue.500'
                            }}
                            rounded="md"
                            w="100%"
                            onClick={handleLoginOnclick}
                        >
                            Login
                        </Button>
                    </VStack>
                </Box>
            </Stack>
        </Container>
    );
};
