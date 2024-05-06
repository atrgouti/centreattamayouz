import supabase from "./supabase";
export default async function selectcourses(name) {
  let { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .eq("name", name);

  if (error) {
    console.log("error", error);
  } else {
    return courses;
  }
}
