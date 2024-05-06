import supabase from "./supabase";
export default async function selectblog(id) {
  let { data: courses, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id);

  if (error) {
    console.log("error", error);
  } else {
    return courses;
  }
}
