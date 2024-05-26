'use client';
import React from 'react';
import {
    Container,
    Box,
    HStack,
    VStack,
    Link,
    Text,
    Avatar,
    chakra,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react';

import "./test.css";

interface CardProps {
    title: string;
    content: string;
    userAvatar: string;
    username: string;
    created_at: string;
}
export const BlogCard = ({ title, content, username, userAvatar, created_at }: CardProps) => {
    return (
        <Box className="card" bg={useColorModeValue('white', 'gray.800')} p={4}   rounded="md">
            <VStack spacing={2} mb={5} textAlign="left">
                <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
                    {title}
                </chakra.h1>
                <Text fontSize="md" noOfLines={2} color="gray.500">
                    {content}
                </Text>
            </VStack>
            <HStack spacing={2} alignItems="center">
                <Avatar size="md" title="Author" src={userAvatar} />
                <Box>
                    <Text fontWeight="bold">{username}</Text>
                    <Text fontSize="sm" color="gray.500">
                        {created_at}
                    </Text>
                </Box>
            </HStack>
        </Box>
    );
};
