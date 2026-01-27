import { useState } from "react";
import { API } from "../api/api";
import BottomNav from "../components/BottomNav";

export default function Add() {
  const [pillar, setPillar] = useState("education");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    try {
      // ✅ 1) First upload file (if selected)
      let fileUrl = "";

      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadRes = await API.post("/api/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        fileUrl = uploadRes.data.fileUrl;
      }

      // ✅ 2) Save entry with fileUrl
      const res = await API.post("/api/entries", {
        pillar,
        title,
        note: details,
        fileUrl, // ✅ store uploaded file url
      });

      alert("✅ Entry Added Successfully!");
      console.log(res.data);

      setTitle("");
      setDetails("");
      setFile(null);
    } catch (err) {
      alert("❌ Failed: " + err.response?.data?.message);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-28 px-4">
      <div className="max-w-[430px] mx-auto pt-10 space-y-5">
        <h1 className="text-2xl font-extrabold">➕ Add New Entry</h1>

        {/* Pillar Select */}
        <select
          value={pillar}
          onChange={(e) => setPillar(e.target.value)}
          className="w-full p-3 rounded-lg text-black"
        >
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="finance">Finance</option>
        </select>

        {/* Title */}
        <input
          className="w-full p-3 rounded-lg text-black"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Details */}
        <textarea
          className="w-full p-3 rounded-lg text-black"
          placeholder="Enter details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        {/* ✅ File Upload */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full p-2 rounded-lg bg-white text-black"
        />

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-[#11221c] font-bold py-3 rounded-xl"
        >
          ✅ Save Entry
        </button>
      </div>

      <BottomNav active="add" />
    </div>
  );
}

