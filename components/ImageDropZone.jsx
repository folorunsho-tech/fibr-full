import { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Box, Group, Paper } from "@mantine/core";

export default function Previews({ setFeaturedImg, featuredImg }) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxFiles: 1,
    maxSize: 3145728,
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    const setFeatured = async () => {
      const file = await files[0];
      // setFeaturedImg(file)
      // console.log(file);
    };
    setFeatured();
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Box
      fluid
      sx={() => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      })}
    >
      {files.map((file) => (
        <Paper withBorder key={file.name}>
          <Image
            src={file.preview}
            alt={file.name}
            width="300px"
            height="300px"
            loading="lazy"
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        </Paper>
      ))}
      <Group
        sx={(theme) => ({
          border: `2px dashed ${theme.colors.violet[3]}`,
          padding: "1rem",
          textAlign: "center",
        })}
        {...getRootProps()}
      >
        <input {...getInputProps()} required />
        <p>Drag and drop some image here, or click to select image</p>
      </Group>
    </Box>
  );
}
