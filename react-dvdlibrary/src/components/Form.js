import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Center,
  Button,
  Textarea,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

import {
  useState
} from "react"

import {
  createDvd
} from '../controller'

function Form() {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState(2021)
  const [director, setDirector] = useState("")
  const [rating, setRating] = useState("G")
  const [notes, setNotes] = useState("")
  
  const createMovie = async() => {
    const response = await createDvd({title, year, director, rating, notes})
    return response
  }

  return (
    <form onSubmit={createMovie}>
      <Center>
        <Box width="50%">
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input 
              placeholder="Title" 
              onChange={({ target }) => setTitle(target.value)} 
              value={title} 
            />
          </FormControl>

          <FormControl id="year">
            <FormLabel>Year</FormLabel>
            <NumberInput 
              max={10000} 
              min={1000} 
              value={year} 
              onChange={(year) => setYear(year)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl id="director" >
            <FormLabel>Director</FormLabel>
            <Input placeholder="Director" 
              value={director} 
              onChange={({ target }) => setDirector(target.value)} 
            />
          </FormControl>

          <FormControl id="rating" >
          <FormLabel>Rating</FormLabel>
            <Select 
              value={rating}
              onChange={({target}) => setRating(target.value)}
            >
              <option value="G">G</option>
              <option value="PG">PG</option>
              <option value="PG-13">PG-13</option>
              <option value="R">R</option>
              <option value="NC-17">NC-17</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Notes</FormLabel>
            <Textarea resize="none" 
              placeholder="Notes" 
              value={notes} 
              onChange={({ target }) => setNotes(target.value)} 
            />
          </FormControl>
          <FormControl>
            <Button type="submit">Hi</Button>
          </FormControl>
        </Box>
      </Center>
    </form>
  );
}

export default Form;
