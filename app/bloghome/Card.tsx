import React from "react";
import {CardHeader} from "@chakra-ui/card";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Text
} from "@chakra-ui/react";

export const CardBlog = () => {
    return (
        <>

            <Card data-type='Card' maxW='md'>
                <CardHeader data-type='CardHeader'>
                    <Flex data-type='Flex' spacing='4'>
                        <Flex data-type='Flex' flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar data-type='Avatar' name='Segun Adebayo' src='https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'></Avatar>
                            <Box data-type='Box'>
                                <Heading data-type='Heading' size='sm'>Aloïs Pierre</Heading>
                                <Text data-type='Text'>Creator of Studio 23</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </CardHeader>
                <CardBody data-type='CardBody'>
                    <Text data-type='Text'>
                        With Chakra UI, I wanted to sync the speed of development with the speed
                        of design. I wanted the developer to be just as excited as the designer to
                        create a screen.
                    </Text>
                </CardBody>
                <Image data-type='Image'
                       objectFit='cover'
                       src='https://images.unsplash.com/photo-1546815670-5c5e437ffc6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3RhcmJ1Y2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                       alt='Starbucks'
                ></Image>

                <CardFooter data-type='CardFooter'
                            justify='space-between'
                            flexWrap='wrap'
                >
                    <Button data-type='Button' mr='2' flex='1' leftIcon='{<ChatIcon/>}'>
                        Comment
                    </Button>
                    <Button data-type='Button' flex='1' leftIcon='{<LinkIcon/>}'>
                        Share
                    </Button>
                </CardFooter>
            </Card>


        </>
    );
};
