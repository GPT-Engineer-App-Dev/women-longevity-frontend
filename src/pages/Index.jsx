import { Box, Flex, Text, Button, Input, Textarea, Heading, Image } from '@chakra-ui/react';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" bg="pink.100" p={10}>
        <Image src="/images/hero-image.png" alt="Hero Image" boxSize="300px" />
        <Heading>Welcome to Our Longevity Company</Heading>
        <Text fontSize="lg" p={4}>Dedicated to enhancing women's health and wellness.</Text>
      </Flex>
      <Box p={10}>
        <Heading>About Us</Heading>
        <Text>
          Our mission is to empower women through comprehensive health consultations, wellness programs, and personalized treatments designed to enhance longevity and quality of life.
        </Text>
      </Box>
      <Box p={10} bg="gray.100">
        <Heading>Our Services</Heading>
        <Text>Explore our key services:</Text>
        <ul>
          <li>Health Consultations</li>
          <li>Wellness Programs</li>
          <li>Personalized Treatments</li>
        </ul>
      </Box>
      <Box p={10}>
        <Heading>Resources</Heading>
        <Text>Learn more from our resources:</Text>
        <ul>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Educational Materials</a></li>
        </ul>
      </Box>
      <Box p={10} bg="gray.100">
        <Heading>Contact Us</Heading>
        <Flex direction="column" gap={2}>
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="pink">Send Message</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;