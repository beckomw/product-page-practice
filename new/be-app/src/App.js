import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import slugify from "react-slugify";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Editor } from "@tinymce/tinymce-react";
import config from "./config";

const defaultValues = {
  title: "",
  content: "",
  address: "",
  city: "",
  category: "",
  postType: "",
};

export default function MultilineTextFields() {
  const [value, setValue] = useState(defaultValues);
  const [slug, setSlug] = useState("");
  const editorRef = useRef(null);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    console.log(`${JSON.stringify(value)}`);

    if (value.title === "") return;
    setSlug(slugify(value.title));
  }, [value]);

  const handleInputChange = (event) => {
    const target = event.target;
    const val = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setValue({
      ...value,
      [name]: val,
    });
  };

  const log = (e) => {
    if (editorRef.current) {
      console.log();
      const contentData = editorRef.current.getContent();
      const data = { ...value, contentData, slug };

      alert(`${JSON.stringify(data)}`);
    }

    e.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Create New Post</h1>
      <FormControl fullWidth>
        <div>
          <TextField
            id="title"
            name="title"
            label="Title"
            value={value.title}
            onChange={handleInputChange}
            style={{ width: "80%", textTransform: "capitalize" }}
          />
          <TextField
            id="slug"
            name="slug"
            label="Slug"
            placeholder="text-to-other-text"
            disabled={true}
            value={slug}
            variant="standard"
          />
          <TextField
            id="address"
            name="address"
            label="Address"
            multiline
            rows={4}
            onChange={handleInputChange}
            placeholder="13 Elm Street"
            value={value.address}
          />
        </div>
      </FormControl>
      <FormControl style={{ width: "20%" }}>
        <InputLabel id="city-label">City</InputLabel>
        <Select
          labelId="city"
          name="city"
          value={value.city}
          label="City"
          type="select"
          onChange={handleInputChange}
        >
          <MenuItem value={"Atlanta, GA"}>Atlanta, GA</MenuItem>
          <MenuItem value={"Denver, CO"}>Denver, CO</MenuItem>
          <MenuItem value={"Dallas, TX"}>Dallas, TX</MenuItem>
        </Select>
      </FormControl>

      <FormControl style={{ width: "20%" }}>
        <InputLabel id="post-type-label">Post Type</InputLabel>
        <Select
          labelId="postType"
          name="postType"
          value={value.postType}
          label="Post Type"
          type="select"
          onChange={handleInputChange}
        >
          <MenuItem value={"Current News"}>Current News</MenuItem>
          <MenuItem value={"Articles"}>Articles</MenuItem>
          <MenuItem value={"Restaurants"}>Restaurants</MenuItem>
          <MenuItem value={"Travel Info"}>Travel Info</MenuItem>
        </Select>
      </FormControl>

      <FormControl style={{ width: "20%" }}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category"
          name="category"
          value={value.category}
          label="Category"
          type="select"
          onChange={handleInputChange}
        >
          <MenuItem value={"Dessert"}>Dessert</MenuItem>
          <MenuItem value={"Soul Food"}>Soul Food</MenuItem>
          <MenuItem value={"Italian"}>Italian</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ width: "80%", height: 300 }}>
        <Editor
          apiKey={config.APIKEY}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <button onClick={log}>Submit</button>
      </FormControl>
    </Box>
  );
}
