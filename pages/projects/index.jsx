import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addProject, deleteProject } from "../../store/dataSlice";
const Projects = () => {
  const projects = useSelector((state) => state.projects.value);
  console.log(projects);
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>DevFolio - Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </>
  );
};

export default Projects;
