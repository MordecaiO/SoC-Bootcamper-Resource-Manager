//create function to delete entire table from database

import { query } from "../index.js";

async function deleteTable() {
  console.log("start");

  try {
    const res = await query(`DROP TABLE resources`);
  } catch (err) {
    console.log(err);
  }

  const res = await query(`DROP TABLE resources`);

  console.log("finish");
}

deleteTable();
