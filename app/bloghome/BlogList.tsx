'use client'
import {Container, SimpleGrid} from "@chakra-ui/react";
import {BlogCard} from "@/app/bloghome/BlogCard";
import {CardBlog} from "@/app/bloghome/Card";
import {useEffect} from "react";
import axios from "axios";

interface article{
    title: string;
    content: string;
    userAvatar: string;
    username: string;
    created_at: string;
}

export const BlogList = ({ articles }: { articles: article[] }) => {



    return (
        <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 8 }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                {articles.map((article, index) => (

                    <BlogCard key={index} {...article}/>

                ))}
            </SimpleGrid>
        </Container>
    );
};
