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

function Form() {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState(2021)
  const [director, setDirector] = useState("")
  const [rating, setRating] = useState(0.0)
  const [notes, setNotes] = useState("")

  const createMovie = () => {
    console.log(title)
    console.log(year)
    console.log(director)
    console.log(rating)
    console.log(notes)
  }

  return (
    <form onSubmit={createMovie}>
      <Center>
        <Box width="50%">
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input placeholder="Title" onChange={({ target }) => setTitle(target.value)} value={title} />
          </FormControl>

          <FormControl id="year">
            <FormLabel>Year</FormLabel>
            <NumberInput 
              max={2022} 
              min={1900} 
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
              placeholder="Select Rating" 
              value={rating}
              onChange={({target}) => setRating(target.value)}
            >
              <option value="rating1">Rating 1</option>
              <option value="rating2">Rating 2</option>
              <option value="rating3">Rating 3</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Notes</FormLabel>
            <Textarea resize="none" placeholder="Notes" value={notes} onChange={({ target }) => setNotes(target.value)} />
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
