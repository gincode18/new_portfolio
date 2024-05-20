import React from "react";
import AboutPage from "../_components/About";
import { db } from "~/server/db";
const getalldata = async () => {
  const experience = await db.experience.findMany({
    orderBy: {
      order: "desc",
    },
  });
  const skills = await db.skills.findMany();
  return { experience, skills };
};
const data = await getalldata();
function page() {
  return (
    <AboutPage experience={data.experience} skills={data.skills}></AboutPage>
  );
}

export default page;
