'use client'
import {BlogList} from "@/app/bloghome/BlogList";
import Newsletters from "@/app/bloghome/NewsLetters";
import {NavBar2} from "@/app/Headers/NavBar2";
import {NavBar1} from "@/app/Headers/NavBar1";
import {ChakraProvider} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import axios from "axios";
import {headers} from "next/headers";

import "./test.css";
import Sidebar from "@/app/bloghome/SideBar";


interface article{
    title: string;
    content: string;
    userAvatar: string;
    username: string;
    created_at: string;
}

interface BlogPost {
    timeDate: string;
    title: string;
    url: string;
    company: string;
}

const convertToArticle = (blogs: BlogPost[]): article[] => {
    return blogs.map(blog => ({
        title: blog.title,
        content: "Click to read more", // Placeholder, as the original object doesn't have a 'content' field
        userAvatar: "/path/to/default/avatar.jpg", // Default or placeholder avatar
        username: blog.company, // Assuming 'company' can act as a 'username'
        created_at: blog.timeDate || "Not specified" // Using 'timeDate' or a placeholder if not available
    }));
};


const Page = () => {

    const [articles, setArticles] = useState<article[]>([]);


    useEffect(() => {

        const fetchData = async () => {
            try {
                const token  = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5zbmFyZW5kZXIiLCJmaXJzdE5hbWUiOiJOYXJlbmRlciIsImVtYWlsIjoibnNuYXJlbmRlcjU1MTFAZ21haWwuY29tIiwiZXhwIjoxNzEyMjU5MzcwfQ.y2Hk2ZZcDepqB7sV0SpFgDpiWEK_BvoXuxnFY_bpZlcRd5JDmUNrVwVL4TuAXneebUIVlvHsKUBcLtKDJvuuyw";
                const response = await axios.post('http://localhost:8080/fetchBlog', {
                        "pageNo":1
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token.trim()}` },
                    });

                console.log(response.status);
                console.log(response.data);
                if (response.data && response.data.blogList) {
                    setArticles(convertToArticle(response.data.blogList)); // Assuming blogList contains the array of articles
                }

            } catch (error) {
                // Handle any errors here
                console.log(error);
            }
        };


        fetchData();

    }, []);





    return (
        <ChakraProvider>
            <NavBar2 className="newnavbar" />
           <BlogList articles={articles}/>
            <Sidebar/>
        </ChakraProvider>);
};

export default Page;
