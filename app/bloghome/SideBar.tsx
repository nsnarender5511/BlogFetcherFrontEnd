import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Divider,
    Heading,
    Stack,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

const Sidebar = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    // You can continue adding states for companies, dates, etc.

    // Mock data arrays
    const tags = ['React', 'JavaScript', 'CSS'];
    const categories = ['Frontend', 'Backend', 'Fullstack'];

    const handleApply = () => {
        // Handle the apply action, such as filtering data or sending a request
        console.log('Selected Tags:', selectedTags);
        console.log('Selected Categories:', selectedCategories);
    };

    return (
        <Box p={5} shadow="md" borderWidth="1px">
            <VStack spacing={4} align="stretch">
                <Heading size="md">Filters</Heading>

                <Divider />

                <Heading size="sm">Tags</Heading>
                <CheckboxGroup value={selectedTags} onChange={setSelectedTags}>
                    <Stack>
                        {tags.map((tag) => (
                            <Checkbox key={tag} value={tag}>
                                {tag}
                            </Checkbox>
                        ))}
                    </Stack>
                </CheckboxGroup>

                <Heading size="sm">Categories</Heading>
                <CheckboxGroup
                    value={selectedCategories}
                    onChange={setSelectedCategories}
                >
                    <Stack>
                        {categories.map((category) => (
                            <Checkbox key={category} value={category}>
                                {category}
                            </Checkbox>
                        ))}
                    </Stack>
                </CheckboxGroup>

                {/* Repeat for companies, date, etc. */}

                <Button colorScheme="blue" onClick={handleApply}>
                    Apply
                </Button>
            </VStack>
        </Box>
    );
};

export default Sidebar;
