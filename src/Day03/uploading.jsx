import React, { useState, useEffect } from "react";
import { supabase } from "./Supabbase";
function FileManager() {
  const [files, setFiles] = useState([]); // list of uploaded files
  const [uploading, setUploading] = useState(false);

  // 🟢 Load files from Supabase when component mounts
  useEffect(() => {
    fetchFiles();
  }, []);

  // Fetch all files from bucket
  const fetchFiles = async () => {
    const { data, error } = await supabase.storage.from("Netflix-clone-movies").list("public");
    if (error) {
      console.error("Error fetching files:", error);
    } else {
      setFiles(data);
    }
  };

  // Handle file upload
  const handleUpload = async (event) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles.length) return;

    setUploading(true);

    for (let file of selectedFiles) {
      // create unique name using Date.now()
      const uniqueName = `${Date.now()}-${file.name}`;
      const filePath = `public/${uniqueName}`;

      const { error } = await supabase.storage.from("Netflix-clone-movies").upload(filePath, file);

      if (error) {
        console.error("Upload error:", error);
      }
    }

    setUploading(false);
    fetchFiles(); // refresh gallery
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📂 Supabase File Upload + Gallery</h2>

      {/* File input */}
      <input type="file" multiple onChange={handleUpload} />
      {uploading && <p>Uploading...</p>}

      <h3>Uploaded Files:</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {files.map((file) => {
          const { data } = supabase.storage
            .from("Netflix-clone-movies")
            .getPublicUrl(`public/${file.name}`);
          return (
            <div key={file.name}>
              {/* Image preview */}
              <img
                src={data.publicUrl}
                alt={file.name}
                style={{ width: "150px", borderRadius: "8px" }}
              />
              <p style={{ fontSize: "12px", textAlign: "center" }}>{file.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FileManager;
